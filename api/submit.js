import mongoose from "mongoose";
import nodemailer from "nodemailer";

// --- Mongoose Model ---
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxlength: [100, "Name cannot exceed 100 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
            maxlength: [200, "Subject cannot exceed 200 characters"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
            maxlength: [5000, "Message cannot exceed 5000 characters"],
        },
    },
    {
        timestamps: true,
    }
);

// Prevent overwriting model if already compiled (for hot reloading in dev)
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// --- Database Connection ---
let isConnected = false;

const connectToDatabase = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log("✅ MongoDB connected (Serverless)");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        throw error;
    }
};

// --- Email Logic ---
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

// --- Main Handler ---
export default async function handler(req, res) {
    // CORS Headers
    // Allow all origins for simplicity in this case, or restrict to your Vercel domain
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }

    try {
        if (!process.env.MONGO_URI) {
            console.error("❌ MONGO_URI is not defined in environment variables");
            return res.status(500).json({ success: false, message: "Server configuration error" });
        }

        // Connect to DB
        await connectToDatabase();

        const { name, email, subject, message } = req.body;

        console.log("📝 Received submission:", { name, email, subject, messageLength: message ? message.length : 0 });

        // Validate existence
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, email, subject, message",
            });
        }

        // Save to MongoDB
        const contact = await Contact.create({ name, email, subject, message });

        // Send Email (non-blocking attempt)
        try {
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                await sendEmail({ name, email, subject, message });
                console.log(`✉️  Email notification sent for contact from ${name}`);
            } else {
                console.warn("⚠️  Email credentials missing, skipping email notification");
            }
        } catch (emailError) {
            console.error("⚠️  Email notification failed:", emailError.message);
            // We do not fail the request if email fails, as DB save was successful
        }

        res.status(201).json({
            success: true,
            message: "Message sent successfully!",
            data: {
                id: contact._id,
            },
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((err) => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(", "),
            });
        }

        console.error("❌ API Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error: " + error.message,
        });
    }
};
