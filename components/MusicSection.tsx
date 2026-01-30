
import React from 'react';

const MusicSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-16 py-10 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {/* Animated Icon Header */}
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-rose-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse duration-[2000ms]"></div>
          <div className="relative w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-rose-100 z-10 transition-transform group-hover:scale-110 duration-500">
            <span className="text-5xl animate-bounce">💝</span>
          </div>
          
          {/* Floating Musical Notes */}
          <div className="absolute -top-6 -left-8 text-3xl text-rose-400 animate-float opacity-70">♪</div>
          <div className="absolute top-4 -right-12 text-4xl text-rose-300 animate-float opacity-50 delay-700">♫</div>
          <div className="absolute -bottom-8 left-12 text-2xl text-rose-500 animate-float opacity-60 delay-300">♩</div>
          <div className="absolute bottom-0 -right-6 text-2xl text-rose-300 animate-float opacity-40 delay-1000">♬</div>
        </div>

        {/* Enhanced Video Container */}
        <div className="relative w-full max-w-2xl px-4">
          {/* Glow Effect behind video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl border border-rose-100 transform transition-all duration-700 hover:shadow-rose-200/50">
            {/* The actual video player */}
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-inner bg-black group">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/pP12RCC6Nss?autoplay=0&controls=1&rel=0&modestbranding=1" 
                title="Our Song for Afia" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="transition-opacity duration-1000"
              ></iframe>
            </div>

            {/* Decorative Corner Flourishes */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-rose-300 rounded-tl-3xl opacity-60"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-rose-300 rounded-br-3xl opacity-60"></div>
          </div>
        </div>
        
        {/* Quote / Lyrics with improved typography */}
        <div className="space-y-4 max-w-lg text-center">
          <p className="text-rose-600 font-romantic text-3xl leading-relaxed">
            "I have loved you for a thousand years..."
          </p>
          <p className="text-rose-400 font-romantic text-2xl opacity-80">
            ...and I'll love you for a thousand more.
          </p>
          
          <div className="flex justify-center space-x-2 pt-4">
            <span className="w-2 h-2 rounded-full bg-rose-200"></span>
            <span className="w-2 h-2 rounded-full bg-rose-300 scale-125"></span>
            <span className="w-2 h-2 rounded-full bg-rose-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
