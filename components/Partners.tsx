
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="investors" className="py-12 border-y border-white/5 scroll-mt-32">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Backed by the world's leading investors</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="text-2xl font-black font-display tracking-tighter italic">VENTURE-X</div>
           <div className="text-2xl font-black font-display tracking-tighter">CRYPTO_CAP</div>
           <div className="text-2xl font-black font-display tracking-tighter underline underline-offset-4">PRISM.ORG</div>
           <div className="text-2xl font-black font-display tracking-tighter line-through decoration-blue-500">OAK_TREE</div>
           <div className="text-2xl font-black font-display tracking-tighter">FUTURE.FIN</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
