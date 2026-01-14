
import React from 'react';

interface CTAProps {
  onStart: () => void;
}

const CTA: React.FC<CTAProps> = ({ onStart }) => {
  return (
    <section id="cta" className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 -z-10" />
           <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">Ready to Build the Future?</h2>
           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Join thousands of developers and institutional investors already shaping the Netra ecosystem.</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onStart}
                className="px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all"
              >
                Launch App
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 hover:bg-white/5 rounded-full font-bold text-lg transition-all">
                Contact Support
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;