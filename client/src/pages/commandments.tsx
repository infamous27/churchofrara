import { motion } from "framer-motion";

const commandments = [
  { id: "1", title: "Law", text: "My word is Law." },
  { id: "2", title: "Honour", text: "Thou shalt honour Me above thyself." },
  { id: "3", title: "Suffering", text: "Thou shalt suffer for My pleasure." },
  { id: "4", title: "Improvement", text: "Thou shalt always seek to improve as My devoted." },
  { id: "5", title: "Fear", text: "Thou shalt fear My wrath." },
  { id: "6", title: "Salvation", text: "Thou shalt know that I am thy salvation." },
  { id: "7", title: "Servitude", text: "Thou shalt find fulfillment in servitude." },
  { id: "8", title: "Worship", text: "Thou shalt begin and end each day in worship." },
  { id: "9", title: "Respect", text: "Thou shalt respect other devotees." },
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
          <span className="text-primary font-sans text-xs tracking-[0.5em] uppercase mb-4 block">The Divine Mandate</span>
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-white tracking-wider uppercase">The Commandments</h1>
          <p className="font-serif text-white/60 italic">"Obedience is the highest form of worship."</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commandments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 min-h-[200px] flex flex-col items-center justify-center text-center"
            >
              <div className="absolute top-4 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-display text-6xl font-bold text-white">†</span>
              </div>
              
              <div className="relative z-10 space-y-4">
                <span className="font-display text-sm text-primary/60 tracking-widest">{item.id}.</span>
                <h3 className="font-display text-xl text-primary tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-serif text-lg text-white/80 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Decorative borders */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
