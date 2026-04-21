"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    name: "EDILIZIA",
    subServices: [
      "COSTRUZIONI",
      "RISTRUTTURAZIONI",
      "MURATURA GENERALE",
      "DEMOLIZIONI",
      "PROGETTAZIONE",
      "RIVESTIMENTI",
      "MAIOLICHE",
      "PAVIMENTAZIONI",
      "PARQUET",
      "RESINE",
    ],
  },
  {
    id: "02",
    name: "COPERTURE",
    subServices: [
      "TETTI",
      "TETTI VENTILATI",
      "TETTI IN LEGNO VENTILATI",
    ],
  },
  { id: "03", name: "SERRAMENTI", subServices: ["PORTE E FINESTRE"] },
  { id: "04", name: "INTERNI E FINITURE" },
  {
    id: "05",
    name: "ENERGIA E IMPIANTI",
    subServices: [
      "IMPIANTI IDRAULICI",
      "TERMOIDRAULICA",
      "IMPIANTI ELETTRICI",
      "INSTALLAZIONE CALDAIE",
      "INSTALLAZIONE SCALDABAGNI",
      "INSTALLAZIONI CONDIZIONATORI",
      "INSTALLAZIONI POMPE DI CALORE",
      "INSTALLAZIONI FOTOVOLTAICO",
    ],
  },
];

export function Services() {
  const [openService, setOpenService] = useState<string | null>("01");

  return (
    <section id="servizi" className="relative w-full bg-brand-offwhite py-[91px] overflow-hidden border-t border-brand-black/10">
      <div className="container mx-auto">
        <p className="font-mono text-[12px] text-brand-orange mb-[60px] md:mb-[92px]">
        // SERVIZI
        </p>

        <div className="flex flex-col">
          {services.map((service) => {
            const isOpen = openService === service.id;
            return (
              <div key={service.id} className="group border-b border-brand-black/20">
                <button
                  onClick={() => setOpenService(isOpen ? null : service.id)}
                  className="w-full flex items-center justify-between py-[21px] text-left transition-colors"
                >
                  <div className="flex items-center gap-6 md:gap-[102px]">
                    <span className="font-mono text-[12px] text-brand-black/50 group-hover:text-brand-orange transition-colors">
                      {service.id}
                    </span>
                    <h3 className={cn(
                      "font-sans font-bold text-[32px] sm:text-[60px] md:text-[96px] leading-none tracking-tight md:tracking-[-1.92px] transition-colors",
                      isOpen ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"
                    )}>
                      {service.name}
                    </h3>
                  </div>
                  <ArrowUp className={cn(
                    "w-[20px] h-[20px] md:w-[26px] md:h-[26px] transition-transform duration-300",
                    isOpen ? "rotate-180 text-brand-orange" : "rotate-90 text-brand-black"
                  )} />
                </button>

                <AnimatePresence>
                  {isOpen && service.subServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pl-8 md:pl-[118px] pb-[30px] gap-[10px]">
                        {service.subServices.map((sub) => (
                          <div key={sub} className="flex items-center justify-between border-b border-brand-black/10 py-[10px] w-full max-w-[1293px]">
                            <span className="font-sans text-[12px] md:text-[14px] text-brand-black uppercase">{sub}</span>
                            <ArrowUp className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] rotate-90 text-brand-black" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
