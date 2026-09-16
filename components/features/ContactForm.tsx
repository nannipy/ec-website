"use client";

import { useActionState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactState } from "@/actions/contact";

const initialState: ContactState = {
  success: false,
  error: null,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <section id="contattaci" className="relative w-full bg-brand-offwhite py-[91px] overflow-hidden">
      <div className="container mx-auto">
        <p className="font-roboto-mono text-[12px] text-brand-orange mb-[60px] md:mb-[84px]">
          {"// CONTATTACI"}
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[123px] items-start">
          {/* Image */}
          <div className="relative w-full lg:w-[585px] aspect-[16/11] lg:h-[415px] overflow-hidden">
            <Image
              src="/progetti/progetto-28.png"
              alt="Contatta EDOCLA Costruzioni"
              fill
              sizes="(max-width: 1024px) 100vw, 585px"
              className="object-cover"
            />
          </div>

          {/* Form */}
          <form
            ref={formRef}
            action={formAction}
            className="flex-1 w-full lg:max-w-[703px] flex flex-col gap-[30px] items-end"
          >
            {/* Honeypot field - Hidden from human users, lures automated bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_code">Non compilare questo campo</label>
              <input
                id="company_code"
                name="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="name" className="font-sans text-[12px] text-brand-black uppercase">
                  NOME *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Il tuo nome"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="email" className="font-sans text-[12px] text-brand-black uppercase">
                  EMAIL *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  placeholder="La tua mail"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="phone" className="font-sans text-[12px] text-brand-black uppercase">
                  NUMERO DI TELEFONO
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={30}
                  placeholder="Il tuo numero"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="service" className="font-sans text-[12px] text-brand-black uppercase">
                  SERVIZIO RICHIESTO
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  maxLength={100}
                  placeholder="Il servizio che cerchi"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-[28px]">
                <label htmlFor="message" className="font-sans text-[12px] text-brand-black uppercase">
                  DESCRIZIONE
                </label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={3000}
                  placeholder="Descrizione aggiuntiva del progetto"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30 resize-none h-[60px]"
                />
              </div>
            </div>

            {state.success && (
              <div className="w-full p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-sans">
                ✓ Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderemo al più presto.
              </div>
            )}

            {state.error && (
              <div className="w-full p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-sans">
                ✕ {state.error}
              </div>
            )}

            <p className="text-[11px] font-sans text-brand-black/60 text-right w-full">
              Inviando questo modulo confermi di aver preso visione dell&apos;
              <Link href="/privacy-policy" className="underline hover:text-brand-orange">
                Informativa Privacy
              </Link>
              . I tuoi dati saranno usati solo per ricontattarti.
            </p>

            <Button
              type="submit"
              disabled={isPending}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none border-none h-auto py-[12px] px-[24px] font-mono text-[12px] uppercase w-full sm:w-auto cursor-pointer disabled:opacity-50"
            >
              {isPending ? "INVIO IN CORSO..." : "CONTATTACI"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
