import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function MembraneModel({ rotation = 0.001 }) {
  const meshRef = useRef();
  
  // Create a simple cylinder as a placeholder for the membrane
  const geometry = new THREE.CylinderGeometry(1, 1, 3, 32);
  const material = new THREE.MeshStandardMaterial({ 
    color: '#2563eb',
    metalness: 0.8,
    roughness: 0.2,
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotation;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material}>
      <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}