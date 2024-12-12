import React from "react";
import { useControls } from "leva";
import { Sky } from "@react-three/drei";

const Lights = () => {
    const { color, intensity, ambientIntensity } = useControls("Lights", {
        color: "#ffffff",
        intensity: { value: 6, min: 0, max: 10}, 
        ambientIntensity: { value: 0.5, min: 0, max: 3 },
    });

  return (
    <>
      <directionalLight castShadow position={[0, 5, 2]} intensity={intensity} color={color} />
      <ambientLight intensity={ambientIntensity} />
      <Sky sunPosition={[50, 50, 50]}  />
    </>
  );
};

export default Lights;
