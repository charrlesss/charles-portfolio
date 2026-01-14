// Bubbles.jsx
import "../style/bubbles.css";

export default function Bubbles() {
  const bubbles = Array.from({ length: 150 }, () => {
    const size = Math.random() * 8 + 2;

    return {
      size,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
    };
  });

  return (
    <div className="bubble-container">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
