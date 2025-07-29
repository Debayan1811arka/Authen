const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

// Email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Register user details
router.post("/register", async (req, res) => {
  const { fname, lname, email, mobile, message } = req.body;

  // Validate input
  if (!fname || !lname || !email || !mobile) {
    return res.status(400).json({ status: 400, error: "All Input Required" });
  }

  try {
    const preuser = await users.findOne({ email });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email Using NodeJS",
      text: "Your Form Has Been Submitted",
    };

    if (preuser) {
      const userMessage = await preuser.Messagesave(message);
      console.log("Message Saved:", userMessage);

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email Error:", error);
          return res.status(500).json({ status: 500, error: "Email Send Failed" });
        } else {
          console.log("Email Sent:", info.response);
          return res.status(201).json({ status: 201, message: "Email Sent Successfully" });
        }
      });
    } else {
      const finalUser = new users({ fname, lname, email, mobile, message });
      const storeData = await finalUser.save();

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email Error:", error);
        } else {
          console.log("Email Sent:", info.response);
        }
      });

      return res.status(201).json({ status: 201, storeData });
    }
  } catch (error) {
    console.error("Catch Error:", error);
    return res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

module.exports = router;
