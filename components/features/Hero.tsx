"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-background">
      
      {/* Blueprint Grid Background (reinforced locally just in case) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        
        {/* Left Column: Typography */}
        <div className="flex flex-col justify-center pt-10 lg:pt-0">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="h-[2px] w-12 bg-yellow-500"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Dal 2002</span>
                </div>
                
                <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
                    Diamo Forma <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[var(--color-brand-blue)]">
                        All'Eccellenza.
                    </span>
                </h1>
            </motion.div>

            <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed border-l-2 border-primary/20 pl-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Non semplici ristrutturazioni, ma opere di valorizzazione.
                A Roma, fondiamo ingegneria di precisione e design senza tempo per creare spazi che elevano la qualità della vita.
            </motion.p>
            
            <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <Button asChild size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all">
                    <Link href="/contatti">
                        Realizza la tua Visione <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-medium border-2 hover:bg-secondary/10">
                    <Link href="/progetti">Esplora Portfolio</Link>
                </Button>
            </motion.div>
        </div>

        {/* Right Column: Visual Mask */}
        <motion.div 
            className="relative h-[32vh] lg:h-[50vh] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
            {/* Abstract Shape / Video Mask */}
            <div className="cover inset-0 bg-primary/5 rounded-[2rem] overflow-hidden rotate-1 border border-border/50">
                <img src="/progetti/progetto-18.jpeg" alt="Progetto 01" className="object-cover w-full h-[32vh] lg:h-[50vh]" />
            </div>
            
            {/* Floating Card */}
            
        </motion.div>

      </div>
    </section>
  );
}
