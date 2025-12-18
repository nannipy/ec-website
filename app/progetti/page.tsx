import { ProjectGallery } from "@/components/features/ProjectGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Nostri Progetti | EC Srl",
  description: "Esplora i nostri progetti di restauro e ristrutturazione edilizia a Roma.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen pb-20">
      <div className="container mx-auto px-4 max-w-screen-xl mb-12 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 mt-20">Storie di Trasformazione</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Ogni nostro intervento è un dialogo tra passato e futuro. Esplora come abbiamo ridato vita, funzione e bellezza a spazi che aspettavano di essere riscoperti.
        </p>
      </div>
      <ProjectGallery />
    </div>
  );
}
