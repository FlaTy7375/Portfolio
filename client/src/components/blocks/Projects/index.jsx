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
    title: 'E-Commerce Platform',
    description: 'Современная платформа электронной коммерции с 3D-визуализацией продуктов',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Three.js', 'Node.js'],
    link: '#',
    size: 'large',
  },
  {
    id: 2,
    title: 'Crypto Dashboard',
    description: 'Интерактивная панель для отслеживания криптовалют в реальном времени',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['Next.js', 'WebSocket', 'Charts'],
    link: '#',
    size: 'medium',
  },
  {
    id: 3,
    title: 'AI Art Generator',
    description: 'Веб-приложение для генерации уникальных изображений с помощью AI',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['React', 'Python', 'ML'],
    link: '#',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Social Network',
    description: 'Социальная платформа нового поколения с продвинутыми функциями',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: '#',
    size: 'large',
  },
];

const ProjectCardComponent = ({ project, index, isVisible }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <ProjectCard
      ref={cardRef}
      $size={project.size}
      $delay={index * 0.1}
      $isVisible={isVisible}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
      }}
      data-cursor="pointer"
    >
      <ProjectImage style={{ background: project.image }} />
      <ProjectOverlay>
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectTags>
            {project.tags.map((tag) => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </ProjectTags>
          <ProjectLink href={project.link}>
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
          <SectionTitle>Избранные проекты</SectionTitle>
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
