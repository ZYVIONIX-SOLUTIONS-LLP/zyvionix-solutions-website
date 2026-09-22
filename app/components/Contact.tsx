"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const services = [
    "Web Development",
    "App Development",
    "AI Chatbot Platform",
    "SaaS Development",
    "UI / UX Design",
    "Digital Marketing",
    "Cloud & DevOps",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Web Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to connect. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-background transition-colors duration-300 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/40 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#7c3aed] dark:text-purple-300 shadow-sm mb-4">
            <MessageSquare className="h-3.5 w-3.5 text-[#7c3aed] dark:text-purple-400" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white leading-tight">
            Ready to Scale Your Business Digitally?
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Tell us about your project vision, challenges, or goals. Our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Contact Form (7 cols on desktop) */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.18),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.08)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0f172a] dark:text-white">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 mt-1">
                    Fill out the form and our technical team will review your requirements.
                  </p>
                </div>
              </div>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 text-sm animate-in fade-in duration-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 flex items-center gap-3 text-sm animate-in fade-in duration-300">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/90 dark:bg-[#14141c] border border-purple-100 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition cursor-pointer"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-white dark:bg-[#14141c] text-slate-900 dark:text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5">
                    Your Message / Project Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your project requirements, estimated timelines, or queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/90 dark:bg-white/5 border border-purple-100 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-7 py-4 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(124,58,237,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2.5px_5px_rgba(0,0,0,0.25)] border border-purple-400/40 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_10px_24px_rgba(124,58,237,0.45)] disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`h-4 w-4 ${loading ? "animate-pulse" : ""}`} />
                  <span>{loading ? "Sending Inquiry..." : "Submit Inquiry"}</span>
                </button>
              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-100 dark:border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-gray-400 gap-2">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#7c3aed] dark:text-purple-400" />
                Response within 24 hours
              </span>
              <span>🔒 100% Privacy & Non-Disclosure Protected</span>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Location Map & Details (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Embedded Google Map Frame */}
            <div className="rounded-[2.5rem] bg-white dark:bg-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.18)] p-4 overflow-hidden flex flex-col justify-between">
              <div className="relative w-full h-[380px] rounded-[2rem] overflow-hidden border border-purple-100/60 dark:border-white/5 bg-slate-900">
                <iframe
                  title="Zyvionix Solutions Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5694883398914!2d76.29367147571348!3d9.969766973551325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08732e796853a5%3A0xe5a1e7b3a4a1122a!2sPanampilly%20Nagar%2C%20Kochi%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0 dark:brightness-[0.82] dark:contrast-[1.1] dark:invert-[0.92] dark:hue-rotate-[180deg]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="px-2 pt-4 pb-1 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-[#7c3aed] dark:text-purple-400" />
                  <span>Panampilly Nagar, Kochi, Kerala</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Panampilly+Nagar+Kochi+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#7c3aed] dark:text-purple-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:info@zyvionixsolutions.com"
                className="rounded-[2rem] bg-white dark:bg-[#0a0a0d] border border-[#e5d8ff]/80 dark:border-white/10 p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 group"
              >
                <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-[#7c3aed] dark:text-purple-400 mb-3 group-hover:scale-105 transition">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Email Us</h4>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5">
                  info@zyvionixsolutions.com
                </p>
              </a>

              <a
                href="tel:+916238392582"
                className="rounded-[2rem] bg-white dark:bg-[#0a0a0d] border border-[#e5d8ff]/80 dark:border-white/10 p-5 shadow-sm hover:shadow-md transition hover:-translate-y-0.5 group"
              >
                <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-[#7c3aed] dark:text-purple-400 mb-3 group-hover:scale-105 transition">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Call Us</h4>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5">
                  +91 62383 92582
                </p>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
