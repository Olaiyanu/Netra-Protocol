
import React from 'react';

const Roadmap: React.FC = () => {
  const roadmap = [
    { q: "Q1 2024", title: "Genesis Alpha", items: ["Whitepaper Release", "Seed Round Completion", "Testnet v1 Launch"], status: "completed" },
    { q: "Q2 2024", title: "Expansion", items: ["Mainnet Beta", "Token Generation Event", "DeFi Hub Integration"], status: "current" },
    { q: "Q3 2024", title: "Scalability", items: ["ZK-Rollup Implementation", "Enterprise SDK", "Global Node Expansion"], status: "upcoming" },
    { q: "Q4 2024", title: "Ecosystem", items: ["Netra DAO Launch", "Marketplace API", "Cross-Chain Bridge v2"], status: "upcoming" }
  ];

  return (
    <section id="roadmap" className="py-24 bg-blue-600/5 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Strategic Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our vision for the next phase of decentralized evolution.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((step, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl border ${step.status === 'current' ? 'bg-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'glass border-white/5'}`}>
              {step.status === 'completed' && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-green-500 text-black text-[10px] font-black uppercase rounded-full">Completed</div>
              )}
              {step.status === 'current' && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase rounded-full animate-pulse">In Progress</div>
              )}
              <div className="text-blue-400 font-bold mb-2">{step.q}</div>
              <h3 className="text-xl font-bold font-display mb-4">{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-400">
                    <div className={`mt-1.5 mr-3 w-1.5 h-1.5 rounded-full ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;