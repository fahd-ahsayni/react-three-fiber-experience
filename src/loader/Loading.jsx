import { Canvas } from "@react-three/fiber";
import SceneLoader from "./SceneLoader";

export default function Loading() {
  return (
    <Canvas>
      <SceneLoader />
    </Canvas>
  );
}
