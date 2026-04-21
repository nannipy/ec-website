"use client";

export function Footer() {
  return (
    <footer className="w-full bg-brand-black overflow-hidden">
      {/* Map/Banner Image */}
      <div className="w-full h-[286px] overflow-hidden relative">
        <iframe
          title="Google Maps - Sede EDOCLA"
          src="https://maps.google.com/maps?q=Via%20della%20Giustiniana%20301%20Roma&t=&z=14&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full grayscale invert contrast-[1.8] brightness-[0.5]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-brand-orange mix-blend-multiply opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      <div className="container mx-auto pt-[80px] md:pt-[272px] pb-[19px] relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-white gap-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-[60px] xl:gap-[100px] items-start w-full lg:w-auto">
            <div className="flex flex-col gap-[13px] w-full sm:w-[152px]">
              <p className="font-sans text-[12px] text-white uppercase">MAIL</p>
              <div className="font-sans text-[12px] text-white flex flex-col">
                <a href="mailto:edoclasrls@legalmail.it" className="break-all hover:text-brand-orange transition-colors">edoclasrls@legalmail.it</a>
                <a href="mailto:edocla.srls2560@gmail.com" className="break-all hover:text-brand-orange transition-colors">edocla.srls2560@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col gap-[11px] w-full sm:w-auto">
              <p className="font-sans text-[12px] text-white uppercase">TELEFONO</p>
              <div className="font-sans text-[12px] text-white flex flex-col">
                <a href="tel:+393925337257" className="hover:text-brand-orange transition-colors whitespace-nowrap">+39 392 533 7257</a>
                <a href="tel:+393342839228" className="hover:text-brand-orange transition-colors whitespace-nowrap">+39 334 283 9228</a>
              </div>
            </div>

            <div className="flex flex-col gap-[11px] w-full sm:w-auto sm:min-w-[137px]">
              <p className="font-sans text-[12px] text-white uppercase">SEDE</p>
              <div className="font-sans text-[12px] text-white">
                <p className="whitespace-normal sm:whitespace-nowrap">Via della Giustiniana, 301</p>
                <p>Roma (RM)</p>
              </div>
            </div>

            <div className="flex flex-col gap-[11px] w-full sm:w-[57px]">
              <p className="font-sans text-[12px] text-white uppercase">ORARI</p>
              <p className="font-sans text-[12px] text-white">
                7:30/19:30
              </p>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end flex-1 w-full lg:pr-[60px] xl:pr-[100px]">
            <h2 className="font-sans font-bold text-[60px] sm:text-[80px] lg:text-[110px] leading-none text-white select-none whitespace-nowrap">
              EDOCLA
            </h2>
          </div>
        </div>

        <div className="mt-16 lg:mt-8 text-[10px] text-white/30 font-mono">
          <p>© {new Date().getFullYear()} EDOCLA S.R.L.S. - P.IVA 17926131002</p>
        </div>
      </div>
    </footer>
  );
}
