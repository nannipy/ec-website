const items = [
  "GAS",
  "TERMICA",
  "ELETTRICA",
  "ARIA CONDIZIONATA",
  "DISCARICA",
  "IDRAULICA",
];

export function Banner() {
  return (
    <div className="bg-brand-orange py-[30px] overflow-hidden select-none">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex gap-[15px] items-center">
          {/* Repeat twice for a seamless infinite CSS loop */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-[15px] items-center shrink-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-[15px] items-center">
                  {items.map((item, idx) => (
                    <div key={`${i}-${idx}`} className="flex gap-[15px] items-center">
                      <span className="font-sans font-bold text-[32px] text-brand-black tracking-[-0.96px] uppercase">
                        {item}
                      </span>
                      <span className="font-sans font-bold text-[32px] text-brand-black">
                        {"//"}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
