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

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(99, 102, 241, 0.15);
  }

  &:hover ${() => ProjectOverlay} {
    opacity: 1;
  }

  &:hover ${() => ProjectImage} {
    transform: scale(1.05);
  }
`;

export const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
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
    rgba(10, 10, 15, 0.6) 50%,
    rgba(10, 10, 15, 0.95) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: ${props => props.theme.spacing.xl};
  opacity: 0;
  transition: opacity 0.4s ease;
`;

export const ProjectInfo = styled.div`
  width: 100%;
`;

export const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.foreground};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.foregroundSecondary};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.5;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ProjectTag = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: ${props => props.theme.borderRadius.sm};
  color: ${props => props.theme.colors.primary};
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.colors.foreground};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};

    svg {
      transform: translate(3px, -3px);
    }
  }

  svg {
    transition: transform ${props => props.theme.transitions.fast};
  }
`;
