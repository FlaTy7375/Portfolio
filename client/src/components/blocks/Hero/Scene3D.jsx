import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMousePosition } from './useMousePosition';
import { useRef, forwardRef } from 'react';
import * as THREE from 'three';

const SnakeSegment = forwardRef(({ index, totalSegments, basePosition, isMobile = false }, ref) => {
  const size = isMobile ? 0.9 : 1.2;
  const color = '#6366f1';

  return (
    <group ref={ref} position={basePosition}>
      <mesh>
        <sphereGeometry args={[size * 1.5, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {index === 0 && (
        <group>
          <group position={[size * 0.6, size * 0.3, size * 0.85]}>
            <mesh>
              <sphereGeometry args={[size * 0.3, 8, 8]} />
              <meshStandardMaterial
                color="#6366f1"
                emissive="#6366f1"
                emissiveIntensity={1.5}
                transparent
                opacity={0.4}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[size * 0.25, 12, 12]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={2}
              />
            </mesh>
            <mesh position={[0, 0, size * 0.2]}>
              <sphereGeometry args={[size * 0.15, 8, 8]} />
              <meshStandardMaterial
                color="#000000"
                emissive="#6366f1"
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>
          <group position={[size * 0.6, -size * 0.3, size * 0.85]}>
            <mesh>
              <sphereGeometry args={[size * 0.3, 8, 8]} />
              <meshStandardMaterial
                color="#6366f1"
                emissive="#6366f1"
                emissiveIntensity={1.5}
                transparent
                opacity={0.4}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[size * 0.25, 12, 12]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={2}
              />
            </mesh>
            <mesh position={[0, 0, size * 0.2]}>
              <sphereGeometry args={[size * 0.15, 8, 8]} />
              <meshStandardMaterial
                color="#000000"
                emissive="#6366f1"
                emissiveIntensity={0.8}
              />
            </mesh>
          </group>
        </group>
      )}
    </group>
  );
});

SnakeSegment.displayName = 'SnakeSegment';

function SegmentConnection({ startIdx, endIdx, segments, index }) {
  const lineRef = useRef();
  
  useFrame((state) => {
    if (lineRef.current && segments[startIdx] && segments[endIdx]) {
      const startGroup = segments[startIdx].current;
      const endGroup = segments[endIdx].current;
      
      if (startGroup && endGroup) {
        const start = startGroup.position;
        const end = endGroup.position;
        
        const points = [];
        const segmentCount = 10;
        
        for (let i = 0; i <= segmentCount; i++) {
          const t = i / segmentCount;
          const x = start.x + (end.x - start.x) * t;
          const y = start.y + (end.y - start.y) * t;
          const z = start.z + (end.z - start.z) * t;
          
          points.push(new THREE.Vector3(x, y, z));
        }
        
        lineRef.current.geometry.setFromPoints(points);
      }
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.3}
      />
    </line>
  );
}

function Snake({ isMobile = false }) {
  const segmentsRef = useRef([]);
  const targetPositions = useRef([]);
  const { x, y, hasMoved } = useMousePosition();
  
  const segmentCount = 5;
  const basePosition = [0, 0, 0];
  const segmentSpacing = isMobile ? 2 : 2.5;

  if (targetPositions.current.length === 0) {
    for (let i = 0; i < segmentCount; i++) {
      targetPositions.current[i] = new THREE.Vector3(
        basePosition[0] + i * segmentSpacing,
        basePosition[1],
        basePosition[2]
      );
    }
  }

  useFrame(() => {
    if (segmentsRef.current.length === 0) return;

    let targetX = 0;
    let targetY = 0;
    
    if (hasMoved && typeof window !== 'undefined' && window.innerWidth > 0) {
      const multiplier = isMobile ? 5 : 8;
      const yMultiplier = isMobile ? 4 : 6;
      targetX = ((x / window.innerWidth) * 2 - 1) * multiplier;
      targetY = -((y / window.innerHeight) * 2 - 1) * yMultiplier;
    }

    const headTarget = new THREE.Vector3(targetX, targetY, basePosition[2]);
    targetPositions.current[0].lerp(headTarget, 0.12);

    for (let i = 1; i < segmentCount; i++) {
      const prevPos = targetPositions.current[i - 1];
      const currentPos = targetPositions.current[i];
      
      const direction = new THREE.Vector3().subVectors(prevPos, currentPos);
      const distance = direction.length();
      
      if (distance > 0) {
        direction.normalize();
      }
      
      const targetPos = new THREE.Vector3().copy(prevPos)
        .sub(direction.multiplyScalar(segmentSpacing));
      
      const time = Date.now() * 0.001;
      const bendAmount = 0.2;
      const bendX = Math.sin(i * 0.8 + time * 0.5) * bendAmount;
      const bendY = Math.cos(i * 0.6 + time * 0.4) * bendAmount;
      
      targetPos.x += bendX;
      targetPos.y += bendY;
      
      targetPositions.current[i].lerp(targetPos, 0.1);
    }

    segmentsRef.current.forEach((segment, i) => {
      if (segment && targetPositions.current[i]) {
        segment.position.copy(targetPositions.current[i]);
      }
    });
  });

  return (
    <group>
      {Array.from({ length: segmentCount }).map((_, i) => (
        <SnakeSegment
          key={i}
          index={i}
          totalSegments={segmentCount}
          basePosition={[basePosition[0] + i * segmentSpacing, basePosition[1], basePosition[2]]}
          isMobile={isMobile}
          ref={(el) => {
            if (el) segmentsRef.current[i] = el;
          }}
        />
      ))}
      
      {Array.from({ length: segmentCount - 1 }).map((_, i) => (
        <SegmentConnection
          key={i}
          startIdx={i}
          endIdx={i + 1}
          segments={segmentsRef.current}
          index={i}
        />
      ))}
    </group>
  );
}

function Scene3D({ isMobile = false }) {
  return (
    <>
      <ambientLight intensity={isMobile ? 1.2 : 1.5} />
      <pointLight position={[30, 30, 30]} intensity={isMobile ? 2 : 3} color="#6366f1" />
      <pointLight position={[-30, 30, 30]} intensity={isMobile ? 2 : 3} color="#8b5cf6" />
      <pointLight position={[0, -30, 30]} intensity={isMobile ? 2 : 2.5} color="#a388e0" />
      <pointLight position={[0, 0, 30]} intensity={isMobile ? 2 : 2.5} color="#6366f1" />
      <directionalLight position={[15, 15, 15]} intensity={isMobile ? 1.2 : 1.5} />
      
      <Snake isMobile={isMobile} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export default Scene3D;
