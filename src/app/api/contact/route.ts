type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

function validate(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const { name, email, message, company } = body as Record<string, unknown>;

  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    EMAIL.test(email.trim()) &&
    typeof message === "string" &&
    message.trim().length > 0 &&
    (company === undefined || typeof company === "string")
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!validate(body)) {
    return Response.json(
      { ok: false, error: "Name, a valid email and a message are all required." },
      { status: 422 },
    );
  }

  const name = body.name.trim().slice(0, MAX_NAME);
  const email = body.email.trim().slice(0, MAX_EMAIL);
  const message = body.message.trim().slice(0, MAX_MESSAGE);
  const company = body.company?.trim();

  // Honeypot: bots fill hidden fields. Pretend success so they get no signal.
  if (company) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.",
    );
    return Response.json({ ok: false }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: toEmail,
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("Contact form: Resend API error", response.status, detail);
      return Response.json({ ok: false }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to reach Resend API", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
