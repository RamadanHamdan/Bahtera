import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Bahtera Arta Niaga" <${process.env.GMAIL_USER}>`,
      to: 'bartaniaga@gmail.com',
      subject: `Pesan baru dari ${name} — Bahtera Arta Niaga`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1a1a2e; margin-bottom: 24px;">📩 Pesan Baru dari Contact Form</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 120px; font-weight: bold;">Nama</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 0; color: #6b7280; width: 120px; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 120px; font-weight: bold;">Telepon</td>
              <td style="padding: 10px 0; color: #111827;">${phone}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 0; color: #6b7280; width: 120px; font-weight: bold; vertical-align: top;">Pesan</td>
              <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Email ini dikirim otomatis dari website Bahtera Arta Niaga.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan saat mengirim email.' },
      { status: 500 }
    );
  }
}
