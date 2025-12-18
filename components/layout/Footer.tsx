"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black text-primary-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-5">
           <span className="font-heading text-[20vw] font-bold leading-none whitespace-nowrap">EC SRLS</span>
        </div>

      <div className="container mx-auto max-w-screen-xl px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
                <Image src="/logo.png" alt="Logo" className="w-full h-full object-contain" width={100} height={100} />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs mb-8">
              Ridefiniamo lo spazio abitativo romano unendo estetica senza tempo, sostenibilità e precisione ingegneristica.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-6 font-bold">Menu</h3>
            <ul className="space-y-4">
              {['Home', 'Progetti', 'Chi Siamo', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-') === '/home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-2 hover:text-white text-primary-foreground/70 transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-[1px] bg-secondary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
             <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-6 font-bold">Servizi</h3>
             <ul className="space-y-4 text-primary-foreground/70">
                <li>Ristrutturazioni di Pregio</li>
                <li>Restauro Conservativo</li>
                <li>Interior Design Sartoriale</li>
                <li>Consulenza Tecnica & Perizie</li>
             </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-6 font-bold">Contatti</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>Via Roma 123,<br/>00100 Roma (RM)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <a href="tel:+390612345678" className="hover:text-white transition-colors">+39 06 12345678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <a href="mailto:info@ecsrl.it" className="hover:text-white transition-colors">info@ecsrl.it</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-mono">
          <p>© {new Date().getFullYear()} EC Srls - P.IVA 12345678901</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
