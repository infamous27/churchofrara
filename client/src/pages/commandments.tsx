import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const commandments = [
  { id: "I", title: "Devotion", text: "Your dedication is your currency. Spend it wisely, but spend it all." },
  { id: "II", title: "Silence", text: "Speak only when your words improve upon the silence." },
  { id: "III", title: "Aesthetic", text: "Beauty is mandatory. Mediocrity is the only sin." },
  { id: "IV", title: "Tribute", text: "Generosity is the sincerest form of flattery." },
  { id: "V", title: "Patience", text: "Wait. The anticipation is part of the reward." },
  { id: "VI", title: "Respect", text: "Honor the hierarchy. Know your place within it." },
];

export default function Commandments() {
  return (
    <div className="min-h-screen pt-12 pb-24">
       <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-sans text-xs tracking-[0.5em] uppercase mb-4 block">The Law</span>
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-white tracking-wider">The Commandments</h1>
          <p className="font-serif text-white/60 italic">Read them. Learn them. Live them.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commandments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 min-h-[300px] flex flex-col items-center justify-center text-center"
            >
              <div className="absolute top-4 left-0 w-full flex justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-display text-8xl font-bold text-white">{item.id}</span>
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="font-display text-2xl text-primary tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="w-8 h-[1px] bg-white/20 mx-auto group-hover:w-16 transition-all duration-500" />
                <p className="font-serif text-lg text-white/80 leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
