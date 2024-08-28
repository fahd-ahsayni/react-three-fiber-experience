import {
  PerspectiveCamera,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";

import Targets from "./Targets";
import Spaceship from "./Spaceship";
import { Color, Fog } from "three";
import { useThree } from "@react-three/fiber";
import Space from "./space/Space";
import cubeMap from "./assets/cubeMap";

const FOG = new Fog(new Color("#070412"), 15, 40);
function App() {
  const { scene } = useThree();
  scene.fog = FOG;

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.6} />
      <group position={[0, 2.25, 2]} scale={0.8}>
        <Text
          textAlign="center"
          fontWeight={700}
          letterSpacing={-0.05}
          fontSize={0.3}
          position-y={0}
        >
          HELLO, MY NAME'S{"\n"}
          FAHD AHSAYNI{"\n"}
          ENJOY THE JOURNEY{"\n"}
        </Text>
      </group>

      <Environment
        backgroundBlurriness={0.04}
        environmentIntensity={1.2}
        backgroundRotation={[-Math.PI * 0.5, -2, 0]}
        background={true}
        files={cubeMap}
      />

      <PerspectiveCamera makeDefault position={[0, 3, 8]} />

      <Spaceship />
      <group position={[0, 0, -30]}>
        <Targets />
      </group>
      <Space />
      <directionalLight color={"#fff"} intensity={2} position={[10, 5, 4]} />
    </>
  );
}

export default App;
