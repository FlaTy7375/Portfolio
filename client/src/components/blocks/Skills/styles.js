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

const glow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 5px rgba(99, 102, 241, 0.5));
  }
  50% { 
    filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.8));
  }
`;

export const SkillsSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.background};
`;

export const SkillsContainer = styled.div`
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCategory = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? fadeInUp : 'none'} 0.8s ease-out ${props => props.$delay}s both;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.1);
  }
`;

export const CategoryTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.foreground};
  margin-bottom: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.cardBorder};
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateX(${props => props.$isVisible ? '0' : '-20px'});
  transition: all 0.6s ease-out ${props => props.$delay}s;
`;

export const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${props => props.theme.colors.foreground};
  flex-shrink: 0;
`;

export const SkillInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.foreground};
`;

export const CircularProgress = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(-90deg);
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: ${props => props.theme.colors.cardBorder};
  stroke-width: 6;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: url(#gradient);
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease-out;

  @keyframes progressGradient {
    0% { stroke: #6366f1; }
    50% { stroke: #8b5cf6; }
    100% { stroke: #06b6d4; }
  }
`;

export const PercentageText = styled.span`
  position: absolute;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.foreground};
`;
