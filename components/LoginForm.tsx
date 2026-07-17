"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "./Button";

interface FormState {
  email: string;
  password: string;
}

const initialState: FormState = { email: "", password: "" };

export default function LoginForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.password || form.password.length < 6)
      next.password = "Password must be at least 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputClass =
    "mt-2 w-full bg-transparent font-body text-base text-ivory placeholder:text-ivory/30 focus:outline-none";
  const wrapClass = "border-b border-ivory/15 pb-2 pt-6 transition-colors focus-within:border-gold";
  const labelClass = "font-body text-[11px] uppercase tracking-[0.15em] text-ivory/40";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8 text-center">
        <p className="font-display text-2xl text-ivory">Account sign-in is coming soon.</p>
        <p className="mt-2 font-body text-sm text-ivory/60">
          We&apos;re finishing account verification behind the scenes. In the meantime, reach our
          team directly and we&apos;ll help you buy, sell, or list a property.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="primary" cursorLabel="Talk">
            Contact our team
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={wrapClass}>
        <label htmlFor="email" className={labelClass}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        {errors.email && <p className="mt-1 font-body text-xs text-red-400">{errors.email}</p>}
      </div>

      <div className={wrapClass}>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <Link href="/contact" className="font-body text-xs text-ivory/40 hover:text-gold">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className={inputClass}
        />
        {errors.password && (
          <p className="mt-1 font-body text-xs text-red-400">{errors.password}</p>
        )}
      </div>

      <div className="mt-8">
        <Button type="submit" variant="primary" cursorLabel="Sign in" className="w-full">
          Sign in
        </Button>
      </div>

      <p className="mt-6 text-center font-body text-sm text-ivory/50">
        New to 50 Bigha?{" "}
        <Link href="/signup" className="text-gold hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}
