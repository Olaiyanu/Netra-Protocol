
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, ShieldCheck, Landmark, Search, ExternalLink, ChevronRight, Code, Activity, Server, Layers } from 'lucide-react';
import { ViewType } from '../App';

interface SubPageProps {
  type: ViewType;
  onBack: () => void;
}

const SubPage: React.FC<SubPageProps> = ({ type, onBack }) => {
  const getContent = () => {
    switch (type) {
      case 'docs':
        return {
          title: "Technical Documentation",
          subtitle: "Complete guide to the Netra core protocol, SDKs, and APIs.",
          icon: <Book className="text-blue-500" size={48} />,
          sections: [
            { title: "Introduction", content: "Netra is a high-performance, ZK-Rollup native blockchain designed for institutional-grade decentralized applications." },
            { title: "Core Concepts", content: "Learn about sub-second finality, quantum-resistant cryptography, and our hybrid consensus mechanism." },
            { title: "Developer SDK", content: "Integrate Netra into your dApp using our Rust-based SDK or TypeScript providers." }
          ]
        };
      case 'governance':
        return {
          title: "Governance Hub",
          subtitle: "Participate in the decentralized evolution of the protocol.",
          icon: <Landmark className="text-purple-500" size={48} />,
          sections: [
            { title: "Active Proposals", content: "Vote on Protocol Upgrade v2.4 - Implementation of Quadratic Staking Rewards." },
            { title: "Staking & Voting", content: "Lock your $NTR tokens to gain governance weight and earn inflationary rewards." },
            { title: "Treasury Management", content: "Track how the $120M Netra Ecosystem Fund is being deployed across the network." }
          ]
        };
      case 'audits':
        return {
          title: "Security & Audits",
          subtitle: "Our commitment to the highest security standards in Web3.",
          icon: <ShieldCheck className="text-green-500" size={48} />,
          sections: [
            { title: "Recent Reports", content: "CertiK: Grade A+ (98/100) - Netra Core Protocol v1.2" },
            { title: "Formal Verification", content: "Our smart contract execution layer has been formally verified by OpenZeppelin labs." },
            { title: "Bug Bounty", content: "We offer up to $500k for critical vulnerabilities discovered through our Immunefi program." }
          ]
        };
      case 'explorer':
        return {
          title: "Blockchain Explorer",
          subtitle: "Real-time visibility into the Netra Network status and transactions.",
          icon: <Search className="text-orange-500" size={48} />,
          sections: [
            { title: "Network Overview", content: "Current Height: 12,450,230 | Avg Block Time: 0.8s | TPS: 142,500" },
            { title: "Latest Blocks", content: "Block #12450229: 45 txs - Validator: Node_Delta | Block #12450228: 12 txs - Validator: Node_Omega" },
            { title: "Token Distribution", content: "Total $NTR Staked: 45.2% | Unique Holders: 2.1M+" }
          ]
        };
      default:
        return { title: "Netra Page", subtitle: "Information about our protocol.", icon: <Layers />, sections: [] };
    }
  };

  const content = getContent();

  return (
    <div className="pt-32 pb-24 min-h-[70vh]">
      <div className="container mx-auto px-6">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </motion.button>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 mb-16"
          >
            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl">
              {content.icon}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">{content.title}</h1>
              <p className="text-xl text-gray-400 max-w-2xl">{content.subtitle}</p>
            </div>
          </motion.div>

          <div className="grid gap-8">
            {content.sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="glass p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold font-display text-white">{section.title}</h3>
                  <div className="p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} className="text-blue-400" />
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {section.content}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-bold flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-all">
                    <span>Learn More</span>
                    <ChevronRight size={14} />
                  </button>
                  {type === 'docs' && (
                    <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-bold flex items-center space-x-2 hover:bg-white/10 transition-all">
                      <Code size={14} />
                      <span>View Source</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPage;