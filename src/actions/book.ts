"use server";
import nodemailer from "nodemailer";

export async function submitBooking(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const channel = formData.get("channel") as string;
  const details = formData.get("details") as string;

  if (!name || !email || !details) {
    return { success: false, error: "Please fill out all required fields." };
  }

  // Ensure SMTP is strictly typed or fail gracefully with a specific error message
  if (!process.env.SMTP_PASSWORD) {
    console.error("[Mindroap] Missing SMTP_PASSWORD in .env.local");
    return { success: false, error: "Backend SMTP configuration missing! Please add your App Password to .env.local." };
  }

  // Create transporter securely using environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL || "1318rafi@gmail.com",
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  try {
    const res = await transporter.sendMail({
      from: process.env.SMTP_EMAIL || "1318rafi@gmail.com",
      to: "1318rafi@gmail.com",
      replyTo: email,
      subject: `[Mindroap Booking] New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #1ca1f1; margin-top: 0;">New Appointment Booking Lead 🔥</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>YouTube / Social Channel:</strong> ${channel ? `<a href="${channel}">${channel}</a>` : "Not provided"}</p>
          
          <h3 style="margin-top: 30px; border-bottom: 2px solid #1ca1f1; padding-bottom: 5px; display: inline-block;">Project Details:</h3>
          <p style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${details}</p>
        </div>
      `,
    });
    console.log("Email Dispatched Successfully:", res.messageId);
    return { success: true };
  } catch (error: unknown) {
    console.error("Nodemailer Email Sending Failed:", error);
    return { success: false, error: "Failed to dispatch email via Gmail SMTP. Check console logs for connection traces." };
  }
}
