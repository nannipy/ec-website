"use client";

import { Hero } from "@/components/features/Hero";
import { ProjectGallery } from "@/components/features/ProjectGallery";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Ruler, PenTool, Hammer } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      
      {/* Philosophy / Technical Precision Section */}
      <section ref={targetRef} className="py-24 relative bg-background">
        {/* Decorative architectural line */}
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-border hidden lg:block"></div>
        
        <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
          <motion.div 
            style={{ opacity, y }}
            className="grid lg:grid-cols-12 gap-12 items-start"
          >
            {/* Manifest Text */}
            <div className="lg:col-span-5 lg:col-start-2">
               <span className="font-mono text-xs uppercase tracking-widest text-secondary mb-4 block font-bold">
                 La Nostra Filosofia Operativa
               </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
                 Oltre il cantiere,<br />
                 verso la perfezione.
               </h2>
               <p className="text-xl text-muted-foreground leading-relaxed">
                 Ogni progetto è un dialogo tra lo spazio esistente e il potenziale inespresso. 
                 Non ci limitiamo a costruire: analizziamo, perfezioniamo ed eleviamo ogni dettaglio, 
                 trasformando la visione in una realtà tangibile e duratura.
               </p>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-6 lg:pl-12 grid sm:grid-cols-2 gap-8 mt-12 lg:mt-0">
               {[
                 { 
                   icon: Ruler, 
                   title: "Visione Architettonica", 
                   desc: "Dallo studio di fattibilità al render fotorealistico: trasformiamo le idee in piani d'azione concreti e misurabili." 
                 },
                 { 
                   icon: Hammer, 
                   title: "Maestria Esecutiva", 
                   desc: "Coordinamento rigoroso delle maestranze e direzione lavori presente, per un cantiere pulito, sicuro e puntuale." 
                 },
                 { 
                   icon: PenTool, 
                   title: "Eccellenza Materica", 
                   desc: "Selezione ossessiva di materiali pregiati e finiture d'autore, installate con cura artigianale." 
                 },
                 { 
                   icon: CheckCircle2, 
                   title: "Certezze Assolute", 
                   desc: "Costi chiari, tempi rispettati e certificazioni complete. La tranquillità è parte del nostro servizio." 
                 }
               ].map((item, idx) => (
                 <div key={idx} className="group p-6 border border-border/60 hover:border-primary/50 transition-colors bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                    <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-500" />
                    <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects - Darker contrast section */}
      <section className="bg-slate-50 dark:bg-neutral-900/50 py-10 border-y border-border/50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto max-w-screen-xl relative z-10">
             {/* Reuse existing component but wrap it for context */}
             <ProjectGallery limit={2} />
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden group">
        
        {/* Animated Background Text */}


        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 max-w-3xl">
            Il lusso di non dover <br/> pensare a nulla.
          </h2>
          <p className="max-w-2xl mx-auto text-xl opacity-90 mb-12">
            Affidaci la complessità, goditi il risultato.
            Prenota una consulenza tecnica esclusiva e scopri come possiamo valorizzare il tuo patrimonio immobiliare.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg" className="h-16 px-10 text-lg font-bold bg-secondary text-white hover:bg-white hover:text-primary transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               <Link href="/contatti">Parla con un Architetto</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg font-bold border-white/20 hover:bg-white/10 text-secondary-foreground hover:text-white">
                <Link href="/chi-siamo">La nostra Storia</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
