import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"

export const XrCube = () => {
  const cubeRef = useRef()

  // useFrame can only be used inside "Canvas" element. So we needed to extract that Cube into sepeate componenet

  useFrame((state) => {
    // console.log(cubeRef)
    cubeRef.current.rotation.y += 0.03
  })
  return (
    <>
      <OrbitControls />
      {/*  we need light to see the object, thus ambientLight, else mediumpurple color won't be visible */}
      <ambientLight />
      {/* Mesh is a  kind of 3D object */}
      <mesh ref={cubeRef} position-z={-5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  )
}
