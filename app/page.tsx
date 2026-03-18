"use client";

import { Hero } from "@/components/features/Hero";
import { About } from "@/components/features/About";
import { Services } from "@/components/features/Services";
import { Process } from "@/components/features/Process";
import { Banner } from "@/components/features/Banner";
import { ContactForm } from "@/components/features/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Process />
      <Banner />
      <ContactForm />
    </div>
  );
}
