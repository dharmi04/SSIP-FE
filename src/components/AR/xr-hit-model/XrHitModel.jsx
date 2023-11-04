import React, { useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import { Interactive, useHitTest, useXR } from "@react-three/xr"
import { Model } from "./Model"
import { useThree } from "@react-three/fiber"

export const XrHitModel = () => {
  const reticleRef = useRef()

  const [models, setModels] = useState([])

  const { isPresenting } = useXR()

  // useThree((camera) => {
  //   if (isPresenting) {
  //     camera.position.z = 3
  //   }
  // })

  useHitTest((hitMatrix, hit) => {
    // use hitMatrix to position any object on the real life surface
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion, // rotation
      reticleRef.current.scale
    )
    reticleRef.current.rotation.set = (-Math.PI / 2, 0, 0)
  })

  function placeModel(e) {
    // console.log(e)
    let position = e.intersection.object.position.clone()
    let id = Date.now()

    setModels([{ position, id }])
  }

  return (
    <>
      <OrbitControls />
      <ambientLight />

      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model key={id} position={position} />
        })}

      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Model />}
    </>
  )
}
