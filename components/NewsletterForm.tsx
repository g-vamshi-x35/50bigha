"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex items-center gap-2 rounded-full border border-ivory/15 bg-white/5 p-1.5 pl-5">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full bg-transparent font-body text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
        />
        <Button type="submit" variant="primary" cursorLabel="Send" className="!px-5 !py-2.5 text-[11px] shrink-0">
          {submitted ? "Sent" : "Subscribe"}
        </Button>
      </div>
      <p className="mt-3 font-body text-[11px] leading-relaxed text-ivory/40">
        By subscribing you agree to receive property updates from 50 Bigha. Unsubscribe anytime.
      </p>
    </form>
  );
}
