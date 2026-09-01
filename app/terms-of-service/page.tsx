"use client"

import Link from "next/link";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background selection:bg-purple-500/30">
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground dark:text-white">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg">Last updated: April 29, 2026</p>
          </div>

          {/* Content Section */}
          <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl p-8 md:p-12">
            <div className="prose dark:prose-invert max-w-none">
              <div className="space-y-10 text-foreground/80 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using Zyvionix Solutions LLP's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">2. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Zyvionix's website for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">3. Disclaimer</h2>
                  <p>
                    The materials on Zyvionix's website are provided on an 'as is' basis. Zyvionix makes no warranties, expressed or implied, 
                    and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, 
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">4. Limitations</h2>
                  <p>
                    In no event shall Zyvionix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                    or due to business interruption) arising out of the use or inability to use the materials on Zyvionix's website, even if Zyvionix or a 
                    Zyvionix authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">5. Revisions and Errata</h2>
                  <p>
                    The materials appearing on Zyvionix's website could include technical, typographical, or photographic errors. Zyvionix does not warrant 
                    that any of the materials on its website are accurate, complete or current. Zyvionix may make changes to the materials contained on 
                    its website at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">6. Links</h2>
                  <p>
                    Zyvionix has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
                    The inclusion of any link does not imply endorsement by Zyvionix of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">7. Site Terms of Use Modifications</h2>
                  <p>
                    Zyvionix may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound 
                    by the then current version of these Terms and Conditions of Use.
                  </p>
                </section>
              </div>
            </div>
          </div>
          
          {/* Integrated Contact Section */}
          <div className="mt-24 pt-16 border-t border-black/5 dark:border-white/10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground dark:text-white mb-4">Questions about these Terms?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our terms and conditions, please don't hesitate to contact us. 
                We're here to help you understand how we work.
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
