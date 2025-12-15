import { useState, useEffect } from 'react';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroTagline,
  TypewriterText,
  CanvasWrapper,
  ScrollIndicator,
  GradientOverlay,
} from './styles';
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
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float1} 8s ease-in-out infinite, ${pulse} 4s ease-in-out infinite;
  filter: blur(40px);
  
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
  background: radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float2} 10s ease-in-out infinite;
  filter: blur(30px);
  
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
  background: radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${float3} 6s ease-in-out infinite;
  filter: blur(25px);
  
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
`;

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', 'Web Enthusiast'];

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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <GeometricShapes>
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </GeometricShapes>
      
      <GradientOverlay />
      
      <HeroContent>
        <HeroSubtitle data-testid="text-hero-subtitle">Hello, I am</HeroSubtitle>
        <HeroTitle data-testid="text-hero-title">
          Alexander
          <span className="gradient"> Petrov</span>
        </HeroTitle>
        <HeroTagline>
          <TypewriterText data-testid="text-hero-role">{displayText}</TypewriterText>
          <span className="cursor">|</span>
        </HeroTagline>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToAbout} data-cursor="pointer" data-testid="button-scroll-down">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
