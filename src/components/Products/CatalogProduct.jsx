import React from "react"

/**
 * This is component for product card. The cards are shown in All Products Page.
 */

const CatalogProduct = (props) => {
  return (
    <div className="rounded-md bg-grey2/[0.4] p-4 mb-4 w-40  md:w-56 lg:w-64 lg:h-72 font-sans">
      <div className="text-primary">
        <img
          src={props.img}
          alt="products"
          className=" w-30 h-36 md:mx-auto mb-2 md:w-40 md:h-40 lg:w-52 rounded-md"
        />
        <h4 className="text-lg font-semibold line-clamp-2  leading-6 text-black">
          {props.name}
        </h4>
        <p className="text-sm line-clamp-3 mt-2">{props.desc}</p>
        <h4 className="text-accent mt-2">Rs.{props.price}</h4>
      </div>
    </div>
  )
}

export default CatalogProduct
