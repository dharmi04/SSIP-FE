import { Canvas } from "@react-three/fiber"
import React from "react"
import { XrHitModel } from "./XrHitModel"
import { ARButton, XR } from "@react-three/xr"

export const XrHitModelContainer = () => {
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
          <XrHitModel />
        </XR>
      </Canvas>
    </div>
  )
}
