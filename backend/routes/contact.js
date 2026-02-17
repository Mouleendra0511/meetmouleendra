const express = require("express");
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

// POST /api/contact — Save a new contact submission and send email notification
router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, email, subject, message",
            });
        }

        // Save to MongoDB
        const contact = await Contact.create({ name, email, subject, message });

        // Send email notification (non-blocking — don't fail the request if email fails)
        try {
            await sendEmail({ name, email, subject, message });
            console.log(`✉️  Email notification sent for contact from ${name}`);
        } catch (emailError) {
            console.error("⚠️  Email notification failed:", emailError.message);
            // Still return success since data was saved
        }

        res.status(201).json({
            success: true,
            message: "Thank you for reaching out! Your message has been received.",
            data: {
                id: contact._id,
                name: contact.name,
                createdAt: contact.createdAt,
            },
        });
    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((err) => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(", "),
            });
        }

        console.error("❌ Error saving contact:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
});

module.exports = router;
