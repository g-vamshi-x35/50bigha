"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import { createClient } from "@/lib/supabase/client";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;

    setSubmitting(true);
    setSubmitError(null);

    const supabase = createClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim() });

    setSubmitting(false);

    // A duplicate email means they're already subscribed — treat as success.
    if (error && error.code !== "23505") {
      setSubmitError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    setEmail("");
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
        <Button
          type="submit"
          variant="primary"
          cursorLabel="Send"
          disabled={submitting}
          className="!px-5 !py-2.5 text-[11px] shrink-0"
        >
          {submitted ? "Subscribed" : submitting ? "Sending..." : "Subscribe"}
        </Button>
      </div>
      {submitError && <p className="mt-2 font-body text-[11px] text-red-400">{submitError}</p>}
      <p className="mt-3 font-body text-[11px] leading-relaxed text-ivory/40">
        By subscribing you agree to receive property updates from 50 Bigha. Unsubscribe anytime.
      </p>
    </form>
  );
}
