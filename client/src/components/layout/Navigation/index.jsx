import { useState, useEffect } from 'react';
import { NavWrapper, NavContainer, Logo, NavLinks, NavLink, MobileMenuButton, MobileMenu, MobileNavLink } from './styles';

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Контакты', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <NavWrapper $isScrolled={isScrolled}>
        <NavContainer>
          <Logo data-cursor="pointer">
            <span className="bracket">&lt;</span>
            Alex
            <span className="highlight">Dev</span>
            <span className="bracket">/&gt;</span>
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                $isActive={activeSection === item.href.replace('#', '')}
                data-cursor="pointer"
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            $isOpen={isMobileMenuOpen}
            data-cursor="pointer"
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavContainer>
      </NavWrapper>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <MobileNavLink
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            $delay={index * 0.1}
            $isOpen={isMobileMenuOpen}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navigation;
