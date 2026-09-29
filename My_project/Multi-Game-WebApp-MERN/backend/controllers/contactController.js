const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/sendEmail');

// Submit a contact message
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({ message: 'Subject is required' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const cleanData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim()
    };

    // Save contact message in database
    const contactRecord = await Contact.create(cleanData);

    // Send email directly to the platform inbox
    let emailResult = null;
    try {
      emailResult = await sendContactEmail(cleanData);
      contactRecord.email_sent = true;
      await contactRecord.save();
    } catch (mailError) {
      console.error('Failed to send contact notification email:', mailError.message);
      // Message is still saved in DB even if SMTP fails
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you shortly.',
      previewUrl: emailResult?.previewUrl || null
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    res.status(500).json({ message: 'Server error processing contact message' });
  }
};

// Get all contact messages (for Admin review)
const getContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching contact messages' });
  }
};

module.exports = { submitContact, getContactMessages };
