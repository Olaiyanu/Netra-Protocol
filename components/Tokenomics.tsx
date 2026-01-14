
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

const Tokenomics: React.FC = () => {
  const data = [
    { name: 'Public Sale', value: 25, color: '#3b82f6' },
    { name: 'Ecosystem', value: 35, color: '#8b5cf6' },
    { name: 'Team & Advisors', value: 15, color: '#ec4899' },
    { name: 'Liquidity', value: 15, color: '#10b981' },
    { name: 'Treasury', value: 10, color: '#f59e0b' },
  ];

  return (
    <section id="tokenomics" className="py-24 relative scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Token Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Balanced distribution to ensure long-term sustainability and community growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.name} className="glass p-4 rounded-2xl flex items-center space-x-4">
                  <div className="w-3 h-12 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <div className="text-sm text-gray-400">{item.name}</div>
                    <div className="text-xl font-bold font-display">{item.value}%</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
              <h4 className="font-bold flex items-center mb-2">
                <TrendingUp className="mr-2 text-blue-400" size={20} />
                Deflationary Mechanics
              </h4>
              <p className="text-sm text-gray-400">
                Netra utilizes a dynamic burn mechanism where 0.5% of every transaction is permanently removed from circulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;