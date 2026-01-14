import { useEffect, useRef, useState } from "react";
import submarineImg from "../assets/images/submarine.png";

const MovingDiv = () => {
  const [position, setPosition] = useState({
    x: Math.floor(Math.random() * 1000) + 1,
    y: Math.floor(Math.random() * 1000) + 1,
  });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });

  const moveDiv = () => {
    setPosition((prev) => {
      let newX = prev.x + direction.dx;
      let newY = prev.y + direction.dy;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const edgeThreshold = 10;
      const divSize = 50;

      let newDx = direction.dx;
      let newDy = direction.dy;

      // Bounce on X edges
      if (newX < edgeThreshold) {
        newX = edgeThreshold; // Keep inside
        newDx = Math.abs(direction.dx); // Move right
      } else if (newX + divSize > width - edgeThreshold) {
        newX = width - divSize - edgeThreshold; // Keep inside
        newDx = -Math.abs(direction.dx); // Move left
      }

      // Bounce on Y edges
      if (newY < edgeThreshold) {
        newY = edgeThreshold; // Keep inside
        newDy = Math.abs(direction.dy); // Move down
      } else if (newY + divSize > height - edgeThreshold) {
        newY = height - divSize - edgeThreshold; // Keep inside
        newDy = -Math.abs(direction.dy); // Move up
      }

      setDirection({ dx: newDx, dy: newDy });

      return { x: newX, y: newY };
    });
  };

  useEffect(() => {
    const interval = setInterval(moveDiv, 20);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "yellow",
        boxShadow: `
          0 0 20px 10px rgba(255, 255, 200, 0.7),
          0 0 40px 20px rgba(255, 255, 150, 0.5),
          0 0 60px 30px rgba(255, 255, 100, 0.3)
        `,
        transition: "left 0.02s linear, top 0.02s linear",
        zIndex:0
      }}
    ></div>
  );
};

export default MovingDiv;
