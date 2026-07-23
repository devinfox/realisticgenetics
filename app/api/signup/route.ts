// Inserts a signup / feedback row into Supabase (table: foxmade_signups).
// The anon key lives in SUPABASE_ANON_KEY (server-only, never sent to the browser).

export async function POST(request: Request) {
  let body: { email?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!email || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("Supabase env not configured");
    return Response.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(`${url}/rest/v1/foxmade_signups`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email,
      message: message ? message.slice(0, 2000) : null,
      source: "foxmademods.com",
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Supabase insert failed", res.status, detail);
    return Response.json({ error: "Could not save" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
