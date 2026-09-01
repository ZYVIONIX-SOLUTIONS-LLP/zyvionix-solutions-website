"use client";

import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  Star
} from "lucide-react";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-36 pb-20">
        {/* Ambient Backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-400/20 dark:bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
            <MessageSquare className="h-4 w-4 text-[#7c3aed] dark:text-purple-300 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
            <span>Contact Us</span>
          </div>

          <h1 className="animate-hero-title text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-[#0f172a] dark:text-white">
              Let's Build Something
            </span>
            <br />
            <span className="text-[#7c3aed] dark:text-purple-400 font-extrabold">
              Amazing Together
            </span>
          </h1>

          <p className="animate-hero-body mx-auto max-w-2xl text-lg leading-8 text-purple-900/70 dark:text-gray-400">
            Ready to transform your business with innovative digital solutions? We&apos;re here to help you navigate your digital journey.
          </p>

          {/* Stats Bar */}
          <div className="animate-hero-cta mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">24hr Response Time</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">25+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-violet-300/60 dark:border-white/[0.08] bg-white/70 dark:bg-black px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none">
              <Star className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-950 dark:text-white">5★ Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREFERRED WAY TO CONNECT ── */}
      <section id="connect" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a] dark:text-white sm:text-4xl mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-lg text-purple-900/70 dark:text-gray-400">
              We're flexible and available through multiple channels to make it easy for you to reach us
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Email Card */}
            <div className="group relative flex flex-col rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-6">
                <Mail className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-2 group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">Email Us</h3>
              <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal mb-6 flex-grow">
                Send us a detailed message and we'll get back to you within 24 hours
              </p>
              <Link href="mailto:info@zyvionixsolutions.com" className="text-[#7c3aed] dark:text-purple-400 font-extrabold text-sm inline-flex items-center gap-1 hover:underline transition-colors">
                info@zyvionixsolutions.com
              </Link>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative flex flex-col rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-6">
                <MessageSquare className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-2 group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">WhatsApp</h3>
              <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal mb-6 flex-grow">
                Quick questions? Chat with us on WhatsApp for instant responses
              </p>
              <Link href="https://wa.me/+916238392582" className="text-[#7c3aed] dark:text-purple-400 font-extrabold text-sm inline-flex items-center gap-1 hover:underline transition-colors">
                Start Chat
              </Link>
            </div>

            {/* Call Card */}
            <div className="group relative flex flex-col rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-6">
                <Phone className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-2 group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">Call Us</h3>
              <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal mb-6 flex-grow">
                Speak directly with our team during business hours
              </p>
              <Link href="tel:+916238392582" className="text-[#7c3aed] dark:text-purple-400 font-extrabold text-sm inline-flex items-center gap-1 hover:underline transition-colors">
                +91 62383 92582 (Available 9 AM - 6 PM IST)
              </Link>

            </div>

            {/* Schedule Card */}
            <div className="group relative flex flex-col rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-6">
                <Calendar className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-2 group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">Schedule Meeting</h3>
              <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal mb-6 flex-grow">
                Book a free consultation call to discuss your project
              </p>
              <Link href="#" className="text-[#7c3aed] dark:text-purple-400 font-extrabold text-sm inline-flex items-center gap-1 hover:underline transition-colors">
                Book Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH INFO ── */}
      <section className="py-24 border-t border-purple-100 dark:border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Info */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Contact Info</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-[#0f172a] dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg leading-8 text-purple-900/70 dark:text-gray-400 mb-10 max-w-lg">
                We're here to help you succeed with your digital transformation journey. Connect with us through any of these channels.
              </p>

              <div className="rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8">
                <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-3">Fast Response Time</h3>
                <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is your best option.
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-[2.2rem] bg-white dark:bg-[rgba(20,12,38,0.92)] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-7 group hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 cursor-pointer">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-4">
                  <MapPin className="h-5 w-5 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0f172a] dark:text-white mb-1 group-hover:text-[#7c3aed] transition-colors">Our Location</h4>
                <p className="text-sm text-[#64748b] dark:text-gray-300 font-normal">Room No. 60/44, 3rd Floor, JC Chambers, Panampilly Nagar, Ernakulam, Kerala</p>
              </div>

              <div className="rounded-[2.2rem] bg-white dark:bg-[rgba(20,12,38,0.92)] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-7 group hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 cursor-pointer">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-4">
                  <Clock className="h-5 w-5 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0f172a] dark:text-white mb-1 group-hover:text-[#7c3aed] transition-colors">Business Hours</h4>
                <p className="text-sm text-[#64748b] dark:text-gray-300 font-normal">Monday - Friday<br />9:00 AM - 6:00 PM</p>
              </div>

              <div className="rounded-[2.2rem] bg-white dark:bg-[rgba(20,12,38,0.92)] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-7 group hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 cursor-pointer">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-4">
                  <Mail className="h-5 w-5 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0f172a] dark:text-white mb-1 group-hover:text-[#7c3aed] transition-colors">Email Us</h4>
                <a href="mailto:info@zyvionixsolutions.com" className="text-sm text-[#64748b] dark:text-gray-300 font-normal hover:text-[#7c3aed] transition-colors">info@zyvionixsolutions.com</a>
              </div>

              <div className="rounded-[2.2rem] bg-white dark:bg-[rgba(20,12,38,0.92)] border border-purple-100/80 dark:border-purple-500/20 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] p-7 group hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 cursor-pointer">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-105 mb-4">
                  <MessageSquare className="h-5 w-5 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0f172a] dark:text-white mb-1 group-hover:text-[#7c3aed] transition-colors">WhatsApp</h4>
                <p className="text-sm text-[#64748b] dark:text-gray-300 font-normal">Available Now</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-purple-100 dark:border-white/10 py-24 text-center relative overflow-hidden transition-colors duration-300 bg-background dark:bg-black">
        <div className="absolute inset-0 bg-purple-300/10 dark:bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_70%)] blur-[100px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Next Steps</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl text-[#0f172a] dark:text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-purple-900/70 dark:text-gray-400 mb-10">
            Join hundreds of businesses that trust us to deliver exceptional digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-base font-bold text-white transition hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.45)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-200 dark:border-white/10 bg-white dark:bg-black px-8 py-4 text-base font-semibold text-purple-700 dark:text-gray-300 transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500/40 hover:text-purple-800 dark:hover:text-white hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] dark:hover:shadow-none hover:-translate-y-1 dark:hover:translate-y-0"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
