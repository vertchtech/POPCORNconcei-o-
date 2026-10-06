import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rotation: number;
}

export default function PopcornBackgroundParticles() {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 19) % 100,
      y: (i * 23) % 100,
      size: 14 + ((i * 7) % 18),
      delay: (i * 0.4) % 4,
      duration: 6 + ((i * 3) % 6),
      opacity: 0.12 + ((i * 5) % 20) / 100,
      rotation: (i * 47) % 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient warm lighting radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[radial-gradient(circle,rgba(250,204,21,0.14)_0%,rgba(234,179,8,0.05)_45%,transparent_75%)] blur-2xl" />
      <div className="absolute top-[45%] -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(239,68,68,0.08)_0%,transparent_65%)] blur-3xl" />
      <div className="absolute bottom-[15%] -left-32 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(250,204,21,0.09)_0%,transparent_70%)] blur-2xl" />

      {/* Floating subtle popcorn shapes */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `floatSoft ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: `rotate(${p.rotation}deg)` }}
          >
            {/* Popcorn kernel stylized silhouette */}
            <path
              d="M12 4C9.5 4 8 5.8 8 7.5C6.5 7.5 5 8.8 5 11C5 13.2 6.8 14.5 8.5 14.5C8.5 16.5 10.2 18.5 12.5 18.5C14.8 18.5 16.5 16.8 16.5 15C18.2 14.8 19.5 13.2 19.5 11.2C19.5 9 17.8 7.5 16 7.5C16 5.5 14.2 4 12 4Z"
              fill="#FDE047"
            />
            <circle cx="12" cy="11" r="2" fill="#EAB308" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
