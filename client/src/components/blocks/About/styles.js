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

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.6;
  }
`;

const pulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
  }
  50% { 
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
`;

export const BackgroundParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

export const Particle = styled.div`
  position: absolute;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  opacity: 0.3;
  animation: ${float} linear infinite;
`;

export const AboutContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${props => props.theme.spacing.xxxl};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xxl};
  }
`;

export const AboutContent = styled.div`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: all 0.8s ease-out;
`;

export const SectionLabel = styled.span`
  display: inline-block;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.full};
`;

export const AboutTitle = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.foreground};
`;

export const HighlightText = styled.span`
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

export const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.foregroundSecondary};
  margin-bottom: ${props => props.theme.spacing.lg};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SkillBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  justify-content: flex-start;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const SkillBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.foreground};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: all 0.6s ease-out ${props => props.$delay}s, 
              box-shadow 0.3s ease, 
              border-color 0.3s ease,
              transform 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    animation: ${pulse} 1.5s ease-in-out infinite;
    transform: translateY(-5px);
  }
`;
