"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import { PropertyCategory } from "@/types";

const categories: PropertyCategory[] = [
  "House",
  "Apartment",
  "Villa",
  "Plot",
  "Farm Land",
  "Commercial",
  "Industrial",
  "PG & Rooms",
];

interface FormState {
  name: string;
  phone: string;
  title: string;
  category: PropertyCategory;
  price: string;
  location: string;
  description: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  title: "",
  category: "House",
  price: "",
  location: "",
  description: "",
};

export default function ListPropertyForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number";
    if (!form.title.trim()) next.title = "Give your property a title";
    if (!form.price.trim()) next.price = "Expected price is required";
    if (!form.location.trim()) next.location = "Location is required";
    if (!form.description.trim() || form.description.trim().length < 15)
      next.description = "Add a short description (15+ characters)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  const inputClass =
    "mt-2 w-full bg-transparent font-body text-base text-ivory placeholder:text-ivory/30 focus:outline-none";
  const wrapClass = "border-b border-ivory/15 pb-2 pt-6 transition-colors focus-within:border-gold";
  const labelClass = "font-body text-[11px] uppercase tracking-[0.15em] text-ivory/40";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8">
        <p className="font-display text-2xl text-ivory">Thank you.</p>
        <p className="mt-2 font-body text-sm text-ivory/60">
          Our team will verify your details and contact you within 2-3 business days before your
          listing goes live.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-body text-xs uppercase tracking-[0.15em] text-gold"
        >
          List another property
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-x-6 sm:grid-cols-2">
        <div className={wrapClass}>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
          {errors.name && <p className="mt-1 font-body text-xs text-red-400">{errors.name}</p>}
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
        <label htmlFor="title" className={labelClass}>
          Property title
        </label>
        <input
          id="title"
          placeholder="e.g. 2 BHK Apartment, Telibandha"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className={inputClass}
        />
        {errors.title && <p className="mt-1 font-body text-xs text-red-400">{errors.title}</p>}
      </div>

      <div className="grid gap-x-6 sm:grid-cols-3">
        <div className={wrapClass}>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <select
            id="category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as PropertyCategory })}
            className={`${inputClass} [&>option]:bg-ink`}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className={wrapClass}>
          <label htmlFor="price" className={labelClass}>
            Expected price
          </label>
          <input
            id="price"
            placeholder="e.g. ₹65 Lakh"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className={inputClass}
          />
          {errors.price && <p className="mt-1 font-body text-xs text-red-400">{errors.price}</p>}
        </div>
        <div className={wrapClass}>
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            id="location"
            placeholder="e.g. Telibandha, Raipur"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className={inputClass}
          />
          {errors.location && (
            <p className="mt-1 font-body text-xs text-red-400">{errors.location}</p>
          )}
        </div>
      </div>

      <div className={wrapClass}>
        <label htmlFor="description" className={labelClass}>
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={`${inputClass} resize-none`}
        />
        {errors.description && (
          <p className="mt-1 font-body text-xs text-red-400">{errors.description}</p>
        )}
      </div>

      <p className="mt-4 font-body text-xs text-ivory/40">
        Photo upload becomes available once you create a seller account — our team will follow up
        to collect them during verification.
      </p>

      <div className="mt-8">
        <Button type="submit" variant="primary" cursorLabel="Submit">
          Submit for verification
        </Button>
      </div>
    </form>
  );
}
