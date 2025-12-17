import { useRef, useState, useEffect } from 'react';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLink,
} from './styles';

const projects = [
  {
    id: 1,
    title: 'Yokai Game',
    description: 'Интерактивное веб-приложение для мониторинга и захвата японских духов (ёкаев) в реальном времени.',
    image: '/Yokai-Game.png',
    tags: ['Next.js 16', 'React 19', 'Styled Components', 'TanStack Query', 'Zod'],
    link: 'https://yokai-game.netlify.app/monitoring',
    size: 'large',
  },
  {
    id: 2,
    title: 'Double Systems',
    description: 'Мультиязычный корпоративный ssr сайт веб-студии с портфолио кейсов, блогом и системой управления контентом для презентации услуг разработки веб-платформ и мобильных приложений.',
    image: '/Double-Systems.png',
    tags: ['Next.js 16', 'React 19', 'Styled Components', 'Payload CMS'],
    link: 'https://doublesystems.netlify.app/ru',
    size: 'large',
  },
  {
    id: 3,
    title: 'ProKarcher',
    description: 'Веб-приложение для аренды моющих пылесосов и пароочистителей Karcher в городе Столин. Сайт позволяет пользователям просматривать технику, бронировать ее, а также заказывать услуги химчистки.',
    image: '/ProKarcher.png',
    tags: ['React 19', 'Styled Components', 'PostgreSQL', 'Express.js'],
    link: 'https://karcher-stolin.netlify.app/',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Cyber Arena',
    description: 'Современный сайт с анимациями для компьютерного клуба в Москве',
    image: '/Cyber-Arena.png',
    tags: ['Next.js 16', 'React 19', 'Styled Components', 'Vite'],
    link: 'https://cyber-arena-pc.netlify.app/',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Atelier Shop',
    description: 'Современный магазин премиальной одежды, обуви и аксессуаров',
    image: '/Atelier-Shop.png',
    tags: ['Next.js 16', 'React 19', 'Styled Components'],
    link: 'https://atelier-shop.netlify.app/',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Ugrushi',
    description: 'Сайт для отеля в Гродно с интегрированной системой бронирования',
    image: '/Ugrushi.png',
    tags: ['JavaScript', 'HTML/CSS', 'Shelter Cloud'],
    link: 'https://ugrushi.by/',
    size: 'medium',
  },
];

const ProjectCardComponent = ({ project, index, isVisible }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const rafRef = useRef(null);
  const isSafari = useRef(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    isSafari.current = /safari/.test(userAgent) && !/chrome/.test(userAgent);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isSafari.current) return;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      setTransform({ rotateX, rotateY });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <ProjectCard
      ref={cardRef}
      $size={project.size}
      $delay={index * 0.1}
      $isVisible={isVisible}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isSafari.current 
          ? 'none' 
          : `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
      }}
      data-cursor="pointer"
    >
      <ProjectImage 
        className="project-image" 
        style={{ 
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      <ProjectOverlay className="project-overlay">
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTags>
            {project.tags.map((tag) => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </ProjectTags>
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            Смотреть проект
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </ProjectLink>
        </ProjectInfo>
      </ProjectOverlay>
    </ProjectCard>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <ProjectsSection id="projects" ref={sectionRef}>
      <ProjectsContainer>
        <SectionHeader $isVisible={isVisible}>
          <SectionLabel>Портфолио</SectionLabel>
          <SectionTitle>Последние проекты</SectionTitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCardComponent
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
