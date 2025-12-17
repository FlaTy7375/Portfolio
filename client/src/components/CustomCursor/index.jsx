import { useState, useEffect, useCallback, useRef } from 'react';
import { CursorWrapper, CursorDot, CursorRing, Particle } from './styles';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const particleId = useRef(0);
  const lastParticleTime = useRef(0);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const isClickingRef = useRef(false);
  
  const handleMouseMove = useCallback((e) => {
    if (!dotRef.current || !ringRef.current) return;

    const scale = isClickingRef.current ? 0.5 : 1;
    dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${scale})`;
    ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    
    setIsVisible(true);

    const now = Date.now();
    if (now - lastParticleTime.current > 50) {
      lastParticleTime.current = now;
      const newParticle = {
        id: particleId.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setParticles(prev => [...prev.slice(-7), newParticle]);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    isClickingRef.current = true;
    setIsClicking(true);
  }, []);
  
  const handleMouseUp = useCallback(() => {
    isClickingRef.current = false;
    setIsClicking(false);
  }, []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    
    const handleElementEnter = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementEnter);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles(prev => prev.slice(1));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <CursorWrapper $isVisible={isVisible}>
      {particles.map((particle, index) => (
        <Particle
          key={particle.id}
          style={{
            left: particle.x,
            top: particle.y,
            opacity: (index + 1) / particles.length * 0.6,
            transform: `translate(-50%, -50%) scale(${(index + 1) / particles.length * 0.8})`,
          }}
        />
      ))}
      <CursorDot
        ref={dotRef}
        $isClicking={isClicking}
      />
      <CursorRing
        ref={ringRef}
        $isHovering={isHovering}
        $isClicking={isClicking}
      />
    </CursorWrapper>
  );
};

export default CustomCursor;



