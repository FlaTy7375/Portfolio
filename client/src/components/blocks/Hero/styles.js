import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 70vh;
  }
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  
  canvas {
    pointer-events: auto;
    position: relative;
    z-index: 1;
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    opacity: 0.8;
    
    canvas {
      pointer-events: none;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    opacity: 0.6;
    
    canvas {
      pointer-events: none;
    }
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: radial-gradient(ellipse at 30% 50%, transparent 0%, ${props => props.theme.colors.background} 85%);
  pointer-events: none;
  opacity: 0.3;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 5;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
    padding: 0 ${props => props.theme.spacing.lg};
  }
`;

export const HeroSubtitle = styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: ${props => props.theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  margin-left: -4px;

  .gradient {
    display: block;
    background: ${props => props.theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HeroTagline = styled.div`
  font-family: ${props => props.theme.fonts.body};
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: ${props => props.theme.colors.foregroundSecondary};
  display: flex;
  align-items: center;
  gap: 4px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }

  .cursor {
    color: ${props => props.theme.colors.primary};
    animation: ${blink} 1s infinite;
    font-weight: 300;
  }
`;

export const TypewriterText = styled.span`
  min-height: 1.5em;
  display: inline-block;
`;
