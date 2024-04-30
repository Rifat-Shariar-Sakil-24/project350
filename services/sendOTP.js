const nodemailer = require("nodemailer");

async function sendOTP(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your OTP for Your School App",
      html: `
        <p>Dear User,</p>
        <p>You have requested to change your password for Your School App. Please use the following OTP code to proceed with the password change process:</p>
        <p><strong>Your OTP: ${otp}</strong></p>
        <p>This OTP is valid for a single use and will expire in 10 minutes.</p>
        <p>If you did not request this change, please ignore this email.</p>
        <p>Thank you,</p>
        <p>Your School App Team</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info.response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send OTP email");
  }
}

module.exports = {
  sendOTP
};
