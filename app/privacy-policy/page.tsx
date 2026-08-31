"use client"

import Link from "next/link";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background selection:bg-purple-500/30">
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground dark:text-white">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">Last updated: April 29, 2026</p>
          </div>

          {/* Content Section */}
          <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl p-8 md:p-12">
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-10 text-foreground/80 leading-relaxed">
                <section>
                  <p className="text-xl leading-relaxed text-foreground dark:text-white mb-6">
                    It is important for you to know what personal data we, Zyvionix ("we"), collect from you (and third parties), 
                    what is the reason we collect it, how we use it and what rights you might be entitled to as a data subject or consumer.
                  </p>
                  <p>
                    In this notice, term "personal data" is used to represent any information relating to an identified or identifiable person; 
                    country-specific notices might adopt a different terminology.
                  </p>
                  <p>
                    We would like you to read this notice, together with any other specific information we will provide to you on various occasions 
                    when we are collecting or processing personal data on Zyvionix websites, products or applications, events, and initiatives 
                    so that you are aware of how and the purpose for which we are processing your personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">How we will use your personal data</h2>
                  <p>
                    We may collect your personal data in several different ways and use it for number of different purposes for the improvement 
                    of your experience in our website. To ensure access to our website and online services.
                  </p>
                  <p className="mt-4">
                    You are able to freely visit Zyvionix.co.in and its affiliate websites on the World Wide Web without telling us who you are. 
                    Our web servers or Affiliates who provide analytics and performance enhancement services may collect the details such as 
                    IP addresses, operating system details, browsing details, device and connectivity details, language settings etc.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">Data Collection & Cookies</h2>
                  <p>
                    Zyvionix uses cookies (small text files placed on your device) for proper functioning of our websites and to help collect data. 
                    Please note that our websites may include links to websites of third parties whose privacy practices differ from those of Zyvionix; 
                    if you provide personal data to any of those websites, your data is governed by their privacy statements.
                  </p>
                  <p className="mt-4">
                    We may also obtain data from third parties including, social media networks, when you grant permission to us to access your data. 
                    Service providers customize offerings and content to your location with the help of IP address.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">Queries, Support and Contact Requests</h2>
                  <p>
                    In case of any queries, requests for more information about initiatives or products or other generic support inquiries, 
                    you may be requested to provide your personal data:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Personal and contact details, like full name, company and role, email and address</li>
                    <li>Demographic data</li>
                    <li>Details of qualifications and profession</li>
                    <li>The reason for your message to us</li>
                  </ul>
                </section>

                <section className="pt-8 border-t border-black/5 dark:border-white/5">
                  <h2 className="text-xl font-bold text-foreground dark:text-white mb-4">Managing Your Data</h2>
                  <p>
                    For information about managing your contact data, email subscriptions and promotional communications, please use the contact 
                    form at Zyvionix.co.in or affiliate websites where you had originally provided your Personal data.
                  </p>
                </section>
              </div>
            </div>
          </div>
          
          {/* Integrated Contact Section */}
          <div className="mt-24 pt-16 border-t border-black/5 dark:border-white/10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">Questions about our Policy?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about how we handle your data or your privacy rights, please don't hesitate to reach out.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link 
                href="/ContactUs" 
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-purple-500/20"
              >
                Contact Us
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
