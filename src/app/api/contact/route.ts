import {NextRequest} from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {name, email, message} = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "dipongkorroy000@gmail.com",
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({success: true}), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({success: false}), {
      status: 500,
      headers: {"Content-Type": "application/json"},
    });
  }
}
