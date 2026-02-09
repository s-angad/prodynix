import { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const HERO_ASSETS = {
  glb: '/models/Bee_fbx.glb',
  // Preload all texture files that the GLB references so the bee never flashes
  // untextured during the first frames.
  textures: [
    '/models/gltf_embedded_0.png',
    '/models/gltf_embedded_1.png',
    '/models/gltf_embedded_1@channels=A.png',
    '/models/gltf_embedded_2.png',
    '/models/gltf_embedded_3@channels=R.png',
  ],
};

const ThreePreloader = () => {
  useEffect(() => {
    // Start loading early so the global PageLoader can wait for it.
    try {
      useGLTF.preload(HERO_ASSETS.glb);
      useTexture.preload(HERO_ASSETS.textures);
    } catch {
      // If preload fails for any reason, don't crash the app.
    }
  }, []);

  return null;
};

export default ThreePreloader;
