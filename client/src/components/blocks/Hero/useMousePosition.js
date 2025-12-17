import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      };
    }
    return { x: 0, y: 0 };
  });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHasMoved(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { ...position, hasMoved };
}

