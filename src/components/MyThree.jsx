import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Model } from "../../public/Old_crt_monitor_model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function MyThree() {


  return (
    <Canvas camera={{ position: [0, 2, 0.5] }}>
        <PerspectiveCamera
        makeDefault
        fov={50}
        position={[0, 1.5, 2.5]}
        rotation={[0, 0, 0]}
        />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model  />
      </Suspense>
      <Environment preset='sunset' />
    </Canvas>
  );
}
