import { FooterWrapper, FooterContainer, FooterContent, Copyright, BackToTop } from './styles';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <Copyright>
            <span className="bracket">&lt;</span>
            Alex<span className="highlight">Dev</span>
            <span className="bracket">/&gt;</span>
            <span className="year"> {new Date().getFullYear()}</span>
          </Copyright>

          <BackToTop onClick={scrollToTop} data-cursor="pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            Наверх
          </BackToTop>
        </FooterContent>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
