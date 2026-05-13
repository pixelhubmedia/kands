import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, reg, service, message } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const toEmail = process.env.RESEND_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "K & S Motors Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New Enquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #f59e0b; margin-bottom: 24px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #999; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #999;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #999;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #999;">Vehicle Reg</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff;">${reg || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #999;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #fff;">${service}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #fff;">${message}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 12px;">
            Sent via the K &amp; S Motors website enquiry form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry email error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
