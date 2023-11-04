import { Canvas } from "@react-three/fiber"
import React from "react"
import { Cube } from "./Cube"

export const CubeContainer = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <Canvas>
        <Cube />
      </Canvas>
    </div>
  )
}
