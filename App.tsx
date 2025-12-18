
import React, { useEffect, useState } from 'react';
import { Trophy, Settings, Info, Share2, Maximize2, Flag, Gamepad2, Zap } from 'lucide-react';

// --- Sub-Components Defined Internally ---

const AdBanner: React.FC<{ slot?: string }> = ({ slot }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push failed - likely blocked by browser or script not loaded.", e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-4 overflow-hidden min-h-[90px]">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9774042341049510"
        data-ad-slot={slot || "default-slot"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-slate-900 border-b border-slate-800 py-3 px-6 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="bg-red-600 p-1.5 rounded-lg">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
        Drift Hunters <span className="text-red-500">2025</span>
      </h1>
    </div>
    <nav className="hidden md:flex items-center gap-6">
      <a href="#/" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Home</a>
      <a href="#/about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
      <a href="#/cars" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Car List</a>
      <a href="#/unblocked" className="text-red-500 hover:text-red-400 transition-colors text-sm font-bold animate-pulse">Unblocked Guide</a>
    </nav>
    <div className="flex items-center gap-3">
      <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors">
        <Share2 className="w-5 h-5" />
      </button>
    </div>
  </header>
);

const GameFrame: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) {
      if (!isFullscreen) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="relative group">
      <div className="bg-black w-full overflow-hidden shadow-2xl">
        <iframe
          id="game-iframe"
          src="https://unblocked-games.s3.amazonaws.com/drift-hunters.html"
          className="game-frame"
          sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
          title="Drift Hunters Unblocked"
        />
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={toggleFullscreen}
          className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-xl backdrop-blur-md flex items-center gap-2 border border-white/10"
        >
          <Maximize2 className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Fullscreen</span>
        </button>
      </div>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white font-bold text-lg mb-4">About Drift Hunters Unblocked</h2>
        <p className="text-sm leading-relaxed mb-4">
          Experience the ultimate drifting sensation with Drift Hunters Unblocked 2025. This version is specifically optimized for school and work networks, ensuring zero lag and maximum compatibility. Customize your car, tune your engine, and conquer the asphalt in this high-performance simulation.
        </p>
        <div className="flex gap-4">
          <Gamepad2 className="w-6 h-6 hover:text-white cursor-pointer" />
          <Trophy className="w-6 h-6 hover:text-white cursor-pointer" />
          <Settings className="w-6 h-6 hover:text-white cursor-pointer" />
        </div>
      </div>
      <div>
        <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-red-500 transition-colors">Controls Guide</a></li>
          <li><a href="#" className="hover:text-red-500 transition-colors">Tuning Tips</a></li>
          <li><a href="#" className="hover:text-red-500 transition-colors">Best Drift Cars</a></li>
          <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
        <p className="text-sm">Found a bug or need a new game? Report it to our team for a fast fix.</p>
        <button className="mt-4 flex items-center gap-2 text-sm border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors">
          <Flag className="w-4 h-4" /> Report Issue
        </button>
      </div>
    </div>
    <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
      &copy; 2025 Drift Hunters Unblocked. All Rights Reserved. Play responsibly.
    </div>
  </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Top Ad */}
        <div className="max-w-6xl mx-auto">
          <AdBanner slot="7890123456" />
        </div>

        {/* Game Area */}
        <section className="bg-black">
          <GameFrame />
        </section>

        {/* Action Bar */}
        <div className="bg-slate-900 py-4 px-6 border-b border-slate-800 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-slate-300">SERVER ONLINE: 2025-V3</span>
            </div>
            <div className="text-slate-400 text-sm italic">
              "The best unblocked drift game for school networks."
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg shadow-red-900/20 transition-all active:scale-95">
               <Trophy className="w-4 h-4" /> SAVE HIGH SCORE
             </button>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="max-w-4xl mx-auto py-12 px-6 text-slate-300">
          <div className="flex items-center gap-2 mb-6">
            <Info className="text-red-500" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Game Instructions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">How to Play</h3>
              <p>Drift Hunters is a physics-based drifting game where you earn points by sliding your car. Use the money earned to buy new cars and upgrade your existing ones.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="text-white font-bold">WASD / Arrows:</span> Drive and steer</li>
                <li><span className="text-white font-bold">Space:</span> Handbrake (Critical for drifting)</li>
                <li><span className="text-white font-bold">C:</span> Change camera angle</li>
                <li><span className="text-white font-bold">Left Shift:</span> Shift gear up</li>
                <li><span className="text-white font-bold">Left Ctrl:</span> Shift gear down</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Why Unblocked 2025?</h3>
              <p>Schools often block gaming sites. This version of Drift Hunters uses a specialized delivery network that bypasses most web filters, allowing students to enjoy high-quality gaming during breaks without needing a VPN or downloads.</p>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2">Pro Tip:</p>
                <p className="text-sm">Focus on the "Nishuri" track for the longest continuous drift chains. Upgrade your turbo first for better torque control!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="max-w-6xl mx-auto">
          <AdBanner slot="6543210987" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
