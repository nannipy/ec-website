"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  { name: "Home", href: "/" },
  { name: "Progetti", href: "/progetti" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
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
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
            "fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none", // pointer-events-none to let clicks pass through sides
            scrolled ? "py-0" : "py-2"
        )}
    >
      <div className={cn(
          "pointer-events-auto w-full max-w-5xl flex items-center justify-between pl-6 pr-2 py-2 rounded-full transition-all duration-300 backdrop-blur-md border ",
          scrolled 
            ? "bg-background/80 border-border/40 shadow-lg" 
            : "bg-background/80 border-border/40 shadow-lg"
      )}>
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 mr-8">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full transition-colors">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-2 py-1 group-hover:shadow-lg transition-colors">
          {navigation.map((item) => {
             const isActive = pathname === item.href;
             return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium transition-colors"
              >
                {isActive && (
                    <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white shadow-sm rounded-full z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                <span className={cn("relative z-10 transition-colors", isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground")}>
                    {item.name}
                </span>
              </Link>
             );
          })}
        </nav>

        {/* CTA / Mobile Toggle */}
        <div className="flex items-center gap-2 pl-4">
            <Button asChild size="sm" className="hidden md:inline-flex rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all" variant="default">
                <Link href="/contatti">Parla con Noi</Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full shrink-0 hover:bg-muted">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="w-full pt-20 rounded-b-3xl border-b border-border/50">
                   <SheetTitle className="font-heading text-2xl font-bold text-center mb-6">Menu</SheetTitle>
                   <SheetDescription className="sr-only">Navigazione principale</SheetDescription>
                   <nav className="flex flex-col items-center gap-6">
                    {navigation.map((item, i) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-xl font-heading font-medium transition-all hover:scale-105 hover:text-primary",
                            pathname === item.href ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                     <SheetClose asChild>
                        <Button asChild size="lg" className="w-full max-w-xs mt-4 rounded-full font-bold mb-4">
                            <Link href="/contatti">Parla con Noi</Link>
                        </Button>
                     </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
        </div>

      </div>
    </motion.header>
  );
}
