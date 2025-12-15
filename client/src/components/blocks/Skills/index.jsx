import { useRef, useState, useEffect } from 'react';
import {
  SkillsSection,
  SkillsContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillIcon,
  SkillInfo,
  SkillName,
  CircularProgress,
  CircleBackground,
  CircleProgress,
  PercentageText,
} from './styles';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, icon: 'R' },
      { name: 'TypeScript', level: 90, icon: 'TS' },
      { name: 'Next.js', level: 88, icon: 'N' },
      { name: 'Three.js', level: 82, icon: '3D' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 87, icon: 'N' },
      { name: 'Python', level: 75, icon: 'Py' },
      { name: 'PostgreSQL', level: 80, icon: 'DB' },
      { name: 'GraphQL', level: 78, icon: 'GQ' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', level: 92, icon: 'F' },
      { name: 'UI/UX', level: 88, icon: 'UX' },
      { name: 'Motion', level: 85, icon: 'M' },
      { name: 'WebGL', level: 70, icon: 'GL' },
    ],
  },
];

const AnimatedCircle = ({ level, isVisible, delay }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const circumference = 2 * Math.PI * 40;
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = level / 30;
        const interval = setInterval(() => {
          current += increment;
          if (current >= level) {
            current = level;
            clearInterval(interval);
          }
          setAnimatedLevel(Math.round(current));
        }, 30);
        return () => clearInterval(interval);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  const strokeDashoffset = circumference - (animatedLevel / 100) * circumference;

  return (
    <CircularProgress>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <CircleBackground cx="50" cy="50" r="40" />
        <CircleProgress
          cx="50"
          cy="50"
          r="40"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: isVisible ? strokeDashoffset : circumference,
          }}
        />
      </svg>
      <PercentageText>{animatedLevel}%</PercentageText>
    </CircularProgress>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <SkillsSection id="skills" ref={sectionRef}>
      <SkillsContainer>
        <SectionHeader $isVisible={isVisible}>
          <SectionLabel>Экспертиза</SectionLabel>
          <SectionTitle>Навыки и технологии</SectionTitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory 
              key={category.title}
              $delay={categoryIndex * 0.2}
              $isVisible={isVisible}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem 
                    key={skill.name}
                    $delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    $isVisible={isVisible}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillInfo>
                      <SkillName>{skill.name}</SkillName>
                      <AnimatedCircle 
                        level={skill.level} 
                        isVisible={isVisible}
                        delay={categoryIndex * 0.2 + skillIndex * 0.1}
                      />
                    </SkillInfo>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
