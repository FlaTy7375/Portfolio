import { useEffect, useRef, useState } from 'react';
import {
  AboutSection,
  AboutContainer,
  AboutContent,
  SectionLabel,
  AboutTitle,
  AboutText,
  HighlightText,
  SkillsList,
  SkillItem,
  SkillName,
  SkillBar,
  SkillProgress,
  BackgroundParticles,
  Particle,
} from './styles';

const skills = [
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'Next.js', level: 70 },
  { name: 'HTML', level: 95 },
  { name: 'Styled Components', level: 80 },
  { name: 'CSS', level: 90 },
  { name: 'Git', level: 70 },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [particles] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AboutSection id="about" ref={sectionRef}>
      <BackgroundParticles>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </BackgroundParticles>

      <AboutContainer>
        <AboutContent $isVisible={isVisible}>
          <SectionLabel>Обо мне</SectionLabel>
          <AboutTitle>
            Создаю <HighlightText>уникальные</HighlightText> цифровые опыты
          </AboutTitle>
          <AboutText>
            Я — frontend-разработчик с 3-летним опытом создания 
            современных веб-приложений. Моя страсть — это объединение 
            <HighlightText> технических инноваций</HighlightText> с 
            <HighlightText> эстетическим дизайном</HighlightText>.
          </AboutText>
          <AboutText>
            Специализируюсь на разработке интерактивных интерфейсов с использованием 
            React, Next.js и современных библиотек. Каждый проект — 
            это возможность создать что-то <HighlightText>запоминающееся</HighlightText>.
          </AboutText>
        </AboutContent>

        <SkillsList $isVisible={isVisible}>
          {skills.map((skill, index) => (
            <SkillItem 
              key={skill.name} 
              $delay={index * 0.1}
              $isVisible={isVisible}
            >
              <SkillName>{skill.name}</SkillName>
              <SkillBar>
                <SkillProgress 
                  $width={skill.level}
                  $delay={index * 0.1}
                  $isVisible={isVisible}
                />
              </SkillBar>
            </SkillItem>
          ))}
        </SkillsList>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
