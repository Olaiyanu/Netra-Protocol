
import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const connectors = [
    { name: 'MetaMask', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Logo.svg' },
    { name: 'WalletConnect', icon: 'https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg' },
    { name: 'Coinbase Wallet', icon: 'https://avatars.githubusercontent.com/u/18060234?s=280&v=4' },
    { name: 'Trust Wallet', icon: 'https://trustwallet.com/assets/images/media/assets/trust_platform.svg' }
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md glass p-8 rounded-3xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold font-display">Connect a Wallet</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
        </div>
        <div className="space-y-3">
          {connectors.map((c) => (
            <button key={c.name} className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group">
              <div className="flex items-center space-x-4">
                <img src={c.icon} alt={c.name} className="w-8 h-8 object-contain" />
                <span className="font-medium">{c.name}</span>
              </div>
              <ChevronRight className="text-gray-500 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          By connecting a wallet, you agree to Netra's <a href="#" className="text-blue-400">Terms of Service</a>
        </p>
      </motion.div>
    </div>
  );
};

export default WalletModal;