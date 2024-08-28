import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Jupiter(props) {
  const { nodes, materials } = useGLTF("./assets/models/Jupiter.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.944, -0.197, -0.076]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube_m_planet_0.geometry}
            material={materials.m_planet}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={588.12}
          />
          <mesh
            geometry={nodes.Plane_m_ring_0.geometry}
            material={materials.m_ring}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1039.406}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/Jupiter.glb");
