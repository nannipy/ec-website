"use client";

import { motion } from "framer-motion";

const items = [
  "GAS", "TERMICA", "ELETTRICA", "ARIA CONDIZIONATA", "DISCARICA", "IDRAULICA"
];

export function Banner() {
  return (
    <div className="bg-brand-orange py-[30px] overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-[15px] items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-[15px] items-center">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-[15px] items-center">
                  <span className="font-sans font-bold text-[32px] text-brand-black tracking-[-0.96px] uppercase">
                    {item}
                  </span>
                  <span className="font-sans font-bold text-[32px] text-brand-black">//</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
