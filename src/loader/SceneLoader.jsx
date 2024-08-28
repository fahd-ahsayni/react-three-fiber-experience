import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SceneLoader() {
  const cubeRef = useRef();
  useFrame((state) => {
    cubeRef.current.rotation.x = state.clock.getElapsedTime();
    cubeRef.current.rotation.y = state.clock.getElapsedTime();
  });

  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry  args={[1, 1, 1, 4, 4, 4]} />
        <meshBasicMaterial color="#ff4200" wireframe />
      </mesh>
      <color args={["#000"]} attach="background" />
      {/* <Text>Loading {progress}</Text> */}
    </>
  );
}
