import heroBg from "@assets/generated_images/dark_gothic_cathedral_interior_abstract_background.png";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Dark Gothic Cathedral" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-primary font-sans text-sm md:text-base tracking-[0.5em] uppercase mb-6 drop-shadow-lg">
            Est. 2026
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-wide drop-shadow-2xl leading-none">
            WORSHIP<br />THE<br />DIVINE
          </h1>
          <p className="font-serif text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 italic">
            "In the silence of submission, you find your purpose. Welcome to the sanctuary of the Church of Rara."
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/commandments">
              <a className="px-8 py-4 bg-primary/90 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-300 min-w-[200px] border border-primary">
                Read the Tenets
              </a>
            </Link>
            <Link href="/about">
              <a className="px-8 py-4 bg-transparent text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors duration-300 min-w-[200px] border border-white/20">
                Enter the Chapel
              </a>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Descend</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </div>
  );
}
