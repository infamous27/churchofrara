import { motion } from "framer-motion";
import { ExternalLink, Twitter, Gift, FileText } from "lucide-react";
import avatarImg from "@assets/IMG_2025_08_03-5_19_47_9020_PM_18743612_1768557723428.jpg";

const links = [
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/churchofrara", sub: "Follow the gospel" },
  { icon: Gift, label: "Throne Wishlist", href: "https://throne.com/gdsrara", sub: "Divine offerings" },
  { icon: FileText, label: "Sub Application", href: "https://form.jotform.com/253466376502359", sub: "Petition for servitude" },
];

export default function Links() {
  return (
    <div className="min-h-screen pt-12 pb-24 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-32 h-32 bg-neutral-900 rounded-full mx-auto mb-6 border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl relative">
             <img 
               src={avatarImg} 
               alt="High Priestess Rara" 
               className="w-full h-full object-cover object-[center_20%] scale-150"
             />
          </div>
          <h1 className="font-display text-4xl text-white tracking-widest mb-2 uppercase">Communion</h1>
          <p className="font-serif text-white/60 italic">Sacred channels of the High Priestess</p>
        </motion.div>

        <div className="space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block group relative bg-neutral-900 border border-white/10 hover:border-primary/50 px-6 py-6 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-primary group-hover:text-white transition-colors">
                    <link.icon size={24} />
                  </div>
                  <div>
                    <span className="block font-display text-lg text-white tracking-wide uppercase">{link.label}</span>
                    <span className="block font-sans text-[10px] uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
                      {link.sub}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
