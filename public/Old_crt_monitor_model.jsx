/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: diopieretti3d (https://sketchfab.com/diopieretti3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-crt-monitor-model-8a658b94c60140e0bbdfc78f30ac8e2f
Title: Old CRT Monitor Model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";


export function Model(props) {
  const { nodes, materials } = useGLTF("/old_crt_monitor_model.glb");
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });


  return (
    <group ref={groupRef}{...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.635]} scale={0.256}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.ONWindow}
            scale={[1.776, 1.697, 2.409]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/old_crt_monitor_model.glb"); 