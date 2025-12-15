import styled, { keyframes } from 'styled-components';

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

const scrollAnim = keyframes`
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(10px); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
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
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: radial-gradient(ellipse at 30% 50%, transparent 0%, ${props => props.theme.colors.background} 70%);
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
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

export const ScrollIndicator = styled.button`
  position: absolute;
  bottom: ${props => props.theme.spacing.xxl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.foregroundTertiary};
  animation: ${float} 2s ease-in-out infinite;
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid currentColor;
    border-radius: 12px;
    position: relative;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background: currentColor;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scrollAnim} 1.5s infinite;
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: ${props => props.theme.fonts.mono};
  }
`;
