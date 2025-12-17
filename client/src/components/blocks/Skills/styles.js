import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
  }
`;

export const SkillsSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 756px) {
    padding: 0px;
    min-height: 70vh;
  }
`;

export const SkillsContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};

  @media (max-width: 500px) {
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxxl};
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
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${props => props.theme.colors.foreground};
`;

export const SkillsCloud = styled.div`
  position: relative;
  width: 100%;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: 400px;
  }

  @media (max-width: 500px) {
    min-height: 350px;
  }
`;

export const SkillTag = styled.span`
  position: absolute;
  left: calc(50% + ${props => props.$initialX}px);
  top: calc(50% + ${props => props.$initialY}px);
  transform: translate3d(-50%, -50%, 0);
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.foreground};
  cursor: pointer;
  white-space: nowrap;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              background 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? fadeIn : 'none'} 0.6s ease-out ${props => props.$index * 0.05}s both,
             ${float} ${props => 3 + (props.$index % 3)}s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.05}s, ${props => props.$index * 0.2}s;

  &:hover {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
    color: white;
    border-color: transparent;
    transform: translate3d(-50%, -50%, 0) scale(1.1);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    z-index: 10;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.7rem;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.65rem;
    padding: 6px 10px;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
    padding: 5px 8px;
    max-width: calc(100vw - 32px);
  }
`;
