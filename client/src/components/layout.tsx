import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Sanctuary" },
    { href: "/about", label: "About Me" },
    { href: "/commandments", label: "Commandments" },
    { href: "/links", label: "Communion" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-serif selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-display font-bold tracking-[0.2em] text-white hover:text-primary transition-colors duration-500 uppercase">
              Church of Rara
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-xs uppercase tracking-[0.3em] font-sans font-medium transition-all duration-300 relative group",
                    location === link.href ? "text-primary" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-full h-[1px] bg-primary transform origin-left transition-transform duration-300",
                    location === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-display tracking-widest uppercase transition-colors",
                    location === link.href ? "text-primary" : "text-white/80"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[calc(100vh-5rem)]"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-display text-2xl text-white/90 mb-4 tracking-[0.2em] uppercase">Church of Rara</h3>
          <p className="font-sans text-xs text-muted-foreground tracking-widest uppercase mb-8">
            Bow down to the aesthetic.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <p className="text-[10px] text-white/20 font-sans tracking-wider uppercase">
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
