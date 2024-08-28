import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Moon(props) {
  const { nodes, materials } = useGLTF("./assets/models/moon.glb");
  const meshRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const radius = 3; // Radius of the circle path
    meshRef.current.position.x = radius * Math.cos(time * 0.1);
    meshRef.current.position.y = radius * Math.sin(time * 0.1);
  });

  return (
    <group ref={meshRef}>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/moon.glb");
