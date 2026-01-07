import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Settings, Info, Share2, Maximize2, Flag, Gamepad2, Zap, Flame } from 'lucide-react';

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
        Drift Hunters <span className="text-red-500">Unblocked</span>
      </h1>
    </div>
    <nav className="hidden lg:flex items-center gap-6">
      <a href="#/" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-red-600 pb-1">Start Hunt</a>
      <a href="#/about" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-red-600 pb-1">About Game</a>
      <a href="#/unblocked" className="text-red-500 hover:text-red-400 transition-colors text-xs font-bold uppercase tracking-widest animate-pulse border-b-2 border-transparent">Bypass Guide</a>
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
      <div className="bg-black w-full overflow-hidden rounded-xl shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)] ring-1 ring-slate-800">
        <iframe
          id="game-iframe"
          src="https://unblocked-games.s3.amazonaws.com/drift-hunters.html"
          className="game-frame"
          sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
          title="Drift Hunters Unblocked 2025 - Drift Hunt"
        />
      </div>
      <div className="absolute bottom-10 right-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button 
          onClick={toggleFullscreen}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-2xl backdrop-blur-md flex items-center gap-3 border border-white/20 shadow-2xl transition-all active:scale-90"
        >
          <Maximize2 className="w-5 h-5" />
          <span className="text-sm font-black uppercase tracking-tighter italic">Enter Full Hunt Mode</span>
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
        {/* Top Ad */}
        <div className="max-w-7xl mx-auto px-4">
          <AdBanner slot="7890123456" />
        </div>

        {/* --- UX Enhancements Section --- */}
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
          {/* 1. Mobile Experience Tip */}
          <div className="text-center text-white bg-purple-800 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-lg border border-purple-700 font-bold">
            Tip: Rotate to landscape for better mobile experience! Perfect on phone or Chromebook.
          </div>

          {/* 2. Optimized Fullscreen Button */}
          <button 
            onClick={handleFullscreen} 
            className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 shadow-xl transition-all active:scale-95 hover:scale-105 border-b-4 border-green-800 uppercase tracking-tight italic"
          >
            Play Full Screen (Press F - Ultimate Experience!)
          </button>

          {/* 3. Fullscreen Instruction Text */}
          <div className="text-center text-white bg-blue-800 p-4 rounded-lg mb-6 max-w-lg mx-auto shadow-md border border-blue-700 font-medium">
            Press F for fullscreen - No lag, full immersion on any device!
          </div>
        </div>

        {/* Game Area */}
        <section className="bg-slate-950">
          <GameFrame />
        </section>

        {/* Action Bar */}
        <div className="bg-slate-900/50 backdrop-blur-xl py-4 px-6 border-y border-slate-800 flex flex-wrap gap-4 items-center justify-between shadow-inner">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-xs font-black text-slate-200 tracking-tighter uppercase italic">2025 Engine v.9.4</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-red-500 text-sm font-black italic uppercase tracking-tighter">
              <Flame className="w-4 h-4" /> Trending Now
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-8 py-2.5 rounded-xl font-black italic uppercase text-sm shadow-[0_4px_20px_-5px_rgba(220,38,38,0.5)] transition-all active:scale-95">
               <Trophy className="w-4 h-4" /> Save Score
             </button>
          </div>
        </div>

        {/* 4. Extra Bottom Ad Slot (RPM Boost) */}
        <div className="ad-bottom mt-8 text-center max-w-7xl mx-auto px-4">
          <AdBanner slot="1234567890" className="w-full flex justify-center my-4 overflow-hidden min-h-[90px] bg-slate-900/40 border border-slate-700 rounded-xl shadow-lg" />
        </div>

        {/* --- Strategy & Internal Links Area --- */}
        <section className="max-w-6xl mx-auto py-8 px-6">
          {/* Strategy Content Block */}
          <div className="strategy mt-8 text-gray-300 p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter italic">Drift Hunters Unblocked 2025 Strategy Guide</h2>
            <p className="mb-4">
              Do you love the sound of screeching tires? <strong>Drift Hunters Unblocked 2025</strong> is the most realistic 3D drifting simulator available on the web. It features legendary cars like the Toyota AE86, Nissan Silvia S15, and the Supra. The core of the game isn't just drifting—it's tuning. You can adjust turbo pressure, brake balance, and front camber to perfect your ride.
            </p>
            <p>
              <strong>Tuning Guide:</strong> To score high on 2025 tracks, don't just max out horsepower. For beginners, lower the tire grip and increase front camber to initiate drifts easier. Keeping your Combo alive is the secret to high scores; try not to straighten up between corners. Earn credits to buy better parts and build the ultimate drift machine directly on your school computer.
            </p>
          </div>

          {/* Internal Links Block */}
          <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2 italic uppercase tracking-widest">More Unblocked Games 2025</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
              <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Snake Game Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Zero Lag Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Free Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play No Download Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Unblocked Games 2025 (Main)</a></li>
              <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Best Unblocked Games 2025</a></li>
              <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play ProMax Games Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Retro Bowl Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play 1v1.LOL Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Drift Hunters Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Slope Game Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Geometry Dash Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Moto X3M Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Subway Surfers Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Run 3 Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Fireboy & Watergirl Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Paper.io Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Drift Hunters MAX Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Geometry Dash Full Unblocked 2025</a></li>
              <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">Play Subway Surfers World Unblocked 2025</a></li>
            </ul>
          </div>
        </section>

        {/* Existing Content & Ads */}
        <section className="max-w-6xl mx-auto py-8 px-6 space-y-8">
          <div className="flex items-center gap-3">
            <Info className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">About Drift Hunt</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Experience the definitive version of Drift Hunters Unblocked. Our 2025 optimized delivery system ensures you can access this drifting simulator from any network.
          </p>
          <AdBanner slot="9988776655" />
        </section>

        <div className="max-w-7xl mx-auto px-4 mb-12">
          <AdBanner slot="6543210987" />
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-red-600" />
            <h2 className="text-white font-black text-lg italic uppercase tracking-tighter">Drift Hunters <span className="text-red-600">Unblocked</span></h2>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; 2025 Drift Hunters Hub. Optimized for Mobile & ChromeOS. Part of the Global Hunt Network.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;