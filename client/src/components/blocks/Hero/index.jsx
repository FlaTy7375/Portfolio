import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroTagline,
  TypewriterText,
  GradientOverlay,
  CanvasWrapper,
  ScrollOverlay,
  TouchBlock,
} from './styles';
import Scene3D from './Scene3D';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -30px) rotate(5deg); }
  50% { transform: translate(-10px, 20px) rotate(-5deg); }
  75% { transform: translate(15px, 10px) rotate(3deg); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-30px, 20px) rotate(-8deg); }
  66% { transform: translate(25px, -15px) rotate(6deg); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -20px) scale(1.1); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; box-shadow: 0 0 60px rgba(99, 102, 241, 0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 100px rgba(99, 102, 241, 0.6); }
`;

const Shape1 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  right: 15%;
  top: 20%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float1} 8s ease-in-out infinite, ${pulse} 4s ease-in-out infinite;
  filter: blur(40px);
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    right: 5%;
  }
`;

const Shape2 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  right: 25%;
  bottom: 30%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float2} 10s ease-in-out infinite;
  filter: blur(30px);
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    right: 10%;
  }
`;

const Shape3 = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  right: 10%;
  top: 40%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float3} 6s ease-in-out infinite;
  filter: blur(25px);
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const GeometricShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
`;

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const words = ['Frontend Developer', 'React Developer', 'Creative Coder', 'Web Developer'];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      if (!isDeleting) {
        setDisplayText(word.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === word.length) {
          setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setDisplayText(word.substring(0, charIndex));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      
      setTimeout(type, isDeleting ? 50 : 100);
    };
    
    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  return (
    <HeroSection id="hero">
      <CanvasWrapper>
        <Canvas
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: false
          }}
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          style={{ background: 'transparent', zIndex: 10, position: 'relative' }}
          camera={{ position: [0, 0, isMobile ? 12 : 10], fov: isMobile ? 90 : 100 }}
          onCreated={(state) => {
            if (state.gl) {
              state.gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
            }
          }}
          onError={() => {}}
        >
          <Scene3D isMobile={isMobile} />
        </Canvas>
      </CanvasWrapper>
      
      <ScrollOverlay />
      <TouchBlock />
      
      <GeometricShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </GeometricShapes>
      
      <GradientOverlay />
      
      <HeroContent>
        <HeroSubtitle>Привет, я</HeroSubtitle>
        <HeroTitle>
          Евтух
          <span className="gradient"> Максим</span>
        </HeroTitle>
        <HeroTagline>
          <TypewriterText>{displayText}</TypewriterText>
          <span className="cursor">|</span>
        </HeroTagline>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
