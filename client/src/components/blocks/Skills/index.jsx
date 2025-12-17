import { useRef, useState, useEffect } from 'react';
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SkillsCloud,
  SkillTag,
} from './styles';

const skills = [
  'JavaScript',
  'HTML',
  'HTML5',
  'CSS3',
  'Git',
  'React',
  'CSS',
  'GitHub',
  'Figma',
  'Adobe Photoshop',
  'BEM',
  'HTTP',
  'HTTPS',
  'TypeScript',
  'Node.js',
  'Sass',
  'Less',
  'Next.js',
  'Express.js',
  'REST API',
  'PostgreSQL',
  'Payload CMS',
  'ES6',
  'ReactJS',
  'Webpack',
  'Vite',
  'Gulp',
  'Tailwind',
  'Three.js',
  'Styled Components',
  'Redux',
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const sectionRef = useRef(null);
  const tagsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        tagsRef.current.forEach((tag, index) => {
          if (!tag) return;

          const rect = tag.getBoundingClientRect();
          const tagCenterX = rect.left + rect.width / 2;
          const tagCenterY = rect.top + rect.height / 2;
          
          const dx = e.clientX - tagCenterX;
          const dy = e.clientY - tagCenterY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance && !isSafari) {
            const force = (maxDistance - distance) / maxDistance;
            const moveX = (dx / distance) * force * 15;
            const moveY = (dy / distance) * force * 15;
            
            tag.style.transform = `translate3d(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px), 0) scale(${1 + force * 0.1})`;
          } else if (distance >= maxDistance && !isSafari) {
            tag.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
          }
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isVisible]);

  const getInitialPosition = (index, total) => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const isVerySmall = windowWidth <= 400;
    const isSmallMobile = windowWidth <= 500;
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth <= 1024 && windowWidth > 768;
    let radius;
    if (isVerySmall) {
      radius = Math.sqrt(index / total) * 120;
    } else if (isSmallMobile) {
      radius = Math.sqrt(index / total) * 150;
    } else if (isMobile) {
      radius = Math.sqrt(index / total) * 180;
    } else if (isTablet) {
      radius = Math.sqrt(index / total) * 280;
    } else {
      radius = Math.sqrt(index / total) * 400;
    }
    const angle = index * goldenAngle;
    const x = Math.cos(angle) * radius - 50;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <SkillsSection id="skills" ref={sectionRef}>
      <SkillsContainer>
        <SectionHeader $isVisible={isVisible}>
          <SectionLabel>Экспертиза</SectionLabel>
          <SectionTitle>Навыки и технологии</SectionTitle>
        </SectionHeader>

        <SkillsCloud>
          {skills.map((skill, index) => {
            const initialPos = getInitialPosition(index, skills.length);
            return (
              <SkillTag
                key={skill}
                ref={(el) => {
                  if (el) tagsRef.current[index] = el;
                }}
                $index={index}
                $isVisible={isVisible}
                $initialX={initialPos.x}
                $initialY={initialPos.y}
              >
                {skill}
              </SkillTag>
            );
          })}
        </SkillsCloud>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
