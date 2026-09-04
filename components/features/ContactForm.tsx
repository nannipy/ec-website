"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Si è verificato un errore durante l'invio.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Si è verificato un errore durante l'invio. Riprova più tardi."
      );
    }
  };

  return (
    <section id="contattaci" className="relative w-full bg-brand-offwhite py-[91px] overflow-hidden">
      <div className="container mx-auto">
        <p className="font-roboto-mono text-[12px] text-brand-orange mb-[60px] md:mb-[84px]">
          {"// CONTATTACI"}
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[123px] items-start">
          {/* Image */}
          <div className="w-full lg:w-[585px] aspect-[16/11] lg:h-[415px] overflow-hidden">
            <img src="/progetti/progetto-28.png" alt="Contact" className="w-full h-full object-cover" />
          </div>

          {/* Form */}
          <form className="flex-1 w-full lg:max-w-[703px] flex flex-col gap-[30px] items-end" onSubmit={handleSubmit}>
            {/* Honeypot field - Hidden from human users, lures automated bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company_code">Non compilare questo campo</label>
              <input
                id="company_code"
                name="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="name" className="font-sans text-[12px] text-brand-black uppercase">NOME *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Il tuo nome"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="email" className="font-sans text-[12px] text-brand-black uppercase">EMAIL *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="La tua mail"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="phone" className="font-sans text-[12px] text-brand-black uppercase">NUMERO DI TELEFONO</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={30}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Il tuo numero"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-1">
                <label htmlFor="service" className="font-sans text-[12px] text-brand-black uppercase">SERVIZIO RICHIESTO</label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  maxLength={100}
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Il servizio che cerchi"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30"
                />
              </div>

              <div className="flex flex-col gap-[4px] border-b border-brand-black/20 pb-[28px]">
                <label htmlFor="message" className="font-sans text-[12px] text-brand-black uppercase">DESCRIZIONE</label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrizione aggiuntiva del progetto"
                  className="bg-transparent border-none p-0 font-sans italic text-[14px] text-brand-black focus:outline-none placeholder:text-brand-black/30 resize-none h-[60px]"
                />
              </div>
            </div>

            {status === "success" && (
              <div className="w-full p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-sans">
                ✓ Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderemo al più presto.
              </div>
            )}

            {status === "error" && (
              <div className="w-full p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-sans">
                ✕ {errorMessage || "Si è verificato un errore durante l'invio. Riprova più tardi."}
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
              disabled={status === "loading"}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none border-none h-auto py-[12px] px-[24px] font-mono text-[12px] uppercase w-full sm:w-auto cursor-pointer disabled:opacity-50"
            >
              {status === "loading" ? "INVIO IN CORSO..." : "CONTATTACI"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
