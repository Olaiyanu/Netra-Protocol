
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Lock, Cpu, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: <Shield className="text-blue-400" />, title: "Quantum Proof", desc: "Military-grade encryption securing every transaction on the Netra chain." },
    { icon: <Zap className="text-purple-400" />, title: "Hyper-Scalability", desc: "Processing over 100k transactions per second with sub-second finality." },
    { icon: <Globe className="text-pink-400" />, title: "Cross-Chain Hub", desc: "Seamless interoperability with Ethereum, Solana, and Cosmos ecosystems." },
    { icon: <Lock className="text-green-400" />, title: "Smart Liquidity", desc: "Automated treasury management maximizing yields for all $NTR holders." },
    { icon: <Cpu className="text-yellow-400" />, title: "ZK-Rollup Native", desc: "Privacy-preserving execution layer for enterprise-grade applications." },
    { icon: <TrendingUp className="text-red-400" />, title: "Governance 2.0", desc: "True decentralized decision making via quadratic voting models." }
  ];

  return (
    <section id="features" className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Powerful Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to build scalable, secure, and user-friendly Web3 applications.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl transition-all border border-white/5 hover:border-blue-500/30 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;