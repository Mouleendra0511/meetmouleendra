const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, subject, message }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `📬 New Contact: ${subject}`,
        html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; border-radius: 12px; overflow: hidden; border: 1px solid #2a2a2a;">
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 14px; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; color: #e0e0e0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; color: #e0e0e0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 14px; vertical-align: top;">Subject</td>
              <td style="padding: 12px 0; color: #e0e0e0; font-size: 14px;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #e0e0e0; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #2a2a2a; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px; margin: 0;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
