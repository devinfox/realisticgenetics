"use client";

import { useState } from "react";

type Msg = { text: string; kind: "" | "ok" | "err" };

export function SignupForm() {
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<Msg>({ text: "", kind: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!email || email.indexOf("@") < 1) {
      setMsg({ text: "Pop in a valid email first.", kind: "err" });
      return;
    }

    setSending(true);
    setMsg({ text: "Sending…", kind: "" });
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        form.reset();
        setMsg({ text: "Got it — thank you.", kind: "ok" });
      } else {
        setMsg({ text: "Hmm, that didn't send. Try again in a moment?", kind: "err" });
      }
    } catch {
      setMsg({ text: "Couldn't reach the server just now. Try again shortly?", kind: "err" });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input
        type="email"
        name="email"
        placeholder="you@email.com"
        autoComplete="email"
        required
      />
      <textarea
        name="message"
        rows={3}
        placeholder="A bug, a request, or just hi (optional)"
      />
      <div className="row">
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Send it"}
        </button>
        <span className={`msg ${msg.kind}`} role="status" aria-live="polite">
          {msg.text}
        </span>
      </div>
    </form>
  );
}
