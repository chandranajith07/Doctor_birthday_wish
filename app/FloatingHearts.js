"use client";

const HEARTS = [
  { left: "8%", size: 14, duration: 9, delay: 0 },
  { left: "22%", size: 10, duration: 11, delay: 1.4 },
  { left: "40%", size: 16, duration: 8, delay: 0.6 },
  { left: "58%", size: 11, duration: 10, delay: 2.1 },
  { left: "74%", size: 13, duration: 9.5, delay: 0.9 },
  { left: "88%", size: 9, duration: 12, delay: 1.8 },
];

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {HEARTS.map((h, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: h.left,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        .floating-hearts {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .floating-heart {
          position: absolute;
          bottom: -20px;
          background: var(--rose);
          opacity: 0.55;
          transform: rotate(45deg);
          animation-name: rise;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
        .floating-heart::before,
        .floating-heart::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--rose);
          border-radius: 50%;
        }
        .floating-heart::before {
          left: -50%;
        }
        .floating-heart::after {
          top: -50%;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 0.55;
          }
          90% {
            opacity: 0.35;
          }
          100% {
            transform: translateY(-70vh) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
