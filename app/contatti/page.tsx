import { ContactForm } from "@/components/features/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | EC Srl",
  description: "Richiedi un preventivo o un sopralluogo gratuito. Siamo a Roma in Via Roma 123.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-20 bg-muted/20 min-h-screen mt-20">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Iniziamo a Costruire</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Ogni grande progetto inizia con una conversazione. Raccontaci la tua idea, le tue esigenze e i tuoi obiettivi. Noi la renderemo solida, bella e duratura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-heading">I nostri recapiti</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Sede Operativa</h3>
                  <p className="text-muted-foreground">Via Roma 123, 00100 Roma (RM)</p>
                  <p className="text-sm text-muted-foreground mt-1">Riceviamo esclusivamente su appuntamento</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefono</h3>
                  <p className="text-muted-foreground">+39 06 12345678</p>
                  <p className="text-sm text-muted-foreground mt-1">Lun - Ven, 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ecsrl.it</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
