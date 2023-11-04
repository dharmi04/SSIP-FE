import { Canvas } from "@react-three/fiber"
import React from "react"
import { XrCube } from "./XrCube"
import { ARButton, XR } from "@react-three/xr"

export const XrCubeContainer = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <ARButton />
      <Canvas>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </div>
  )
}
