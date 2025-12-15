import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: ${props => props.theme.spacing.xl} 0;
  background: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.cardBorder};
`;

export const FooterContainer = styled.div`
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.lg};
  }
`;

export const Copyright = styled.div`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1rem;
  color: ${props => props.theme.colors.foregroundSecondary};

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

  .year {
    color: ${props => props.theme.colors.foregroundTertiary};
    margin-left: ${props => props.theme.spacing.md};
  }
`;

export const BackToTop = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.foregroundSecondary};
  transition: color ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};

    svg {
      transform: translateY(-3px);
    }
  }

  svg {
    transition: transform ${props => props.theme.transitions.fast};
  }
`;
