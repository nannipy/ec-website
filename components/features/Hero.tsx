"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-brand-offwhite pt-[140px] pb-[100px] overflow-hidden">
      {/* Image Grid */}
      <div className="container mx-auto px-[51px]">
        <div className="flex gap-[15px] h-[400px] mb-[36px]">
          <div className="w-[349px] h-full overflow-hidden">
            <img src="/hero1.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="w-[349px] h-full overflow-hidden">
            <img src="/hero2.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="w-[231px] h-full overflow-hidden">
            <img src="/hero3.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 h-full overflow-hidden">
            <img src="/hero4.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans font-bold text-[128px] leading-[109px] tracking-[-2.56px] text-brand-black uppercase max-w-[1000px]"
          >
            Costruiamo valore <br />
            ristrutturiamo futuro.
          </motion.h1>

          <div className="flex justify-between items-start mt-[40px]">
            <p className="font-sans text-[12px] leading-[12px] text-brand-black max-w-[350px] text-justify">
              Precisione, affidabilità, qualità. sempre.
            </p>
            <p className="font-sans text-[12px] leading-[12px] text-brand-black max-w-[206px]">
              Impresa edile a Roma specializzata in costruzioni, ristrutturazioni complete, impianti elettrici e idraulici, posa pavimenti e soluzioni chiavi in mano.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/393925337257"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[100px] right-[51px] w-[46px] h-[46px] bg-brand-orange flex items-center justify-center z-40 hover:scale-110 transition-transform"
      >
        <img src="whatsapp.png" alt="whatsapp" className="w-8 h-8" />
      </a>
    </section>
  );
}
