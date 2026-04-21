"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "SOPRALLUOGO GRATUITO E PREVENTIVO",
    paragraphs: [
      "Offriamo un sopralluogo gratuito per analizzare lo stato dell’immobile e comprendere a fondo le tue esigenze. Valutiamo fattibilità, criticità e opportunità, fornendoti una consulenza tecnica chiara e immediata.",
      "Dopo l’analisi iniziale, elaboriamo un preventivo dettagliato e trasparente. Ogni voce è specificata con precisione, incluse tempistiche e materiali previsti, così da garantirti pieno controllo su costi e interventi."
    ]
  },
  {
    number: "2",
    title: "ACQUISIZIONE DOCUMENTI & COLLABORAZIONE CON GEOMETRA E ARCHITETTO",
    paragraphs: [
      "Gestiamo tutta la documentazione necessaria per l’avvio dei lavori, incluse pratiche edilizie e adempimenti normativi. Ci occupiamo degli aspetti burocratici per permetterti di affrontare il progetto con serenità.",
      "Lavoriamo in sinergia con professionisti qualificati per sviluppare un progetto funzionale, sicuro ed esteticamente coerente. Ogni dettaglio viene pianificato con attenzione prima dell’inizio dei lavori."
    ]
  },
  {
    number: "3",
    title: "PREPARAZIONE DEL CANTIERE & COSTRUZIONE",
    paragraphs: [
      "Organizziamo il cantiere in modo ordinato ed efficiente, proteggendo gli ambienti e pianificando le fasi operative. Una gestione precisa ci permette di lavorare in sicurezza e rispettare le tempistiche concordate.",
      "Eseguiamo i lavori con personale specializzato e materiali di alta qualità. Monitoriamo costantemente ogni fase per garantire precisione, solidità e risultati duraturi nel tempo."
    ]
  },
  {
    number: "4",
    title: "CONSEGNA",
    paragraphs: [
      "A fine lavori effettuiamo controlli accurati per assicurarci che tutto sia conforme agli standard qualitativi concordati. Consegniamo l’immobile pronto all’uso, curato nei minimi dettagli."
    ]
  },
];

export function Process() {
  return (
    <section id="processi" className="relative w-full bg-brand-black pt-[89px] pb-[91px] overflow-hidden">
      <div className="container mx-auto">
        <p className="font-mono text-[12px] text-brand-offwhite mb-[60px] md:mb-[89px]">
          // IL NOSTRO PROCESSO
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[5px]">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-[12px] group cursor-pointer">
              <div className="relative aspect-[350/458] w-full flex items-center justify-center overflow-hidden">
                {step.number === "1" ? (
                  <>
                    <svg viewBox="0 0 350 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block group-hover:hidden transition-all duration-300">
                      <path d="M230.51 0.5V345.5H348.51V457.5H0.509766V345.5H118.51V158.603L79.9092 197.203L0.707031 118.009L118.217 0.5H230.51Z" stroke="#FD3F1F"/>
                    </svg>
                    <svg viewBox="0 0 350 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full hidden group-hover:block transition-all duration-300">
                      <path d="M349.01 345V458H0.01V345H118.01V159.81L79.91 197.91L0 118.01L118.01 0H231.01V345H349.01Z" fill="#FD3F1F"/>
                    </svg>
                  </>
                ) : step.number === "2" ? (
                  <>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block group-hover:hidden transition-all duration-300">
                      <g clipPath="url(#clip0_160_839)">
                        <path d="M348.5 0.5V155.7H348.393L158.593 345.5H236.5V291.47H348.5V457.5H0.5V345.207L233.207 112.5H112.5V173.39H0.5V0.5H348.5Z" stroke="#FD3F1F"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_160_839">
                          <rect width="349" height="458" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full hidden group-hover:block transition-all duration-300">
                      <path d="M348.6 156.2L159.8 345H236V290.97H349V458H0V345L232 113H113V173.89H0V0H349V156.2H348.6Z" fill="#FD3F1F"/>
                    </svg>
                  </>
                ) : step.number === "3" ? (
                  <>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block group-hover:hidden transition-all duration-300">
                      <path d="M348.5 0.5V457.5H0.5V345.5H236.5V285H0.5V173H236.5V112.5H0.5V0.5H348.5Z" stroke="#FD3F1F"/>
                    </svg>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full hidden group-hover:block transition-all duration-300">
                      <path d="M349 0V458H0V345H236V285.5H0V172.5H236V113H0V0H349Z" fill="#FD3F1F"/>
                    </svg>
                  </>
                ) : step.number === "4" ? (
                  <>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block group-hover:hidden transition-all duration-300">
                      <path d="M112.5 0.5V173H236.5V0.5H348.5V457.5H236.5V285H0.5V0.5H112.5Z" stroke="#FD3F1F"/>
                    </svg>
                    <svg viewBox="0 0 349 458" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full hidden group-hover:block transition-all duration-300">
                      <path d="M349 0V458H236V285.5H0V0H113V172.5H236V0H349Z" fill="#FD3F1F"/>
                    </svg>
                  </>
                ) : null}
              </div>
              <div className="flex flex-col gap-[12px]">
                <p className="font-sans text-[14px] leading-tight text-white uppercase transition-colors duration-300 group-hover:text-[#FD3F1F]">
                  {step.title}
                </p>
                <div className="flex flex-col gap-[12px] md:hidden group-hover:flex transition-all duration-300">
                  {step.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="font-sans text-[12px] leading-relaxed text-[#E3E3E3]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
