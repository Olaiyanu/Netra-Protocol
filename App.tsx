
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WalletModal from './components/WalletModal';
import SubPage from './components/SubPage';

export type ViewType = 'home' | 'docs' | 'governance' | 'audits' | 'explorer';

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const openWalletModal = () => setWalletModalOpen(true);
  const closeWalletModal = () => setWalletModalOpen(false);

  const navigateTo = (newView: ViewType) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync scroll behavior when navigating back to home via hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '' || window.location.hash === '#') {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar onConnect={openWalletModal} onNavigateHome={() => navigateTo('home')} />
      
      {view === 'home' ? (
        <main>
          <Hero onStart={openWalletModal} />
          <Partners />
          <Features />
          <Tokenomics />
          <Roadmap />
          <Testimonials />
          <CTA onStart={openWalletModal} />
        </main>
      ) : (
        <SubPage type={view} onBack={() => navigateTo('home')} />
      )}
      
      <Footer onNavigate={navigateTo} />

      <WalletModal isOpen={walletModalOpen} onClose={closeWalletModal} />
    </div>
  );
}
