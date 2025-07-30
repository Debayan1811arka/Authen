const express = require("express");
const nodemailer = require("nodemailer");
const User = require("../models/userSchema");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { fname, lname, email, mobile, message } = req.body;

  if (!fname || !lname || !email || !mobile || !message) {
    return res.status(400).json({ error: "Please fill in all required fields" });
  }

  try {
    const userExist = await User.findOne({ email });

    const newMessage = {
      fname,
      lname,
      email,
      mobile,
      message
    };

    if (userExist) {
      userExist.messages.push(newMessage);
      await userExist.save();
    } else {
      const newUser = new User({ ...newMessage, messages: [newMessage] });
      await newUser.save();
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Prepare email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Form Submission Confirmation",
      text: `Hello ${fname},\n\nYour form has been submitted successfully.\n\nYou can view confirmation at: https://authenport.netlify.app/contact\n\nThank you!`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Form submitted and email sent successfully" });

  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
