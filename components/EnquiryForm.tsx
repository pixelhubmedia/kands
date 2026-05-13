"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  reg: string;
  service: string;
  message: string;
};

const serviceOptions = [
  "Full or interim service",
  "Brakes (pads, discs, fluid)",
  "Tyres & wheel alignment",
  "Engine diagnostics",
  "Suspension or steering",
  "Air conditioning",
  "MOT preparation",
  "Exhaust repair",
  "Other / not sure yet",
];

const input =
  "w-full bg-white border border-rule text-ink text-[14px] placeholder-ink-faint rounded-lg px-4 py-3 focus:outline-none focus:border-forest transition-colors";

const label = "block text-[12px] font-semibold tracking-wide text-ink-muted uppercase mb-1.5";

const err = "text-[12px] text-red-600 mt-1";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="enquiry" className="py-20 bg-bone border-t border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3">Get in touch</p>
            <h2
              className="text-4xl sm:text-5xl text-ink mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a<br />quote
            </h2>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-6">
              Fill in your details and we&apos;ll get back to you the same day during business hours — usually much sooner.
            </p>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-2">
              Prefer to call?
            </p>
            <a
              href="tel:02086403550"
              className="text-[18px] font-semibold text-forest hover:text-forest-hover transition-colors"
            >
              020 8640 3550
            </a>

            <div className="mt-8 pt-8 border-t border-rule">
              <p className="text-[13px] text-ink-muted leading-relaxed">
                After you enquire, we&apos;ll assess what&apos;s needed and come back with a
                clear quote. No obligation to book.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-forest-pale flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-2xl text-ink mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Enquiry sent
                </h3>
                <p className="text-[14px] text-ink-muted max-w-sm">
                  We&apos;ll be in touch shortly. If it&apos;s urgent, call us directly on{" "}
                  <a href="tel:02086403550" className="text-forest font-medium">020 8640 3550</a>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[13px] text-ink-faint hover:text-ink-muted underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Full name *</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={input}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className={err}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={label}>Phone number *</label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      type="tel"
                      className={input}
                      placeholder="07700 900 000"
                    />
                    {errors.phone && <p className={err}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Email address *</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })}
                      type="email"
                      className={input}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className={err}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className={label}>Vehicle registration</label>
                    <input
                      {...register("reg")}
                      className={input}
                      placeholder="e.g. AB12 CDE"
                    />
                  </div>
                </div>

                <div>
                  <label className={label}>What do you need? *</label>
                  <select
                    {...register("service", { required: "Please select a service" })}
                    defaultValue=""
                    className={input + " cursor-pointer appearance-none"}
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.service && <p className={err}>{errors.service.message}</p>}
                </div>

                <div>
                  <label className={label}>Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={input + " resize-none"}
                    placeholder="Tell us more — what's the car doing, how long has it been doing it, anything you've already tried?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-600">
                    Something went wrong. Please try again or call us on{" "}
                    <a href="tel:02086403550" className="underline">020 8640 3550</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-forest text-white font-semibold text-[14px] py-4 rounded-lg hover:bg-forest-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "loading" ? "Sending..." : "Send Enquiry"}
                </button>

                <p className="text-[12px] text-ink-faint text-center">
                  No obligation. We&apos;ll come back with a clear quote before any work is booked.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
