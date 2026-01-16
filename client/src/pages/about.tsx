import { motion } from "framer-motion";
import raraImg from "@assets/rara5_1768557116047.jpg";

export default function About() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-white tracking-wider uppercase">About Me</h1>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-serif text-lg leading-loose text-white/80"
          >
            <p>
              Rara is not just a name, but a presence that transcends mortal understanding. She is the High Priestess, the Divine Goddess, the one who sees into the depths of your soul and turns you into a mindless toy for her. She is the light in the darkness, and can bend reality to her will. Even the universe bows down to her; Rara’s radiance leaves all mortals in awe and makes them drop to their knees. Just a single gaze from her can make one’s life eventful.
            </p>
            
            <h3 className="font-display text-2xl text-primary tracking-widest uppercase mt-12 mb-4">What does she expect?</h3>
            
            <p>
              High Priestess Rara expects nothing less than full-fledged devotion and honesty. She values communication and expects utmost sincerity. One must prove themselves worthy enough to stay in her good grace, and constantly worship and devote their life entirely to her, forgetting all your needs and putting her needs at front.
            </p>
            
            <p className="text-primary italic border-l-2 border-primary pl-6 py-2 mt-8">
              "To kneel is not to be weak, but to acknowledge a power greater than oneself."
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="relative"
          >
             <div className="aspect-[3/4] overflow-hidden border border-white/10 p-2 bg-neutral-900 shadow-2xl">
               <img 
                 src={raraImg} 
                 alt="High Priestess Rara" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none" />
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40 pointer-events-none" />
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
