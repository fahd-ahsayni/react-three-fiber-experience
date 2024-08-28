import { Text, useTexture } from "@react-three/drei";

export default function HistoryImage() {
  const myImge = useTexture("./img.jpg");
  return (
    <group rotation-y={Math.PI * 0.4} position={[-8, 4, -25]} scale={0.6}>
      <mesh position-z={0.005} position-y={-0.3}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial map={myImge} color="#fff" />
      </mesh>
      {/* <Image scale={3} url="./img.jpg" position-z={0.005} position-y={-0.45} /> */}
      <Text
        textAlign="center"
        fontWeight={700}
        letterSpacing={-0.05}
        fontSize={0.35}
        position={[0, 1.6, 0.005]}
      >
        Team Building S1
      </Text>
    </group>
  );
}
