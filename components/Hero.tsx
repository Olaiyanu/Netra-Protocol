
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <header id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden scroll-mt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-pink-600/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-3 animate-ping"></span>
              Netra V2 Mainnet is now Live
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8">
              Decentralize the <br />
              <span className="gradient-text">Future of Value</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              The most efficient infrastructure for building next-generation decentralized applications. Secure, scalable, and built for the next billion users.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onStart}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/20 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-lg transition-all">
                Read Whitepaper
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-[2rem] p-2 md:p-4 shadow-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/crypto/1200/600" 
              alt="Netra Interface" 
              className="w-full h-auto rounded-[1.5rem] opacity-80"
            />
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 glass rounded-3xl p-6 hidden lg:block animate-float">
            <div className="text-xs text-gray-400 mb-2">Total Value Locked</div>
            <div className="text-2xl font-bold font-display mb-1">$4.2B+</div>
            <div className="text-xs text-green-400 flex items-center">
              <TrendingUp size={12} className="mr-1" /> +12.5%
            </div>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 glass rounded-3xl p-6 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-xs text-gray-400 mb-2">Network TPS</div>
            <div className="text-2xl font-bold font-display mb-1">124,502</div>
            <div className="text-xs text-blue-400 flex items-center">
              <Zap size={12} className="mr-1" /> 0.2s Finality
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;