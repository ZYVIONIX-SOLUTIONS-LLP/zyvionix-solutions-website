import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MapPin, Mail, Phone, Clock, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (

    <footer className="skeu-seam bg-background text-foreground pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        <div>
          <Link href="/" className="flex items-center gap-3 mb-4 group">
            <div className="relative h-10 md:h-12 w-10 md:w-12 shrink-0 flex items-center justify-center">
              <Image
                src="/images/header/Untitled - August 20, 2026 at 17.02.05.png"
                alt="Zyvionix Logo"
                width={48}
                height={48}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">

              Zyvionix Solutions
            </h2>
          </Link>
          <p className="text-muted-foreground dark:text-gray-400 font-light leading-relaxed mb-6">
            Empowering businesses with innovative digital solutions and creative expression.
            We transform ideas into impactful digital experiences from Kerala to the world.
          </p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/akshith_jeevan/" target="_blank" rel="noopener noreferrer" className="skeu-pill p-2 rounded-full text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <FaInstagram size={18} />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="skeu-pill p-2 rounded-full text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.facebook.com/akshith.jeevan" target="_blank" rel="noopener noreferrer" className="skeu-pill p-2 rounded-full text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/in/akshith-jeevan-405144213" target="_blank" rel="noopener noreferrer" className="skeu-pill p-2 rounded-full text-muted-foreground dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="skeu-seam inline-block pt-2 font-semibold mb-4 text-foreground dark:text-white">Quick Links</h3>
          <ul className="space-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/WhoWeAre" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Who We Are</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/portfolio" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Portfolio</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/Carrier" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Careers</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="md:col-span-2 lg:col-span-2">
          <h3 className="skeu-seam inline-block pt-2 font-semibold mb-4 text-foreground dark:text-white">Services</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#web-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Web Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#app-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">App Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ecommerce-platform" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">E-Commerce Platform</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ai-chatbot" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">AI Chatbot Platform</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#saas-development" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">SaaS Development</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#ui-ux-design" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">UI / UX Design</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#digital-marketing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Digital Marketing</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#logo-branding" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Logo & Branding</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <ChevronRight size={14} className="text-purple-600 dark:text-purple-400 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <Link href="/services#iot-solutions" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">IoT Solutions</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="skeu-seam inline-block pt-2 font-semibold mb-4 text-foreground dark:text-white">Contact Info</h3>
          <ul className="space-y-4 text-muted-foreground dark:text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Kerala, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <a href="mailto:akshithjeevan2000@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Email Us</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-purple-600 dark:text-purple-400 shrink-0" />
              <a href="tel:+916238392582" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+91 62383 92582</a>

            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>Monday - Friday</span>
                <span className="text-xs opacity-70">9:00 AM - 6:00 PM</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="skeu-seam mt-16 pt-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© 2026 Zyvionix Solutions. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
