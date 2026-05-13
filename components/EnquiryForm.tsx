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

const services = [
  "Logbook Servicing",
  "Brakes & Clutch",
  "Tyres & Wheel Alignment",
  "Engine Diagnostics",
  "Suspension & Steering",
  "Air Conditioning",
  "MOT & Roadworthy",
  "Exhausts & Emissions",
  "Other",
];

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors";
  const labelClass = "block text-white/60 text-sm mb-1.5";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <section id="enquiry" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Request a Quote
          </h2>
          <p className="text-white/50 mt-3">
            Fill in the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <svg className="w-12 h-12 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-white font-bold text-xl mb-2">Enquiry Sent!</h3>
            <p className="text-white/60 text-sm">We&apos;ll be in touch shortly. You can also call us on{" "}
              <a href="tel:02086403550" className="text-amber-400">020 8640 3550</a>.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-white/40 hover:text-white/70 underline"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#141414] rounded-2xl border border-white/5 p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={inputClass}
                  placeholder="John Smith"
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  type="tel"
                  className={inputClass}
                  placeholder="07700 900000"
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  })}
                  type="email"
                  className={inputClass}
                  placeholder="john@example.com"
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Vehicle Registration</label>
                <input
                  {...register("reg")}
                  className={inputClass}
                  placeholder="e.g. AB12 CDE"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Service Required *</label>
              <select
                {...register("service", { required: "Please select a service" })}
                className={inputClass + " appearance-none cursor-pointer"}
                defaultValue=""
              >
                <option value="" disabled>Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className={errorClass}>{errors.service.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Message</label>
              <textarea
                {...register("message")}
                rows={4}
                className={inputClass + " resize-none"}
                placeholder="Tell us more about your vehicle or the issue you're experiencing..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or call us on{" "}
                <a href="tel:02086403550" className="underline">020 8640 3550</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl text-sm transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Enquiry"}
            </button>

            <p className="text-white/30 text-xs text-center">
              Or call us directly on{" "}
              <a href="tel:02086403550" className="text-amber-400 hover:underline">
                020 8640 3550
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
