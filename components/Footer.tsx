
import React from 'react';
import { Layers, ArrowRight, Twitter, Github, MessageSquare } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <Layers className="text-blue-500" size={28} />
              <span className="text-2xl font-bold font-display tracking-tight">NETRA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering the next generation of decentralized finance and web applications through cutting-edge, quantum-proof blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-white/10">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-white/10">
                <Github size={20} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-white/10">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-white font-display">Protocol</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNavigate('docs')} className="hover:text-blue-400 transition-colors text-sm">Documentation</button></li>
              <li><button onClick={() => onNavigate('governance')} className="hover:text-blue-400 transition-colors text-sm">Governance</button></li>
              <li><button onClick={() => onNavigate('audits')} className="hover:text-blue-400 transition-colors text-sm">Security Audits</button></li>
              <li><button onClick={() => onNavigate('explorer')} className="hover:text-blue-400 transition-colors text-sm">Blockchain Explorer</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-white font-display">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#cta" className="hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors text-sm">Community Blog</a></li>
              <li><a href="#investors" className="hover:text-blue-400 transition-colors text-sm">Press Relations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-white font-display">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-6">Receive curated ecosystem updates and technical insights directly from Netra.</p>
            <div className="flex relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm" 
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 px-4 rounded-xl transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-gray-500 text-[11px] uppercase tracking-widest font-bold">
          <p>© 2025 Netra Protocol Labs. Optimized for Web3.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;