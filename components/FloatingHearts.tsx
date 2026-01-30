
import React, { useMemo } from 'react';

const FloatingHearts: React.FC = () => {
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${Math.random() * (25 - 15) + 15}s`,
      size: `${Math.random() * (30 - 15) + 15}px`,
      type: Math.random() > 0.6 ? 'heart' : 'petal',
      color: Math.random() > 0.5 ? 'text-rose-400' : 'text-rose-300',
      opacity: Math.random() * 0.4 + 0.1
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute animate-fall ${p.color}`}
          style={{
            left: p.left,
            top: '-50px',
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity
          }}
        >
          {p.type === 'heart' ? '❤' : '🌸'}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
