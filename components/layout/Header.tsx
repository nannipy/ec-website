"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navigation = [
  { name: "CHI SIAMO", href: "#chi-siamo" },
  { name: "SERVIZI", href: "#servizi" },
  { name: "PROGETTAZIONI", href: "/progetti" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={cn(
        "w-full flex items-center justify-between px-[51px] py-[36px] transition-all duration-300",
        scrolled ? "bg-brand-black/80 backdrop-blur-md py-4" : "bg-transparent"
      )}>

        {/* Logo */}
        <Link href="/" className="mix-blend-difference">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.9928 0H0V52H51.9928V33.7026H42.5878C39.6818 39.9449 33.3473 44.283 25.9964 44.283C17.665 44.283 10.6362 38.7065 8.43882 31.0898H52V0H51.9928ZM8.44597 20.9031C10.6505 13.2792 17.6721 7.7098 25.9964 7.7098C34.3207 7.7098 41.3566 13.2792 43.554 20.9031H8.43882H8.44597Z" fill="#000000ff" />
          </svg>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[37px]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] text-black hover:text-brand-orange transition-colors mix-blend-difference"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none border-none h-auto py-[10px] px-[10px] font-mono text-[12px]">
            <Link href="#contattaci">CONTATTACI</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-brand-offwhite hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-brand-black border-brand-orange/20">
              <SheetTitle className="font-mono text-brand-offwhite text-center mb-6">MENU</SheetTitle>
              <SheetDescription className="sr-only">Navigazione principale</SheetDescription>
              <nav className="flex flex-col items-center gap-6">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="font-mono text-lg text-brand-offwhite hover:text-brand-orange"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="w-full bg-brand-orange text-white rounded-none font-mono">
                    <Link href="#contattaci">CONTATTACI</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
