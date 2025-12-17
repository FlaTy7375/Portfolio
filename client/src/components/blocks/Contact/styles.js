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

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }
  50% { 
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.4);
  }
`;

export const ContactSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 80vh;
  padding: ${props => props.theme.spacing.section} 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  pointer-events: none;
`;

export const ContactContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  text-align: center;
`;

export const SectionHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxl};
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
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 700;
  background: ${props => props.theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto ${props => props.theme.spacing.xxxl};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '20px'});
  transition: all 0.8s ease-out 0.2s;
`;

export const ContactText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.foregroundSecondary};
`;

export const ContactLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-decoration: none;
  opacity: ${props => props.$isVisible ? 1 : 0};
  animation: ${props => props.$isVisible ? fadeInUp : 'none'} 0.8s ease-out ${props => props.$delay}s both;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    opacity: 1;
  }
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.borderRadius.md};
  color: ${props => props.theme.colors.foreground};
  transition: transform 0.3s ease;

  .contact-card:hover & {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.span`
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.foregroundTertiary};
`;

export const CardValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.colors.foreground};
`;
