
import React, { useEffect, useState } from 'react';
import { Trophy, Settings, Info, Share2, Maximize2, Flag, Gamepad2, Zap, Flame } from 'lucide-react';

// --- Sub-Components ---

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
    <div className="w-full flex justify-center my-4 overflow-hidden min-h-[90px] bg-slate-900/20 border border-slate-800/50 rounded-lg">
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
      <a href="#/cars" className="text-slate-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-red-600 pb-1">Garage</a>
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
          title="Drift Hunters Unblocked - Start Your Drift Hunt"
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
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-red-500 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Top Ad */}
        <div className="max-w-7xl mx-auto px-4">
          <AdBanner slot="7890123456" />
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
              <span className="text-xs font-black text-slate-200 tracking-tighter uppercase italic">2025 Drift Hunt Engine v.9.4</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-red-500 text-sm font-black italic uppercase tracking-tighter">
              <Flame className="w-4 h-4" /> Trending in Schools
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-8 py-2.5 rounded-xl font-black italic uppercase text-sm shadow-[0_4px_20px_-5px_rgba(220,38,38,0.5)] transition-all hover:shadow-red-600/40 active:scale-95 border-t border-white/10">
               <Trophy className="w-4 h-4" /> Save Hunt Data
             </button>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8 text-slate-300">
              <div className="flex items-center gap-3">
                <Info className="text-red-500 w-8 h-8" />
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Ultimate Drift Hunt 2025</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-slate-400">
                  Welcome to the definitive version of <span className="text-white font-bold italic">Drift Hunters Unblocked</span>. If you're on a quest for the perfect line and the highest multiplier, your <strong>drift hunt</strong> starts here. Our 2025 optimized delivery system ensures that you can access this high-performance drifting simulator from any network, including restricted environments like schools or workplaces.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-red-900/50 transition-colors">
                    <h3 className="text-xl font-black text-white italic uppercase mb-4 flex items-center gap-2">
                      <Gamepad2 className="text-red-500" /> Controls Guide
                    </h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px]">Movement</span>
                        <span className="text-red-400">WASD / Arrow Keys</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px]">Handbrake</span>
                        <span className="text-red-400 font-bold">SPACEBAR</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px]">View</span>
                        <span className="text-red-400">C (Camera)</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px]">Gear Up</span>
                        <span className="text-red-400">L-SHIFT</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500 uppercase tracking-widest text-[10px]">Gear Down</span>
                        <span className="text-red-400">L-CTRL</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-red-900/50 transition-colors">
                    <h3 className="text-xl font-black text-white italic uppercase mb-4 flex items-center gap-2">
                      <Settings className="text-red-500" /> Pro Tuning Tips
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400 mb-4">
                      To dominate the Drift Hunt leaderboard, focus on your car's weight distribution and camber settings.
                    </p>
                    <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30">
                      <p className="text-xs text-red-400 uppercase font-black mb-1">Expert Strategy:</p>
                      <p className="text-xs italic">Maximize your rear tire pressure to reduce grip and increase slide potential during high-speed transitions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h4 className="text-white font-black italic uppercase mb-4 text-sm tracking-widest">Global Rankings</h4>
                <div className="space-y-3">
                  {[
                    { name: 'DriftMasterX', score: '2,405,100' },
                    { name: 'HuntKing2025', score: '1,988,200' },
                    { name: 'SidewaySam', score: '1,750,400' }
                  ].map((user, i) => (
                    <div key={i} className="flex justify-between items-center text-xs p-2 bg-slate-950 rounded-lg border border-slate-800">
                      <span className="text-slate-500 font-bold">#0{i+1}</span>
                      <span className="text-slate-200 font-black">{user.name}</span>
                      <span className="text-red-500 font-mono font-bold">{user.score}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-[10px] font-black uppercase tracking-widest border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">View All Hunters</button>
              </div>
              
              <AdBanner slot="9988776655" />
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <AdBanner slot="6543210987" />
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-red-600" />
              <h2 className="text-white font-black text-lg italic uppercase tracking-tighter">Drift Hunters <span className="text-red-600">Unblocked</span></h2>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              The premier destination for the Drift Hunt community. We provide the most stable, unblocked version of Drift Hunters, optimized for all devices and networks. Join thousands of players chasing the ultimate drift score in 2025.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-slate-900 rounded-lg hover:text-white cursor-pointer transition-colors"><Gamepad2 className="w-5 h-5" /></div>
              <div className="p-2 bg-slate-900 rounded-lg hover:text-white cursor-pointer transition-colors"><Trophy className="w-5 h-5" /></div>
              <div className="p-2 bg-slate-900 rounded-lg hover:text-white cursor-pointer transition-colors"><Settings className="w-5 h-5" /></div>
            </div>
          </div>
          <div>
            <h2 className="text-white font-black text-xs uppercase tracking-widest mb-6 italic">Navigation</h2>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Controls Guide</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Tuning Secrets</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Car Showroom</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-black text-xs uppercase tracking-widest mb-6 italic">Support</h2>
            <p className="text-xs mb-4">Experiencing lag or a broken link? Let the engineering team know immediately.</p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-slate-800 px-6 py-3 rounded-xl hover:bg-slate-900 hover:border-red-900/30 transition-all text-slate-300">
              <Flag className="w-4 h-4 text-red-500" /> Report Offline
            </button>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-[10px] uppercase tracking-[0.2em] font-bold">
          &copy; 2025 Drift Hunters Hub. Not affiliated with Unity Technologies. Part of the Global Hunt Network.
        </div>
      </footer>
    </div>
  );
};

export default App;