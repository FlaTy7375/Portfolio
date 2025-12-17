import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const pulse = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
`;

const fadeOut = keyframes`
  0% { opacity: 0.6; }
  100% { opacity: 0; }
`;

export const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CursorDot = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  box-shadow: 0 0 20px ${props => props.theme.colors.primaryGlow};
  pointer-events: none;

  ${props => props.$isClicking && css`
    transform: translate(-50%, -50%) scale(0.5);
  `}
`;

export const CursorRing = styled.div`
  position: fixed;
  width: ${props => props.$isHovering ? '50px' : '30px'};
  height: ${props => props.$isHovering ? '50px' : '30px'};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease;
  background: ${props => props.$isHovering ? 'rgba(99, 102, 241, 0.1)' : 'transparent'};
  backdrop-filter: ${props => props.$isHovering ? 'blur(4px)' : 'none'};
  pointer-events: none;

  ${props => props.$isClicking && css`
    animation: ${pulse} 0.4s ease-out;
  `}
`;

export const Particle = styled.div`
  position: fixed;
  width: 6px;
  height: 6px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  animation: ${fadeOut} 0.8s ease-out forwards;
  box-shadow: 0 0 10px ${props => props.theme.colors.accentGlow};
`;



