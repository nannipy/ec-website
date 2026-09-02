import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Informativa Privacy | EDOCLA S.R.L.S.",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen pt-[130px] pb-[100px]">
      <div className="container mx-auto px-5 md:px-[51px] max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono text-brand-orange hover:underline mb-8 uppercase"
        >
          ← Torna alla Home
        </Link>

        <h1 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-tight text-brand-black mb-8">
          Informativa Privacy
        </h1>

        <div className="space-y-6 text-sm md:text-base font-sans text-brand-black/80 leading-relaxed">
          <p className="text-xs font-mono text-brand-black/60">
            Ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR)
          </p>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>EDOCLA S.R.L.S.</strong>, con sede legale in Via della Giustiniana, 301 - Roma (RM), P.IVA e C.F. 17926131002.
            </p>
            <p>
              Email di contatto: <a href="mailto:edocla.srls2560@gmail.com" className="text-brand-orange hover:underline">edocla.srls2560@gmail.com</a><br />
              PEC: <a href="mailto:edoclasrls@legalmail.it" className="text-brand-orange hover:underline">edoclasrls@legalmail.it</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">2. Tipologia di Dati Raccolti e Finalità</h2>
            <p>
              Attraverso il modulo di contatto presente sul sito, raccogliamo esclusivamente i dati forniti volontariamente dall&apos;utente:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Eventuale messaggio/descrizione della richiesta</li>
            </ul>
            <p>
              <strong>Finalità:</strong> i dati sono utilizzati esclusivamente per rispondere alle richieste di preventivo o di informazioni inviate dall&apos;utente. I dati non saranno utilizzati per newsletter, scopi pubblicitari o ceduti a soggetti terzi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">3. Base Giuridica</h2>
            <p>
              Il trattamento è necessario all&apos;esecuzione di misure precontrattuali o contrattuali adottate su richiesta dell&apos;interessato (art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">4. Conservazione dei Dati</h2>
            <p>
              I dati vengono conservati per il tempo strettamente necessario all&apos;evasione della richiesta e per gli eventuali adempimenti previsti dalla legge in caso di conclusione del rapporto contrattuale.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">5. Diritti dell&apos;Interessato</h2>
            <p>
              L&apos;utente ha diritto di richiedere l&apos;accesso ai propri dati personali, la rettifica, la cancellazione, la limitazione del trattamento o l&apos;opposizione al trattamento (artt. 15 e ss. GDPR).
            </p>
            <p>
              Per esercitare tali diritti, è possibile contattare il Titolare via email all&apos;indirizzo <a href="mailto:edocla.srls2560@gmail.com" className="text-brand-orange hover:underline">edocla.srls2560@gmail.com</a>. È inoltre possibile proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
