import React, { useEffect, useMemo, useRef } from 'react';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { clone as skeletonClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

export function Bee3D(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/Bee_fbx.glb');

  // Clone to avoid sharing skeletons/materials between instances
  const clonedScene = useMemo(() => skeletonClone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  // Load external textures
  const textures = useTexture({
    baseColor: '/models/gltf_embedded_0.png',
    roughness: '/models/gltf_embedded_3@channels=R.png',
  });

  // Fix texture orientation and color space
  useEffect(() => {
    if (!textures?.baseColor) return;

    textures.baseColor.flipY = false;
    textures.baseColor.colorSpace = THREE.SRGBColorSpace;


    if (textures.roughness) {
      textures.roughness.flipY = false;
      textures.roughness.colorSpace = THREE.NoColorSpace;
 
    }
  }, [textures]);

  // Apply textures and material settings to all meshes
  useEffect(() => {
    if (!clonedScene || !textures?.baseColor) return;

    clonedScene.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      // Receiving shadows on a skinned/animated mesh is expensive.
      // Keep castShadow for the same scene look, but disable receiveShadow for performance.
      child.receiveShadow = false;


      const apply = (material) => {
        if (!material) return;

        if (!material.map) material.map = textures.baseColor;
        if (textures.roughness && !material.roughnessMap)
          material.roughnessMap = textures.roughness;

        material.metalness = 0.1;
        material.roughness = 0.6;
        material.transparent = false;
        material.opacity = 1;
        material.needsUpdate = true;
      };

      if (Array.isArray(child.material)) {
        child.material.forEach(apply);
      } else {
        apply(child.material);
      }
    });
  }, [clonedScene, textures]);

  // Play first hover animation (loop)
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    Object.values(actions).forEach((action) => action?.stop());

    const hoverKey = Object.keys(actions).find((name) =>
      name.toLowerCase().includes('hover')
    );
    const hoverAction = hoverKey ? actions[hoverKey] : Object.values(actions)[0];
    if (!hoverAction) return;

    hoverAction.reset();
    hoverAction.setLoop(THREE.LoopRepeat, Infinity);
    hoverAction.play();

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload('/models/Bee_fbx.glb');

export default Bee3D;
