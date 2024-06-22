// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(
  req: {
    method: string;
    body: { name: any; email: any; phoneNumber: any; message: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  }
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phoneNumber, message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "arthouse814enquiry@gmail.com",
      pass: "wquf vudk hsry cgnw",
    },
  });

  const mailOptions = {
    from: email,
    to: "thearthouse814@gmail.com",
    subject: `New Enquiry Form Submitted for ArtHouse814 - From ${name}`,
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          background-color: #ffffff;
          margin: 50px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          overflow: hidden;
        }
        .header {
          background-color: #333333;
          color: #ffffff;
          text-align: center;
          padding: 20px 0;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 30px;
        }
        .content p {
          line-height: 1.6;
          color: #333333 !important;
          margin: 10px 0;
        }
        .content p strong {
          color: #555555;
        }
        .btn {
          display: inline-block;
          padding: 5px 20px;
          margin: 20px 0;
          background-color: #ffffff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          border: 1px solid #333333;
        }
        a {
          color: #555555 !important;
          text-decoration: none !important;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Arthouse 814 Enquiry</h1>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Message:</strong> ${message}</p>
          <a href="mailto:${email}" class="btn">Reply to ${name}</a>
        </div>
      </div>
    </body>
    </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
