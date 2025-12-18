"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl border shadow-sm">
      <h3 className="text-2xl font-bold font-heading mb-6">Inviaci un messaggio</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2">
          <Label htmlFor="name">Nome Completo</Label>
          <Input id="name" placeholder="Mario Rossi" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="mario@esempio.it" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Telefono (opzionale)</Label>
          <Input id="phone" type="tel" placeholder="+39 333 1234567" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Messaggio</Label>
          <Textarea 
            id="message" 
            placeholder="Descrivi brevemente il tuo progetto..." 
            className="min-h-[120px]" 
          />
        </div>
        <Button size="lg" className="w-full">Richiedi Consulenza</Button>
      </form>
    </div>
  );
}
