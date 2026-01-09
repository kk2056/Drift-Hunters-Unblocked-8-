import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Settings, Info, Share2, Maximize2, Flag, Gamepad2, Zap, Flame, Monitor, Smartphone } from 'lucide-react';

// --- Sub-Components ---

const AdBanner: React.FC<{ slot?: string; className?: string }> = ({ slot, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;

    const tryPushAd = () => {
      try {
        if (containerRef.current && containerRef.current.clientWidth > 0) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          return true;
        }
      } catch (e) {
        console.warn("AdSense push internal error:", e);
      }
      return false;
    };

    const intervalId = setInterval(() => {
      attempts++;
      if (tryPushAd() || attempts >= maxAttempts) {
        clearInterval(intervalId);
      }
    }, 250);

    return () => clearInterval(intervalId);
  }, [slot]);

  return (
    <div 
      ref={containerRef}
      className={className || "w-full flex justify-center my-4 overflow-hidden min-h-[90px] bg-slate-900/20 border border-slate-800/50 rounded-lg"}
    >
      <ins 
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-9774042341049510"
        data-ad-slot={slot || "7890123456"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-slate-950 border-b border-slate-800 py-3 px-6 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="bg-red-600 p-1.5 rounded-lg shadow-lg shadow-red-900/40">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">
        Drift Hunters <span className="text-red-500">Unblocked 2026</span>
      </h1>
    </div>
    <nav className="hidden lg:flex items-center gap-6">
      <a href="#/" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-red-600 pb-1">Home 2026</a>
      <a href="#/hot" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-red-600 pb-1">Hot Games</a>
      <a href="#/unblocked" className="text-red-500 hover:text-red-400 transition-colors text-xs font-bold uppercase tracking-widest animate-pulse border-b-2 border-transparent">No Download Play</a>
    </nav>
    <div className="flex items-center gap-3">
      <button className="bg-slate-900 hover:bg-slate-800 p-2 rounded-full transition-all hover:scale-110 border border-slate-700">
        <Share2 className="w-5 h-5 text-slate-300" />
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
    <div className="relative group bg-slate-950 p-2 lg:p-4">
      <div className="bg-black w-full overflow-hidden rounded-xl shadow-[0_0_60px_-15px_rgba(239,68,68,0.4)] ring-1 ring-slate-800">
        <iframe
          id="game-iframe"
          src="https://unblocked-games.s3.amazonaws.com/drift-hunters.html"
          className="game-frame"
          sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
          title="Drift Hunters Unblocked 2026 - Free Play Now"
        />
      </div>
      <div className="absolute bottom-10 right-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button 
          onClick={toggleFullscreen}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-2xl backdrop-blur-md flex items-center gap-3 border border-white/20 shadow-2xl transition-all active:scale-90"
        >
          <Maximize2 className="w-5 h-5" />
          <span className="text-sm font-black uppercase tracking-tighter italic">2026 Fullscreen Mode</span>
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-red-500 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Top Ad Slot */}
        <div className="max-w-7xl mx-auto px-4">
          <AdBanner slot="7890123456" />
        </div>

        {/* --- 2026 UX Enhancement Bar --- */}
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
          {/* Mobile/Chromebook Strategy Tip */}
          <div className="flex items-center justify-center gap-3 text-center text-white bg-gradient-to-r from-purple-800 to-indigo-900 p-4 rounded-xl mb-6 shadow-2xl border border-purple-500/30">
            <Smartphone className="w-5 h-5 animate-bounce" />
            <p className="text-sm font-bold uppercase tracking-tight italic">
              2026 Tip: Perfect for school Chromebook & Mobile! Rotate for full landscape hunt.
            </p>
          </div>

          {/* Core Fullscreen CTA */}
          <button 
            onClick={handleFullscreen} 
            className="group relative block mx-auto bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl text-2xl mb-6 shadow-[0_0_30px_-5px_rgba(22,163,74,0.6)] transition-all hover:scale-105 active:scale-95 border-b-4 border-green-800 uppercase tracking-tighter italic overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Monitor className="w-6 h-6" /> Play Full Screen (Press F)
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          {/* Fullscreen Assurance */}
          <div className="text-center text-white bg-blue-900/60 backdrop-blur-md p-4 rounded-xl mb-6 max-w-lg mx-auto shadow-inner border border-blue-500/20">
            <p className="text-xs font-medium uppercase tracking-widest text-blue-200">
              Zero Lag • No Download • Full Immersion for 2026 Gamers
            </p>
          </div>
        </div>

        {/* Game Area */}
        <section className="bg-slate-950">
          <GameFrame />
        </section>

        {/* Action Bar */}
        <div className="bg-slate-900/80 backdrop-blur-2xl py-5 px-6 border-y border-slate-800 flex flex-wrap gap-4 items-center justify-between shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-lg border border-slate-700 shadow-inner">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-ping shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
              <span className="text-xs font-black text-slate-100 tracking-tighter uppercase italic">2026 Hybrid Engine Active</span>
            </div>
            <div className="flex items-center gap-2 text-red-500 text-sm font-black italic uppercase tracking-tighter">
              <Flame className="w-5 h-5" /> #1 Unblocked Game
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white px-10 py-3 rounded-xl font-black italic uppercase text-sm shadow-xl transition-all active:scale-90">
               <Trophy className="w-4 h-4" /> Global Rank
             </button>
          </div>
        </div>

        {/* CRITICAL: New Game-Bottom Ad Slot for 2026 RPM Boost */}
        <div className="ad-bottom mt-10 text-center max-w-7xl mx-auto px-4">
          <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-2 font-bold italic">2026 Sponsored Content</div>
          <AdBanner slot="1234567890" className="w-full flex justify-center overflow-hidden min-h-[280px] bg-slate-900/40 border border-slate-700/50 rounded-2xl shadow-2xl" />
        </div>

        {/* --- Strategy & 2026 SEO Content Block --- */}
        <section className="max-w-6xl mx-auto py-12 px-6">
          <div className="strategy p-8 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Gamepad2 className="w-32 h-32 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic border-l-4 border-red-600 pl-4">
              Drift Hunters Unblocked 2026: The Ultimate Guide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-300 leading-relaxed">
              <div>
                <p className="mb-4">
                  Welcome to the definitive portal for <strong>unblocked games 2026 school chromebook no download free play</strong>. Drift Hunters 2026 represents the pinnacle of browser-based racing technology. We've optimized every line of code to ensure that even on restricted school networks, you get a premium, lag-free experience directly on your Chromebook.
                </p>
                <p className="font-bold text-red-500 uppercase italic tracking-tight mb-2">
                  Why 2026 is the year of Drift Hunt?
                </p>
                <p>
                  With the new 2026 update, we've added advanced shader support that works seamlessly on low-end hardware. No need to look for mirrors or bypasses—our site is designed to stay unblocked and ready for free play 24/7.
                </p>
              </div>
              
              <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-white font-black uppercase italic mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-red-500" /> Pro Tuning 2026
                </h3>
                <ul className="text-sm space-y-2 list-disc list-inside text-slate-400">
                  <li><strong>Turbo Upgrade:</strong> Essential for maintaining long drifts on the Emashi track.</li>
                  <li><strong>Front Camber:</strong> Set to -3.5 for better initiation response.</li>
                  <li><strong>Brake Balance:</strong> Offset to 70% front for precision entry.</li>
                  <li><strong>No Download:</strong> Play instantly on any 2026 updated browser.</li>
                </ul>
                <p className="mt-4 text-xs italic text-slate-500">
                  Join millions of players seeking the perfect drift hunt this year.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links Block - Optimized for 2026 Navigation */}
          <div className="other-games mt-12 bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50">
            <h3 className="text-xl font-black text-white mb-6 border-b border-slate-800 pb-3 italic uppercase tracking-widest flex items-center gap-2">
              <Zap className="text-yellow-500 w-5 h-5" /> Fast Lanes: More 2026 Games
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none text-sm">
              <li><a href="https://snakegame.cfd" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Snake 2026</a></li>
              <li><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Zero Lag Play</a></li>
              <li><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Free Play Portal</a></li>
              <li><a href="https://nodownload2025.online" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">No Download Hub</a></li>
              <li><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Unblocked 2026 Main</a></li>
              <li><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Best Unblocked</a></li>
              <li><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">Retro Bowl 2026</a></li>
              <li><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-red-500 transition-colors font-bold uppercase italic">1v1.LOL Official</a></li>
            </ul>
          </div>
        </section>

        {/* Footer Ad Slot */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <AdBanner slot="5566778899" className="w-full flex justify-center opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-600 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Zap className="w-6 h-6 text-red-600" />
                <h2 className="text-white font-black text-2xl italic uppercase tracking-tighter">Drift Hunters <span className="text-red-600">2026</span></h2>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">
                The World's #1 Destination for Unblocked Drifting.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
               <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">
                 Optimized for 2026 Chromebook Performance
               </p>
               <p className="text-[10px] uppercase tracking-widest text-slate-700">
                 © 2026 Drift Hunt Network. All Rights Reserved.
               </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;