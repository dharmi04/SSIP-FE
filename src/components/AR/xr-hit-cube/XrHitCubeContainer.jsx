import { Canvas } from "@react-three/fiber"
import React from "react"
import { XrHitCube } from "./XrHitCube"
import { ARButton, XR } from "@react-three/xr"

export const XrHitCubeContainer = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
          // optionalFeatures: ["dom-overlay"],
          // domOverlay: { root: document.body }
        }}
      />
      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </div>
  )
}
