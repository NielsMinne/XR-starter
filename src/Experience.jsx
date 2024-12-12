import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./environment/Lights";
import Trailer from "./components/Trailer/Trailer";
import Floor from "./components/Floor/Floor";

export default function Experience() {
  return (
    <>
      {/* Controls, Performance, Environment */}
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <Lights />
     
      {/* Scene */}
      <Trailer position={[0.4, 0, -0.6]} scale={1.2} rotation-y={Math.PI * 1.5} />
      <Floor receiveShadow position={[0, 0, 0]} />
    </>
  );
}
