import React from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Suspense } from "react"

export const Model = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/models/druid.gltf")

  return <primitive position={position} object={gltf.scene} />
}
