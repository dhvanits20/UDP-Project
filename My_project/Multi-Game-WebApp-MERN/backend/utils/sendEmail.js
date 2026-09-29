const nodemailer = require('nodemailer');

/**
 * Creates and returns a nodemailer transporter based on environment config
 */
const getTransporter = async () => {
  // If real SMTP credentials are provided in .env
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const isGmail = (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail')) || 
                    (process.env.SMTP_USER && process.env.SMTP_USER.includes('@gmail.com'));

    if (isGmail) {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER.trim(),
          pass: process.env.SMTP_PASS.replace(/\s+/g, '') // auto-strips spaces if copied from Google
        }
      });
    }

    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER.trim(),
        pass: process.env.SMTP_PASS.replace(/\s+/g, '')
      }
    });
  }

  // Fallback to test ethereal account for development
  try {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });
  } catch (err) {
    console.warn('Ethereal test account unavailable, using fallback mock transport:', err.message);
    return null;
  }
};

/**
 * Sends a contact message notification to the platform inbox
 */
const sendContactEmail = async ({ name, email, subject, message }) => {
  const recipientInbox = process.env.CONTACT_INBOX_EMAIL || 'dhvanitcshah172006@gmail.com';
  const transporter = await getTransporter();

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Message</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 20px; background-color: #f8fafc; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .card-header { background: linear-gradient(135deg, #b01ba5 0%, #771680 100%); padding: 24px; color: #ffffff; }
        .card-header h2 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
        .card-header p { margin: 6px 0 0; opacity: 0.85; font-size: 13px; }
        .card-body { padding: 24px; }
        .info-row { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700; color: #64748b; margin-bottom: 4px; }
        .value { font-size: 15px; color: #0f172a; font-weight: 500; }
        .message-box { background: #f8fafc; border-left: 4px solid #b01ba5; padding: 16px; border-radius: 6px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap; margin-top: 6px; }
        .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="card-header">
          <h2>📩 New Message from ENDGAME Contact Form</h2>
          <p>You received a new inquiry from a platform visitor.</p>
        </div>
        <div class="card-body">
          <div class="info-row">
            <div class="label">Sender Name</div>
            <div class="value">${name}</div>
          </div>
          <div class="info-row">
            <div class="label">Sender Email</div>
            <div class="value"><a href="mailto:${email}" style="color: #b01ba5; text-decoration: none;">${email}</a></div>
          </div>
          <div class="info-row">
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
          </div>
          <div class="info-row" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>
        <div class="footer">
          This message was sent from the ENDGAME Gaming Platform Contact page. You can reply directly to this email to contact <strong>${name}</strong>.
        </div>
      </div>
    </body>
    </html>
  `;

  if (!transporter) {
    console.log(`[CONTACT EMAIL STORED] (No SMTP active) To: ${recipientInbox}, From: ${name} <${email}>, Subject: ${subject}`);
    return { success: true, simulated: true };
  }

  const mailOptions = {
    from: `"ENDGAME Platform" <${process.env.SMTP_USER || 'no-reply@endgame.com'}>`,
    replyTo: `"${name}" <${email}>`,
    to: recipientInbox,
    subject: `New Contact Message: ${subject}`,
    html: htmlContent,
    text: `New message from: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Contact email dispatched:', info.messageId);

  // If ethereal was used, log the preview url
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log('Preview test email at:', previewUrl);
  }

  return { success: true, messageId: info.messageId, previewUrl };
};

module.exports = { sendContactEmail };
