"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="https://wa.me/+919188426776" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6.5 z-50 flex items-center justify-center p-1.5 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] backdrop-blur-md hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20 pointer-events-none" />
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
}
