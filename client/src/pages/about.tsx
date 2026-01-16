import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-white tracking-wider">The Philosophy</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 font-serif text-lg leading-loose text-white/80"
          >
            <p>
              The Church of Rara is not a place of brick and mortar, but a digital cathedral constructed from the collective devotion of those who seek guidance. It is a manifestation of power, elegance, and absolute control.
            </p>
            <p>
              Here, we celebrate the divine feminine in its most potent form. We believe in the beauty of order, the sanctity of ritual, and the peace found in surrender. This is a sanctuary for those who understand that true strength often requires a gentle hand and a sharp mind.
            </p>
            <p className="text-primary italic border-l-2 border-primary pl-6 py-2">
              "To kneel is not to be weak, but to acknowledge a power greater than oneself."
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="relative aspect-[3/4] bg-neutral-900 border border-white/10 p-2"
          >
             {/* Abstract decorative frame */}
             <div className="absolute inset-0 border border-white/5 m-4" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-9xl text-white/5 select-none">R</span>
                  <span className="block font-sans text-xs tracking-[0.5em] text-white/30 mt-4 uppercase">
                    The Icon
                  </span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
