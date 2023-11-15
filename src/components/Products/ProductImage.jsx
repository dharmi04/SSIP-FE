import React from "react"

export const ProductImage = ({ src, alt }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="mx-auto block mb-4 h-72 mt-6 rounded-md"
      />
    </>
  )
}
