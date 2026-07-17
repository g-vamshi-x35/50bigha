"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Button from "./Button";

type Role = "Buyer" | "Seller" | "Builder";

const roles: Role[] = ["Buyer", "Seller", "Builder"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  role: "Buyer",
};

export default function SignupForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number";
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
        <p className="font-display text-2xl text-ivory">Almost there.</p>
        <p className="mt-2 font-body text-sm text-ivory/60">
          Account creation is being finalized behind the scenes. We&apos;ve noted your details and
          our team will reach out to activate your {form.role.toLowerCase()} account.
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
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        {errors.name && <p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}
      </div>

      <div className="grid gap-x-6 sm:grid-cols-2">
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
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
          {errors.phone && <p className="mt-1 font-body text-xs text-red-400">{errors.phone}</p>}
        </div>
      </div>

      <div className={wrapClass}>
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
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

      <div className="pt-6">
        <p className={labelClass}>I want to join as</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setForm({ ...form, role })}
              className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-[0.12em] transition-colors ${
                form.role === role
                  ? "border-gold bg-gold text-ink"
                  : "border-ivory/15 text-ivory/60 hover:border-gold/50 hover:text-ivory"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" variant="primary" cursorLabel="Create" className="w-full">
          Create account
        </Button>
      </div>

      <p className="mt-6 text-center font-body text-sm text-ivory/50">
        Already have an account?{" "}
        <Link href="/login" className="text-gold hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
