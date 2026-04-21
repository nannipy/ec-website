"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="chi-siamo" className="relative w-full bg-brand-orange py-[91px] overflow-hidden">
      <div className="container mx-auto">
        <p className="font-mono text-[12px] text-white mb-[40px] md:mb-[66px]">
          // CHI SIAMO?
        </p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[123px] items-start mb-[50px]">
          <div className="w-full lg:w-[347px]">
            <div className="font-sans text-[12px] leading-[14px] text-white whitespace-pre-wrap">
              <p className="mb-4">
                EDOCLA S.R.L.S. è un’impresa societaria edile con sede a Roma nata dalla collaborazione di Claudio Zenobi e Edoardo Adamo nel 2025, con soci nel campo dal 1980 che unisce esperienza tecnica e attenzione ai dettagli.
              </p>
              <p>
                Offriamo soluzioni complete per privati, aziende e condomini, seguendo ogni progetto dall’inizio alla consegna finale. Ogni intervento viene eseguito da professionisti qualificati, con materiali certificati e tecnologie aggiornate.
              </p>
            </div>
            <br></br>
            <div className="w-full">
              <p className="font-sans text-[12px] text-white">
                L’azienda basa i suoi valori sulla professionalità e il rispetto delle esigenze dei clienti.
                Essendo da piu di 40 anni nel settore dell’edilizia sia privata che statale, viene garantita la massima resa, con oltre 3000 lavori e progetti eseguiti a livello nazionale ed internazionale
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-[5px] w-full h-auto sm:h-[385px]">
            <div className="w-full sm:w-[349px] aspect-square sm:aspect-auto h-full overflow-hidden">
              <img src="chisiamo1.png" alt="About" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:flex flex-1 aspect-square sm:aspect-auto h-full overflow-hidden">
              <img src="chisiamo2.png" alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
