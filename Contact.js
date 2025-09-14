import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    // 1. Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // 2. Create email options
    const mailOptions = {
      from: email, // sender (visitor’s email)
      to: process.env.EMAIL_USER, // your Gmail (receiver)
      subject: `Message from ${name}`,
      text: message,
    };

    // 3. Send mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully ✅" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Error sending email ❌" });
  }
}
