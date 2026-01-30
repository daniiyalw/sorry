
import React, { useState, useEffect, useRef } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicSection from './components/MusicSection';

const App: React.FC = () => {
  const [forgiven, setForgiven] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const revealRefs = useRef<HTMLDivElement[]>([]);

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoButtonPos({ x, y });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingHearts />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-lg border-b border-rose-100 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-romantic text-3xl text-rose-600 drop-shadow-sm">Forever Afia</span>
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-rose-500 uppercase">
            <a href="#hero" className="hover:text-rose-700 transition-colors">Home</a>
            <a href="#apology" className="hover:text-rose-700 transition-colors">My Note</a>
            <a href="#music" className="hover:text-rose-700 transition-colors">Our Song</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center text-center px-4 py-24 min-h-[90vh]">
          <div className="relative mb-12 transform hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-rose-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop" 
              alt="Afia" 
              className="w-56 h-56 rounded-full border-4 border-white shadow-2xl mx-auto relative z-10 object-cover ring-8 ring-rose-50/50"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-rose-500 p-4 rounded-full shadow-xl border border-rose-100 z-20 animate-bounce text-2xl">
              💖
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-romantic text-rose-600 mb-8 drop-shadow-md">
            I'm So Sorry, Afia
          </h1>
          <p className="max-w-2xl text-xl text-slate-600 leading-relaxed mb-12 font-light">
            Every moment without your smile feels like a year. I know I messed up, 
            but I promise to make it up to you every single day. 
            You are the most amazing person I've ever known.
          </p>

          {!forgiven ? (
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <button 
                onClick={() => setForgiven(true)}
                className="group relative px-12 py-5 bg-rose-600 text-white rounded-full font-bold shadow-2xl shadow-rose-200 hover:bg-rose-700 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Yes, I forgive you! ❤️</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
              <button 
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={noButtonPos.x !== 0 ? { position: 'fixed', left: noButtonPos.x, top: noButtonPos.y, zIndex: 100 } : {}}
                className="px-10 py-4 bg-slate-100 text-slate-500 rounded-full font-medium transition-all hover:bg-slate-200"
              >
                No, still mad 😤
              </button>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-md border border-green-100 p-10 rounded-[3rem] shadow-2xl animate-float max-w-xl mx-auto ring-1 ring-green-50">
              <h2 className="text-4xl font-romantic text-green-600 mb-4">Thank You, My Love!</h2>
              <p className="text-green-700 text-xl leading-relaxed italic">
                "If I could, I’d be right there right now, pulling you into my arms, reminding you how loved you are until you forget why you were upset."
              </p>
            </div>
          )}
        </section>

        {/* Apology Explanation Section */}
        <section id="apology" ref={addToRefs} className="reveal py-32 px-4">
          <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-xl rounded-[4rem] p-10 md:p-16 shadow-2xl border border-rose-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-rose-100 text-9xl font-romantic select-none opacity-40">"</div>
            <h2 className="text-4xl font-romantic text-rose-600 mb-10 text-center relative z-10">A Note From My Heart</h2>
            <div className="space-y-8 text-slate-700 leading-relaxed text-center relative z-10">
              <p className="text-2xl italic font-light text-rose-500/80">
                "Hey jaan, I’m really sorry I didn’t do the photoshoot. I know you were excited and I messed up, no excuses. Please don’t stay mad at me, it hurts more than you know."
              </p>
              <p className="text-xl">
                You mean so much to me and disappointing you is the last thing I ever want. I promise I’ll make it up to you very soon with extra effort and extra charm, only for you.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-romantic text-rose-600">
                  Please forgive your slightly stupid but very loving person 😘❤️
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 text-rose-100 text-9xl font-romantic select-none opacity-40 rotate-180">"</div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" ref={addToRefs} className="reveal py-32 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-romantic text-rose-600 mb-6">Our Special Song</h2>
            <p className="text-slate-500 mb-16 text-lg tracking-wide uppercase font-medium opacity-70">Turn the volume up and listen to what my heart is saying...</p>
            <MusicSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-rose-50/50 py-20 px-6 text-center border-t border-rose-100">
          <p className="font-romantic text-4xl text-rose-600 mb-6">Always Yours,</p>
          <div className="flex justify-center space-x-6 mb-10">
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-rose-50 hover:-translate-y-2 transition-transform cursor-default">❤️</div>
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-rose-50 hover:-translate-y-2 transition-transform cursor-default delay-75">🌹</div>
             <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-rose-50 hover:-translate-y-2 transition-transform cursor-default delay-150">✨</div>
          </div>
          <p className="text-rose-400 text-xs uppercase tracking-[0.3em] font-bold opacity-60">A Website Dedicated to Afia | 2025</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
