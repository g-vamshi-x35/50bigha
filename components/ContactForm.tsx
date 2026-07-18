"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import { createClient } from "@/lib/supabase/client";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Tell us a little more (10+ characters)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    const supabase = createClient();
    const { error } = await supabase.from("enquiries").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    });

    setSubmitting(false);

    if (error) {
      setSubmitError("Something went wrong sending your message. Please try again.");
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  };

  const field = (
    key: keyof FormState,
    label: string,
    type: string = "text",
    isTextarea = false
  ) => (
    <div className="border-b border-ivory/15 pb-2 pt-6 transition-colors focus-within:border-gold">
      <label htmlFor={key} className="font-body text-[11px] uppercase tracking-[0.15em] text-ivory/40">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={key}
          rows={3}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="mt-2 w-full resize-none bg-transparent font-body text-base text-ivory placeholder:text-ivory/30 focus:outline-none"
        />
      ) : (
        <input
          id={key}
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="mt-2 w-full bg-transparent font-body text-base text-ivory placeholder:text-ivory/30 focus:outline-none"
        />
      )}
      {errors[key] && <p className="mt-1 font-body text-xs text-red-400">{errors[key]}</p>}
    </div>
  );

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8">
        <p className="font-display text-2xl text-ivory">Thank you.</p>
        <p className="mt-2 font-body text-sm text-ivory/60">
          Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-body text-xs uppercase tracking-[0.15em] text-gold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {field("name", "Full name")}
      {field("email", "Email address", "email")}
      {field("phone", "Phone number", "tel")}
      {field("message", "Message", "text", true)}
      {submitError && <p className="mt-4 font-body text-xs text-red-400">{submitError}</p>}
      <div className="mt-8">
        <Button type="submit" variant="primary" cursorLabel="Send" disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
