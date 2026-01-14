
import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Netra Protocol has completely transformed how we deploy high-frequency DeFi primitives. The sub-second finality is a game-changer.",
    name: "Sarah Chen",
    role: "Lead Architect, DeFi Prime",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    quote: "Security was our primary concern when moving to a new chain. Netra's quantum-proof infrastructure gives us the peace of mind we need.",
    name: "Marcus Thorne",
    role: "CTO, Venture-X",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    quote: "The developer experience is unmatched. We were able to migrate our entire dApp ecosystem in less than two weeks.",
    name: "Elena Rodriguez",
    role: "Founder, Prism Protocol",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 4,
    quote: "Netra is more than just a blockchain; it's a comprehensive ecosystem that understands institutional requirements.",
    name: "James Wu",
    role: "Managing Director, Future.Fin",
    image: "https://i.pravatar.cc/150?u=james"
  },
  {
    id: 5,
    quote: "Interoperability is finally seamless. The Cross-Chain Hub has solved our liquidity fragmentation issues overnight.",
    name: "Aisha Patel",
    role: "Product Lead, CrossChain Hub",
    image: "https://i.pravatar.cc/150?u=aisha"
  }
];

const Testimonials: React.FC = () => {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Trusted by the Best</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Hear from the industry leaders and developers building on the Netra ecosystem.</p>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex space-x-8 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingTestimonials.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`}
              className="glass p-8 rounded-3xl w-[400px] flex-shrink-0 whitespace-normal border border-white/5 hover:border-blue-500/30 transition-colors group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-display">{t.name}</h4>
                  <p className="text-xs text-blue-400 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;