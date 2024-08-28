import { Float, Sparkles, Stars, useGLTF } from "@react-three/drei";
import Earth from "./Earth";
import Moon from "./Moon";
import HistoryImage from "./HistoryImage";
import ReactGltf from "./RaectGltf";
import AngularGltf from "./AngularGltf";
import Jupiter from "./Jupiter";

export default function Space() {
  return (
    <>
      <Sparkles count={1000} color="#ff4200" size={15} scale={100} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Earth position={[-4, 0, -10]} scale={2} />
      <Moon scale={0.8} position-z={-18} position-x={-8} />
      <ReactGltf position={[8, 0, -35]} />
      <AngularGltf rotation-y={Math.PI} position={[-8, 0, -35]} scale={3} />
      <Jupiter scale={0.7} rotation-x={Math.PI * 0.3} position={[0, -6, -40]} />
      {/* <HistoryImage /> */}
    </>
  );
}
