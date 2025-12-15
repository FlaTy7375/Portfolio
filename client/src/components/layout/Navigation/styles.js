import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.theme.spacing.md} 0;
  background: ${props => props.$isScrolled ? props.theme.colors.glassBg : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(20px)' : 'none'};
  border-bottom: 1px solid ${props => props.$isScrolled ? props.theme.colors.cardBorder : 'transparent'};
  transition: all ${props => props.theme.transitions.normal};
`;

export const NavContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const Logo = styled.a`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.foreground};
  display: flex;
  align-items: center;
  gap: 2px;

  .bracket {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.mono};
  }

  .highlight {
    background: ${props => props.theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.foregroundSecondary};
  position: relative;
  padding: ${props => props.theme.spacing.sm} 0;
  transition: color ${props => props.theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.colors.gradient};
    transform: translateX(-50%);
    transition: width ${props => props.theme.transitions.normal};
  }

  &:hover {
    color: ${props => props.theme.colors.foreground};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 6px;
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 24px;
    height: 2px;
    background: ${props => props.theme.colors.foreground};
    transition: all ${props => props.theme.transitions.fast};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translateY(8px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'};
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xl};
  z-index: 999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all ${props => props.theme.transitions.normal};
`;

export const MobileNavLink = styled.a`
  font-family: ${props => props.theme.fonts.display};
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.foreground};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: translateY(${props => props.$isOpen ? '0' : '20px'});
  transition: all 0.4s ease ${props => props.$delay}s;

  &:hover {
    background: ${props => props.theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
