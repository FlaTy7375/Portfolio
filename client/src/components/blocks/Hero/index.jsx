import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroTagline,
  TypewriterText,
  CanvasWrapper,
  ScrollIndicator,
  GradientOverlay,
} from './styles';

const AnimatedSphere = ({ mouse }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.y * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mouse.x * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ mouse }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 - mouse.y * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3 + mouse.x * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[2.5, 0.1, 16, 100]} position={[0, 0, -1]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Torus>
    </Float>
  );
};

const FloatingIcosahedron = ({ mouse }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 + mouse.y * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 - mouse.x * 0.4;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[0.8]} position={[3, 1, -2]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const Scene = ({ mouse }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.3, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -5, 5]} intensity={0.3} color="#06b6d4" />
      
      <AnimatedSphere mouse={mouse} />
      <FloatingTorus mouse={mouse} />
      <FloatingIcosahedron mouse={mouse} />
    </>
  );
};

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', '3D Enthusiast'];
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      if (!isDeleting) {
        setDisplayText(word.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === word.length) {
          setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setDisplayText(word.substring(0, charIndex));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      
      setTimeout(type, isDeleting ? 50 : 100);
    };
    
    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [currentWordIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="hero">
      <CanvasWrapper>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene mouse={mouse} />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      
      <GradientOverlay />
      
      <HeroContent>
        <HeroSubtitle>Привет, я</HeroSubtitle>
        <HeroTitle>
          Александр
          <span className="gradient"> Петров</span>
        </HeroTitle>
        <HeroTagline>
          <TypewriterText>{displayText}</TypewriterText>
          <span className="cursor">|</span>
        </HeroTagline>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToAbout} data-cursor="pointer">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
