import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | EDOCLA S.R.L.S.",
  description: "Informativa estesa sull'uso dei cookie e tecnologie similari ai sensi del GDPR e della Direttiva ePrivacy.",
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>

        <div className="space-y-6 text-sm md:text-base font-sans text-brand-black/80 leading-relaxed">
          <p className="text-xs font-mono text-brand-black/60">
            Informativa sull&apos;utilizzo dei cookie e tecnologie affini
          </p>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove vengono memorizzati per poi essere ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">2. Tipologie di Cookie Utilizzati da Questo Sito</h2>
            <p>
              Questo sito <strong>non utilizza cookie di profilazione commerciale né cookie pubblicitari</strong>.
            </p>
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="font-semibold text-brand-black">a) Cookie Tecnici Strettamente Necessari</h3>
                <p>
                  Sono essenziali per il corretto funzionamento del sito web e per consentire la navigazione. Ai sensi della normativa vigente, per questi cookie non è richiesto il preventivo consenso dell&apos;utente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-black">b) Servizi di Terze Parti (Google Maps)</h3>
                <p>
                  Nel footer del sito è incorporata una mappa tramite Google Maps per mostrare la sede aziendale. Il caricamento di questo servizio potrebbe comportare l&apos;installazione di cookie tecnici o funzionali da parte di Google LLC. Per maggiori dettagli sull&apos;uso dei dati da parte di Google, è possibile consultare l&apos;apposita informativa: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Privacy Policy</a>.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">3. Gestione dei Cookie tramite Browser</h2>
            <p>
              L&apos;utente può gestire o disabilitare l&apos;uso dei cookie in qualsiasi momento modificando le impostazioni del proprio browser di navigazione (Chrome, Safari, Firefox, Edge, ecc.). Si segnala che la disabilitazione totale dei cookie potrebbe limitare alcune funzionalità di visualizzazione del sito.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-lg text-brand-black uppercase">4. Titolare del Trattamento</h2>
            <p>
              Titolare del trattamento è <strong>EDOCLA S.R.L.S.</strong>, Via della Giustiniana, 301 - Roma (RM). Email: <a href="mailto:edocla.srls2560@gmail.com" className="text-brand-orange hover:underline">edocla.srls2560@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
