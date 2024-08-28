import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three"; // Make sure to import THREE
import { useFrame } from "@react-three/fiber";

export default function Earth(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/models/earth.glb");
  const { actions } = useAnimations(animations, group);

  useFrame((state) => {
    group.current.rotation.y = -state.clock.getElapsedTime() * 0.3;
  });

  useEffect(() => {
    if (animations.length > 0) {
      const firstAnimation = actions[Object.keys(actions)[0]];
      if (firstAnimation) {
        firstAnimation.reset().play();
      }
    }
  }, [actions, animations]);

  useEffect(() => {
    if (materials.earth) {
      materials.earth.side = THREE.FrontSide;
    }
    if (materials.clouds) {
      materials.clouds.side = THREE.FrontSide;
    }
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Earth_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.earth}
                />
              </group>
              <group name="Clouds_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.clouds}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/earth.glb");
