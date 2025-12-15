import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    background: '#0a0a0f',
    backgroundSecondary: '#12121a',
    foreground: '#ffffff',
    foregroundSecondary: '#a0a0b0',
    foregroundTertiary: '#606070',
    primary: '#6366f1',
    primaryGlow: 'rgba(99, 102, 241, 0.5)',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    accentGlow: 'rgba(6, 182, 212, 0.5)',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
    gradientText: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)',
    cardBackground: 'rgba(18, 18, 26, 0.8)',
    cardBorder: 'rgba(255, 255, 255, 0.1)',
    glassBg: 'rgba(10, 10, 15, 0.7)',
  },
  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    section: '96px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1400px',
  },
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.3s ease-out',
    slow: '0.6s ease-out',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.foreground};
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      cursor: auto;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: none;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      cursor: pointer;
    }
  }

  button {
    cursor: none;
    border: none;
    background: none;
    font-family: inherit;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      cursor: pointer;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.display};
    font-weight: 700;
    line-height: 1.2;
  }

  ::selection {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.foreground};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

export default GlobalStyles;
