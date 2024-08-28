export default function Planet() {
  return (
    <mesh scale={1.25} position={[-5, 0, -10]}>
      <sphereGeometry />
      <meshStandardMaterial color={"#ff4200"} />
    </mesh>
  );
}
