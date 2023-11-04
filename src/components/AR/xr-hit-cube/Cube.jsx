import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"

export const Cube = ({ position }) => {
  const cubeRef = useRef()

  // useFrame can only be used inside "Canvas" element. So we needed to extract that Cube into sepeate componenet

  useFrame((state) => {
    // console.log(cubeRef)
    cubeRef.current.rotation.y += 0.03
  })
  return (
    <>
      {/* Mesh is a  kind of 3D object */}
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  )
}
