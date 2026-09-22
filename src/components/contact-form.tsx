"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { contact, fields } from "@/data/contact";

type Status = "idle" | "sending" | "sent" | "failed";

const inputClass =
  "w-full border-0 border-b border-b-grey-500 bg-transparent py-3 text-cream outline-none transition-colors focus:border-b-blue";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>(contact.error);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    // Captured now: currentTarget is null once the handler yields at an await.
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: { ok?: boolean; error?: string } = await response.json();

      if (!response.ok || !result.ok) {
        setError(result.error ?? contact.error);
        setStatus("failed");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setError(contact.error);
      setStatus("failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-[34rem] md:mt-[6dvh]"
      noValidate
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
        style={{ position: "absolute", left: "-9999px" }}
      />

      {fields.map((field) => (
        <p key={field.name} className="mt-6 first:mt-0 md:mt-[3dvh]">
          <label
            htmlFor={field.name}
            className="type-mono block text-[13px] text-grey-300 lg:text-xs"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={4}
              required
              autoComplete={field.autoComplete}
              className={`${inputClass} resize-y`}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required
              autoComplete={field.autoComplete}
              className={inputClass}
            />
          )}
        </p>
      ))}

      <button
        type="submit"
        disabled={status === "sending"}
        className="type-strong mt-10 min-h-11 bg-blue px-8 py-3 text-cream disabled:opacity-60 md:mt-[5dvh]"
      >
        {status === "sending" ? contact.sending : contact.submit}
      </button>

      <p aria-live="polite" className="mt-5 min-h-6 text-sm md:mt-[3dvh]">
        {status === "sent" && <span className="text-cream">{contact.success}</span>}
        {status === "failed" && <span className="text-cream">{error}</span>}
      </p>
    </form>
  );
}
