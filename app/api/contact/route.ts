import { NextResponse } from "next/server";

const TO_EMAIL = "dustin@actoradvisory.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "aCTOr Advisory <onboarding@resend.dev>";

type ContactPayload = {
  source?: string;
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { source, name, email, company, interest, message } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const lines = [
    `Source: ${source ?? "unknown"}`,
    name && `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    interest && `Interested in: ${interest}`,
    message && `Message: ${message}`,
  ].filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `New lead from actoradvisory.com (${source ?? "site"})`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend request failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
