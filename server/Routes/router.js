const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, phone, message } = req.body;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Prepare email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Form Submission Confirmation",
      text: `Hello ${fname},\n\nYour form has been submitted successfully.\n\nYou can view confirmation at: https://authenport.netlify.app/contact\n\nThank you!`,
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
