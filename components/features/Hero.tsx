"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-brand-offwhite pt-[100px] md:pt-[140px] pb-[60px] md:pb-[100px] overflow-hidden">
      {/* Image Grid */}
      <div className="w-full px-5 md:px-[51px]">
        <div className="grid grid-cols-2 md:flex gap-[10px] md:gap-[15px] h-auto md:h-[400px] mb-[36px]">
          <div className="aspect-[4/5] md:w-[349px] md:h-full overflow-hidden">
            <img src="/hero1.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] md:w-[349px] md:h-full overflow-hidden">
            <img src="/hero2.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] md:w-[231px] md:h-full overflow-hidden">
            <img src="/hero3.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] md:flex-1 md:h-full overflow-hidden">
            <img src="/hero4.png" alt="Progetto" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans font-bold text-[48px] sm:text-[80px] md:text-[110px] leading-[1.1] md:leading-[109px] tracking-tight md:tracking-[-2.56px] text-brand-black uppercase w-full"
          >
            <div>Costruiamo valore</div>

            <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-[40px] w-full md:mt-0">
              <span>ristrutturiamo</span>
              <p className="hidden md:block font-sans font-normal text-[12px] leading-[14px] tracking-normal normal-case text-brand-black max-w-[210px] text-left">
                Impresa edile a Roma specializzata in costruzioni, ristrutturazioni complete, impianti elettrici e idraulici, posa pavimenti e soluzioni chiavi in mano.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-[40px] w-full md:mt-0">
              <span>futuro.</span>
              <p className="font-sans font-normal text-[12px] leading-[12px] tracking-normal normal-case text-brand-black md:whitespace-nowrap">
                Precisione, affidabilità, qualità. sempre.
              </p>
            </div>
          </motion.h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-[40px] md:bottom-[100px] right-5 md:right-[51px] flex flex-col gap-4 z-40">
        <a
          href="#contattaci"
          className="w-[46px] h-[46px] bg-brand-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <span className="font-mono text-[10px] font-bold">INFO</span>
        </a>
        <a
          href="https://wa.me/393925337257"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[46px] h-[46px] bg-brand-orange flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        >
          <img src="whatsapp.png" alt="whatsapp" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
