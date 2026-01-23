import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Bee3D from './Bee3D';
import Button from './Button';

const HeroBeeSection = () => {
  return (
    <section className="relative h-screen w-full overflow-visible bg-hero-gradient bg-grid">
      {/* Full-screen 3D background */}
      <div className="absolute inset-0 -z-0 overflow-visible" style={{ zIndex: 110 }}>
        <Canvas 
          shadows
          gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
          dpr={[1, 2]}
          camera={{ position: [0, 1.2, 5], fov: 50 }}
          style={{ width: '100%', height: '100%',  background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault position={[0, 1.2, 5]} fov={50} />

          {/* Model */}
          <Bee3D
            scale={0.25}
            position={[2.3, -2.5, -2]}
            rotation={[0, -Math.PI * 0.4, 0]}
          />

          {/* Controls (interactive) */}
          <OrbitControls
            enableZoom
            enablePan
            autoRotate={false}
            minDistance={0.5}
            maxDistance={20}
          />

          {/* Lighting + shadows */}
          <ambientLight intensity={3} />
          <directionalLight
            position={[6, 6, 6]}
            intensity={2.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={25}
            shadow-camera-left={-6}
            shadow-camera-right={6}
            shadow-camera-top={6}
            shadow-camera-bottom={-6}
          />
          <hemisphereLight intensity={0.5} groundColor="#0b1220" />

          {/* Shadow catcher floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <shadowMaterial opacity={0.2} />
          </mesh>
        </Canvas>
      </div>

      {/* Foreground content */}
      <div className="relative z-100 flex h-full items-center pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bee-yellow/20 bg-bee-yellow/10 px-4 py-2 text-xs sm:text-sm text-bee-yellow">
                <span className="h-2 w-2 rounded-full bg-bee-yellow" />
                Technology & Automation Solutions
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-bee-white">
              Intelligent <span className="text-bee-yellow">Automation</span>
              <br />
              For Every Business
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              We build smart, reliable automation solutions that transform business operations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto">
              <Button to="/solutions" size="lg" fullWidthMobile>
                Explore Solutions
              </Button>
              <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBeeSection;
