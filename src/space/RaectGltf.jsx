/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ReactGltf(props) {
  const reactRef = useRef();
  const { nodes, materials } = useGLTF("./assets/models/react.glb");

  useFrame((state) => {
    reactRef.current.rotation.y = state.clock.getElapsedTime();
  });
  return (
    <group ref={reactRef} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          scale={[39.166, 39.166, 39.166]}
        >
          <meshStandardMaterial color="#1acfd2" />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/react.glb");