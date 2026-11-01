"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://darshanapi.vercel.app/api";

    setIsSending(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch(`${apiUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message || `Unable to send your message (HTTP ${response.status}).`,
        );
      }

      setMessage(result?.message || "Your message has been sent.");
      form.reset();
    } catch (error) {
      setIsError(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          autoComplete="name"
          required
          className="w-full rounded border border-[var(--text-secondary)] px-4 py-3 text-slate"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="w-full rounded border border-[var(--text-secondary)] px-4 py-3 text-slate"
        />
      </div>
      <div>
        <textarea
          rows="4"
          placeholder="Message"
          id="message"
          name="message"
          required
          className="w-full rounded border border-[var(--text-secondary)] px-4 py-3 text-slate"
        />
      </div>
      <button
        type="submit"
        disabled={isSending}
        className="rounded border border-green-400 px-8 py-4 text-green-400 transition-colors hover:bg-green-400/10 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? "Sending…" : "Say Hello"}
      </button>
      {message ? (
        <p
          role="status"
          className={`text-center font-medium ${isError ? "text-red-500" : "text-green-400"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
