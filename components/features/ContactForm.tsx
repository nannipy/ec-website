"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <section id="contattaci" className="relative w-full bg-brand-offwhite py-[91px] overflow-hidden">
      <div className="container mx-auto px-[50px]">
        <p className="font-roboto-mono text-[12px] text-brand-orange mb-[84px]">
          // CONTATTACI
        </p>

        <div className="flex flex-col md:flex-row gap-[123px] items-start">
          {/* Image */}
          <div className="w-full md:w-[585px] h-[415px] overflow-hidden">
            <img src="/progetti/progetto-28.png" alt="Contact" className="w-full h-full object-cover" />
          </div>

          {/* Form */}
          <form className="flex-1 w-full max-w-[703px] flex flex-col gap-[30px] items-end" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label className="font-sans text-[12px] text-brand-black uppercase">NOME</label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="bg-transparent border-none p-0 font-sans italic text-[12px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label className="font-sans text-[12px] text-brand-black uppercase">EMAIL</label>
                <input
                  type="email"
                  placeholder="La tua mail"
                  className="bg-transparent border-none p-0 font-sans italic text-[12px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label className="font-sans text-[12px] text-brand-black uppercase">NUMERO DI TELEFONO</label>
                <input
                  type="tel"
                  placeholder="Il tuo numero"
                  className="bg-transparent border-none p-0 font-sans italic text-[12px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label className="font-sans text-[12px] text-brand-black uppercase">SERVIZIO RICHIESTO</label>
                <input
                  type="text"
                  placeholder="Il servizio che cerchi"
                  className="bg-transparent border-none p-0 font-sans italic text-[12px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-[28px]">
                <label className="font-sans text-[12px] text-brand-black uppercase">DESCRIZIONE</label>
                <textarea
                  placeholder="Descrizione aggiuntiva del progetto"
                  className="bg-transparent border-none p-0 font-sans italic text-[12px] text-brand-black focus:outline-none placeholder:text-brand-black/30 resize-none h-auto"
                />
              </div>
            </div>

            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none border-none h-auto py-[10px] px-[10px] font-mono text-[12px] uppercase">
              CONTATTACI
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
