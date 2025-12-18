import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Siamo | EC Srl",
  description: "Leader nel restauro conservativo a Roma. Il nostro team di esperti valorizza il tuo immobile con passione e tecnica.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">La Nostra Squadra</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Non siamo semplici costruttori, ma custodi del valore.
            EC Srl unisce la tradizione del 'saper fare' romano con le tecnologie costruttive più avanzate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
           <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
             {/* Placeholder */}
             <Image
               src="/progetti/progetto-18.jpeg"
               alt="Team Photo" 
               fill
               className="object-cover"
             />
           </div>
           <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Restituire Bellezza</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Crediamo che ogni immobile possieda un'anima nascosta sotto strati di tempo e interventi superati. Il nostro compito non è coprire, ma rivelare ed esaltare.
                La nostra filosofia è radicata nel rispetto dei materiali naturali e nell'integrazione invisibile della domotica moderna.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Il nostro team è una sinergia di architetti visionari, ingegneri pragmatici e artigiani storici. 
                Lavoriamo con un unico obiettivo: consegnare non solo un immobile ristrutturato, ma un'opera finita, pulita, pronta per essere vissuta.
              </p>
             
             <div className="grid grid-cols-2 gap-6">
               <div className="border-l-4 border-primary pl-4">
                 <span className="block text-3xl font-bold font-heading">20+</span>
                 <span className="text-sm text-muted-foreground">Anni di Eccellenza</span>
               </div>
               <div className="border-l-4 border-primary pl-4">
                 <span className="block text-3xl font-bold font-heading">100+</span>
                 <span className="text-sm text-muted-foreground">Progetti Consegnati</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
