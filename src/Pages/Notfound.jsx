import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Compass, 
  Gamepad2, 
  Sun, 
  Moon, 
  HelpCircle, 
  LayoutDashboard, 
  Mail, 
  RefreshCw, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Terminal,
  Trophy,
  Volume2,
  VolumeX
} from 'lucide-react';

export default function NotFound() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'game' | 'search'
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameHighScore, setGameHighScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Suggested links database
  const quickLinks = [
    { title: 'Home Overview', desc: 'Return to the main landing hub', icon: Home, category: 'Pages', badge: 'Popular', action: () => handleNavigate('Home') },
    { title: 'User Dashboard', desc: 'Manage your personal projects & analytics', icon: LayoutDashboard, category: 'App', badge: 'App', action: () => handleNavigate('Dashboard') },
    { title: 'Help & Documentation', desc: 'Search guides, APIs, and tutorials', icon: HelpCircle, category: 'Docs', badge: 'Guides', action: () => handleNavigate('Help Center') },
    { title: 'Customer Support', desc: 'Get in touch with our tech support team', icon: Mail, category: 'Support', badge: '24/7', action: () => handleNavigate('Contact') },
  ];

  const searchDatabase = [
    { name: 'Dashboard Analytics', type: 'Page', path: '/dashboard/analytics' },
    { name: 'Account Settings', type: 'Settings', path: '/settings/profile' },
    { name: 'API Reference & Docs', type: 'Documentation', path: '/docs/api' },
    { name: 'Billing & Subscriptions', type: 'Billing', path: '/settings/billing' },
    { name: 'System Status Page', type: 'System', path: '/status' },
    { name: 'Community Forum', type: 'Community', path: '/community' },
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchDatabase.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleNavigate = (destination) => {
    // Simulated smooth navigation alert/action
    const statusMsg = document.getElementById('nav-toast');
    if (statusMsg) {
      statusMsg.innerText = `Navigating to ${destination}...`;
      statusMsg.classList.remove('opacity-0', 'translate-y-4');
      setTimeout(() => {
        statusMsg.classList.add('opacity-0', 'translate-y-4');
      }, 2500);
    }
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      handleNavigate('Previous Page');
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 selection:bg-indigo-500 selection:text-white ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Dynamic Background Canvas */}
      <BackgroundCanvas isDarkMode={isDarkMode} />

      {/* Navigation Header Bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-slate-500/10 backdrop-blur-md">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate('Home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Compass className="w-6 h-6 text-white animate-spin-slow" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NEXUS
            </span>
            <span className="text-xs block text-slate-400 font-mono -mt-1">ERROR 404 RESCUE</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveTab(activeTab === 'game' ? 'overview' : 'game')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
              activeTab === 'game' 
                ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/30' 
                : 'bg-slate-800/40 border-slate-700/50 hover:border-purple-500/50 text-slate-300 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>{activeTab === 'game' ? 'Exit Mini-Game' : 'Play Space Arcade'}</span>
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/60 border-slate-700 text-amber-400 hover:bg-slate-700' 
                : 'bg-white border-slate-200 text-indigo-600 hover:bg-slate-100 shadow-sm'
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        
        {activeTab === 'game' ? (
          <SpaceShooterGame 
            isDarkMode={isDarkMode}
            onClose={() => setActiveTab('overview')}
            gameScore={gameScore}
            setGameScore={setGameScore}
            gameHighScore={gameHighScore}
            setGameHighScore={setGameHighScore}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />
        ) : (
          <div className="w-full max-w-4xl flex flex-col items-center">
            
            {/* Visual Graphic Area */}
            <div className="relative w-full max-w-lg flex items-center justify-center py-6">
              
              {/* Glowing Background Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 animate-pulse" />

              {/* Big 404 Watermark Typography */}
              <div className="absolute -z-10 select-none text-[140px] sm:text-[200px] font-black tracking-tighter text-slate-500/10 font-mono">
                404
              </div>

              {/* Animated Floating Astronaut & Orbit Illustration */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                {/* Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-dotted border-purple-500/20 animate-[spin_45s_linear_infinite_reverse]" />
                
                {/* Floating Planets/Cosmic Objects */}
                <div className="absolute top-2 left-6 w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-md shadow-pink-500/50 animate-bounce" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-6 right-8 w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md shadow-cyan-500/40 animate-bounce" style={{ animationDuration: '6s' }} />
                <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-amber-300 shadow-sm shadow-amber-300 animate-ping" />

                {/* Main Floating Astronaut Illustration */}
                <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                  <svg className="w-48 h-48 drop-shadow-[0_20px_35px_rgba(99,102,241,0.3)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Tether Cable */}
                    <path d="M 20 180 Q 70 120 100 130" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="3" strokeDasharray="4 4" fill="none" />
                    
                    {/* Backpack */}
                    <rect x="65" y="70" width="30" height="60" rx="8" fill="#475569" />
                    <rect x="60" y="80" width="10" height="15" rx="3" fill="#64748B" />
                    
                    {/* Suit Body */}
                    <rect x="80" y="70" width="45" height="55" rx="12" fill="#F8FAFC" />
                    <path d="M 85 85 L 120 85" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Chest Control Panel */}
                    <rect x="90" y="90" width="25" height="20" rx="4" fill="#0F172A" />
                    <circle cx="97" cy="97" r="2.5" fill="#EF4444" className="animate-pulse" />
                    <circle cx="105" cy="97" r="2.5" fill="#3B82F6" />
                    <circle cx="113" cy="97" r="2.5" fill="#10B981" />
                    
                    {/* Legs */}
                    <rect x="85" y="120" width="16" height="35" rx="7" fill="#E2E8F0" />
                    <rect x="105" y="120" width="16" height="35" rx="7" fill="#CBD5E1" />
                    {/* Boots */}
                    <rect x="80" y="148" width="22" height="12" rx="4" fill="#334155" />
                    <rect x="105" y="148" width="22" height="12" rx="4" fill="#334155" />

                    {/* Arms */}
                    <rect x="68" y="75" width="15" height="35" rx="7" fill="#E2E8F0" transform="rotate(25 68 75)" />
                    <rect x="118" y="75" width="15" height="35" rx="7" fill="#CBD5E1" transform="rotate(-35 118 75)" />
                    
                    {/* Gloves */}
                    <circle cx="62" cy="110" r="8" fill="#64748B" />
                    <circle cx="140" cy="95" r="8" fill="#64748B" />

                    {/* Helmet Head */}
                    <circle cx="102" cy="55" r="28" fill="#F8FAFC" />
                    {/* Visor */}
                    <ellipse cx="106" cy="55" rx="20" ry="16" fill="url(#visorGradient)" />
                    {/* Visor Glare */}
                    <path d="M 95 44 Q 112 42 118 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

                    {/* Gradient Definitions */}
                    <defs>
                      <linearGradient id="visorGradient" x1="86" y1="39" x2="126" y2="71" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06B6D4" />
                        <stop offset="0.5" stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Error Message & Typography */}
            <div className="text-center space-y-3 max-w-2xl px-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>ERROR CODE: 404_PAGE_NOT_FOUND</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Lost in the{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Cosmos?
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                The destination you're attempting to reach has vanished, moved, or never existed in this timeline. Let's get you back on track.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="w-full max-w-xl mt-8 px-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, documentation, or tools..."
                  className={`w-full pl-11 pr-24 py-3.5 text-sm rounded-2xl border transition-all duration-300 outline-none backdrop-blur-md shadow-xl ${
                    isDarkMode 
                      ? 'bg-slate-900/80 border-slate-700/60 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                      : 'bg-white/90 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                  }`}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-16 pr-2 flex items-center text-xs text-slate-400 hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
                <div className="absolute right-2 top-2 bottom-2">
                  <button 
                    onClick={() => searchQuery && handleNavigate(`Search results for "${searchQuery}"`)}
                    className="h-full px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center shadow-md shadow-indigo-600/30"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Instant Search Suggestions Dropdown */}
              {searchQuery.trim() !== '' && (
                <div className={`mt-2 rounded-xl border p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200 ${
                  isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Matching Locations
                  </div>
                  {filteredResults.length > 0 ? (
                    <div className="divide-y divide-slate-800/40">
                      {filteredResults.map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleNavigate(item.name)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-colors ${
                            isDarkMode ? 'hover:bg-slate-800/60' : 'hover:bg-slate-100'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {item.type}
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-3 py-4 text-center text-xs text-slate-400">
                      No matching pages found for "{searchQuery}". Try browsing popular links below.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={handleGoBack}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600' 
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>

              <button
                onClick={() => handleNavigate('Home')}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Home className="w-4 h-4" />
                <span>Return to Safety (Home)</span>
              </button>

              <button
                onClick={() => setActiveTab('game')}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                  isDarkMode 
                    ? 'bg-purple-950/40 border-purple-800/50 text-purple-300 hover:bg-purple-900/60' 
                    : 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'
                }`}
              >
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span>Play Mini Game</span>
              </button>
            </div>

            {/* Quick Links Grid */}
            <div className="w-full max-w-3xl mt-12">
              <div className="flex items-center justify-between mb-4 px-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Recommended Destinations
                </h2>
                <span className="text-xs text-slate-500 font-mono">STATUS: 200 OK AVAILABLE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <div
                      key={index}
                      onClick={link.action}
                      className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                        isDarkMode
                          ? 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-500/10'
                          : 'bg-white border-slate-200/80 hover:bg-slate-50/80 hover:border-indigo-400 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className={`p-3 rounded-xl transition-colors duration-300 ${
                        isDarkMode ? 'bg-slate-800 group-hover:bg-indigo-600/20 text-indigo-400' : 'bg-slate-100 group-hover:bg-indigo-50 text-indigo-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold truncate group-hover:text-indigo-400 transition-colors">
                            {link.title}
                          </h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-slate-500/10 text-slate-400 border border-slate-500/20">
                            {link.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </main>

      {/* Navigation Toast Message Indicator */}
      <div 
        id="nav-toast"
        className="fixed bottom-6 right-6 z-50 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-none px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-2xl flex items-center space-x-2 border border-indigo-400"
      >
        <Sparkles className="w-4 h-4 animate-spin" />
        <span>Navigating...</span>
      </div>

      {/* Subtle Footer */}
      <footer className="relative z-10 py-6 border-t border-slate-500/10 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Nexus Interactive. Lost pages happen, but great journeys continue.</p>
      </footer>
      
      {/* Global Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(3deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}

// ==========================================
// BACKGROUND PHYSICS / PARTICLE CANVAS
// ==========================================
function BackgroundCanvas({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Floating Cosmic Particles
    const particleCount = Math.min(Math.floor(width / 15), 80);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.2,
    }));

    // Mouse Tracking for Interactive Gravitational Effect
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const colorRGB = isDarkMode ? '147, 197, 253' : '99, 102, 241';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Proximity Interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - dist) / 120;
          p.x -= Math.cos(angle) * force * 1.5;
          p.y -= Math.sin(angle) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRGB}, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}

// ==========================================
// SPACE SHOOTER MINI-GAME (EASTER EGG)
// ==========================================
function SpaceShooterGame({ 
  isDarkMode, 
  onClose, 
  gameScore, 
  setGameScore, 
  gameHighScore, 
  setGameHighScore,
  soundEnabled,
  setSoundEnabled
}) {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lives, setLives] = useState(3);

  // Sound Synth Synthesizer for Retro Game SFX
  const playSFX = (type) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'shoot') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'hit') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(40, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      // Audio fallback or restriction handling
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const width = (canvas.width = 600);
    const height = (canvas.height = 400);

    // Game Entities
    let player = { x: width / 2 - 15, y: height - 40, w: 30, h: 25, speed: 6 };
    let bullets = [];
    let asteroids = [];
    let keys = {};
    let spawnCounter = 0;

    const handleKeyDown = (e) => {
      keys[e.key] = true;
      if (e.key === ' ' && isPlaying && !isGameOver) {
        bullets.push({ x: player.x + player.w / 2 - 2, y: player.y, w: 4, h: 10, speed: 7 });
        playSFX('shoot');
      }
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const updateGame = () => {
      if (!isPlaying || isGameOver) return;

      // Player Movement
      if ((keys['ArrowLeft'] || keys['a']) && player.x > 0) {
        player.x -= player.speed;
      }
      if ((keys['ArrowRight'] || keys['d']) && player.x < width - player.w) {
        player.x += player.speed;
      }

      // Bullets Movement
      bullets = bullets.filter((b) => b.y > -10);
      bullets.forEach((b) => (b.y -= b.speed));

      // Asteroids Spawning
      spawnCounter++;
      if (spawnCounter % 40 === 0) {
        asteroids.push({
          x: Math.random() * (width - 30),
          y: -30,
          w: 25 + Math.random() * 15,
          h: 25 + Math.random() * 15,
          speed: 1.5 + Math.random() * 2,
        });
      }

      // Asteroids Movement & Collision logic
      asteroids.forEach((ast, aIdx) => {
        ast.y += ast.speed;

        // Check bullet hit
        bullets.forEach((b, bIdx) => {
          if (
            b.x < ast.x + ast.w &&
            b.x + b.w > ast.x &&
            b.y < ast.y + ast.h &&
            b.y + b.h > ast.y
          ) {
            // Destroyed Asteroid
            asteroids.splice(aIdx, 1);
            bullets.splice(bIdx, 1);
            playSFX('hit');
            setGameScore((prev) => {
              const newScore = prev + 10;
              if (newScore > gameHighScore) setGameHighScore(newScore);
              return newScore;
            });
          }
        });

        // Player Collision
        if (
          player.x < ast.x + ast.w &&
          player.x + player.w > ast.x &&
          player.y < ast.y + ast.h &&
          player.y + player.h > ast.y
        ) {
          asteroids.splice(aIdx, 1);
          playSFX('hit');
          setLives((l) => {
            if (l <= 1) {
              setIsGameOver(true);
              return 0;
            }
            return l - 1;
          });
        }
      });

      // Filter out off-screen asteroids
      asteroids = asteroids.filter((ast) => ast.y < height + 40);
    };

    const drawGame = () => {
      ctx.fillStyle = isDarkMode ? '#090D16' : '#0F172A';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid / Stars Background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      if (isPlaying && !isGameOver) {
        // Draw Player Ship
        ctx.fillStyle = '#6366F1';
        ctx.beginPath();
        ctx.moveTo(player.x + player.w / 2, player.y);
        ctx.lineTo(player.x + player.w, player.y + player.h);
        ctx.lineTo(player.x, player.y + player.h);
        ctx.closePath();
        ctx.fill();

        // Ship Cockpit Glow
        ctx.fillStyle = '#A855F7';
        ctx.beginPath();
        ctx.arc(player.x + player.w / 2, player.y + 12, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw Bullets
        ctx.fillStyle = '#EC4899';
        bullets.forEach((b) => {
          ctx.fillRect(b.x, b.y, b.w, b.h);
        });

        // Draw Asteroids
        ctx.fillStyle = '#64748B';
        ctx.strokeStyle = '#94A3B8';
        asteroids.forEach((ast) => {
          ctx.beginPath();
          ctx.roundRect(ast.x, ast.y, ast.w, ast.h, 6);
          ctx.fill();
          ctx.stroke();
        });
      }
    };

    const gameLoop = () => {
      updateGame();
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying, isGameOver, isDarkMode, gameHighScore]);

  const startGame = () => {
    setGameScore(0);
    setLives(3);
    setIsGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-300">
      
      {/* Game Header Bar */}
      <div className="w-full flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <Gamepad2 className="w-6 h-6 text-purple-400" />
          <div>
            <h3 className="font-bold text-base text-white">404 Cosmic Defender</h3>
            <p className="text-xs text-slate-400">Destroy asteroids to restore navigation coordinates</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Close Game
          </button>
        </div>
      </div>

      {/* Game Dashboard Stats */}
      <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-950/60 rounded-xl mb-4 font-mono text-xs border border-slate-800">
        <div className="flex items-center space-x-2 text-indigo-400">
          <span>SCORE:</span>
          <span className="font-bold text-sm text-white">{gameScore}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="text-slate-500 mr-2">LIVES:</span>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < lives ? 'bg-rose-500 shadow-sm shadow-rose-500' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2 text-amber-400">
          <Trophy className="w-3.5 h-3.5" />
          <span>BEST: {gameHighScore}</span>
        </div>
      </div>

      {/* Canvas Screen */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-inner max-w-full">
        <canvas ref={canvasRef} className="block max-w-full h-auto cursor-crosshair" />

        {/* Overlay Overlay Screen */}
        {(!isPlaying || isGameOver) && (
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
            {isGameOver ? (
              <>
                <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white mb-1">MISSION FAILED</h4>
                <p className="text-xs text-slate-400 mb-4 font-mono">Final Clearance Score: {gameScore}</p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Ready for Rescue Mission?</h4>
                <p className="text-xs text-slate-400 mb-4 max-w-xs">
                  Use Left/Right Arrow keys (or A/D) to move, Spacebar to shoot lasers!
                </p>
              </>
            )}

            <button
              onClick={startGame}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
            >
              {isGameOver ? 'Try Again' : 'Start Game'}
            </button>
          </div>
        )}
      </div>

      {/* Touch Mobile Controls */}
      <div className="w-full grid grid-cols-3 gap-2 mt-4 sm:hidden">
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
            window.dispatchEvent(event);
          }}
          className="py-3 bg-slate-800 rounded-xl text-xs font-bold text-slate-200 active:bg-indigo-600"
        >
          ◀ LEFT
        </button>
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: ' ' });
            window.dispatchEvent(event);
          }}
          className="py-3 bg-rose-600 rounded-xl text-xs font-bold text-white active:bg-rose-700"
        >
          FIRE 🔥
        </button>
        <button
          onClick={() => {
            const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
            window.dispatchEvent(event);
          }}
          className="py-3 bg-slate-800 rounded-xl text-xs font-bold text-slate-200 active:bg-indigo-600"
        >
          RIGHT ▶
        </button>
      </div>

      <p className="text-[11px] text-slate-500 mt-4 font-mono hidden sm:block">
        CONTROLS: [A / D] or [← / →] to Move &bull; [SPACEBAR] to Shoot
      </p>
    </div>
  );
}