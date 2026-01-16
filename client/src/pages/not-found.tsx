import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-primary animate-pulse" />
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl text-white tracking-widest">
          LOST?
        </h1>
        
        <p className="font-serif text-lg text-white/60 italic leading-relaxed">
          You have wandered too far from the altar. Return to the light before the darkness consumes you completely.
        </p>

        <div className="pt-6">
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-transparent border border-white/20 hover:border-primary text-white font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/5">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
