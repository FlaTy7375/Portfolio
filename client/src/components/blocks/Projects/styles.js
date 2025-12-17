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

export const ProjectsSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
`;

export const ProjectsContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  aspect-ratio: ${props => props.$size === 'large' ? '16/10' : '16/12'};
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  transition: transform 0.15s ease-out, box-shadow 0.3s ease;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? fadeInUp : 'none'} 0.8s ease-out ${props => props.$delay}s both;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  max-width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    aspect-ratio: 16/10;
    transform-style: flat;
  }

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(99, 102, 241, 0.15);
  }

  &:hover .project-image {
    transform: scale(1.05);
    filter: brightness(0.5);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:hover .project-image {
      transform: none;
    }
  }
`;

export const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease, filter 0.4s ease;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  filter: brightness(0.6);
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(10, 10, 15, 0.7) 40%,
    rgba(10, 10, 15, 0.95) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: ${props => props.theme.spacing.xl};
  opacity: 1;
  transition: background 0.4s ease;
  overflow: hidden;
  box-sizing: border-box;
  
  &:hover {
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(10, 10, 15, 0.8) 40%,
      rgba(10, 10, 15, 0.98) 100%
    );
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(10, 10, 15, 0.75) 35%,
      rgba(10, 10, 15, 0.96) 100%
    );
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(10, 10, 15, 0.8) 30%,
      rgba(10, 10, 15, 0.97) 100%
    );
  }

  @media (max-width: 500px) {
    padding: ${props => props.theme.spacing.sm};
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.foreground};
  margin-bottom: ${props => props.theme.spacing.sm};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.15rem;
    margin-bottom: 6px;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.foregroundSecondary};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.875rem;
    -webkit-line-clamp: 3;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    line-height: 1.4;
    margin-bottom: ${props => props.theme.spacing.sm};
    -webkit-line-clamp: 3;
  }

  @media (max-width: 500px) {
    font-size: 0.75rem;
    margin-bottom: 8px;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
    -webkit-line-clamp: 2;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  max-width: 100%;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 6px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.spacing.xs};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  @media (max-width: 500px) {
    gap: 4px;
    margin-bottom: 8px;
  }

  @media (max-width: 400px) {
    gap: 3px;
    margin-bottom: 6px;
  }
`;

export const ProjectTag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.colors.primary};
  white-space: nowrap;
  flex-shrink: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.7rem;
    padding: 5px 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.65rem;
    padding: 4px 8px;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
    padding: 3px 6px;
  }

  @media (max-width: 400px) {
    font-size: 0.55rem;
    padding: 2px 5px;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.foreground};
  transition: color ${props => props.theme.transitions.fast};
  white-space: nowrap;
  flex-shrink: 0;
  max-width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    gap: 6px;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    gap: ${props => props.theme.spacing.xs};
  }

  @media (max-width: 400px) {
    font-size: 0.65rem;
    gap: 4px;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};

    svg {
      transform: translate(3px, -3px);
    }
  }

  svg {
    transition: transform ${props => props.theme.transitions.fast};
    flex-shrink: 0;
    width: 14px;
    height: 14px;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 12px;
      height: 12px;
    }

    @media (max-width: 400px) {
      width: 10px;
      height: 10px;
    }
  }
`;
