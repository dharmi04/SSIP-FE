import React from "react"
import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const Decorative = (props) => {
  return (
    <>
      <div className="rounded-md bg-white">
        <div className="p-4 mb-4">
          <div className="text-center w-56">
            <img
              src={props.img}
              alt="products"
              className="w-56 h-52 md:mx-auto mb-2 rounded-md"
            />
            <h4 className="text-lg font-semibold">{props.name}</h4>
            <p className="text-sm p-2">{props.description}</p>
          </div>
        </div>

        <div className="flex bg-grey2 items-center justify-between px-4 py-2 rounded-tl-3xl rounded-tr-3xl shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.25)]">
          <h4 className="text-accent">Rs.{props.price}</h4>
          <div className="bg-accent rounded-full px-1 py-1">
            <Link to="/productpage/1">
              <FiChevronRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Decorative
