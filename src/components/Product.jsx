import React from 'react'

const Product = (props) => {
  return (
      <div className='rounded-md bg-grey2 p-4 mb-4 w-40 h-64 md:w-56 lg:w-64 lg:h-72 '>
      <div className="text-center">
        <img src={props.img} alt="products" className=" w-30 h-36 md:mx-auto mb-2 md:w-40 md:h-40 lg:w-52" />
        <h4 className="text-lg font-semibold">{props.name}</h4>
        <p className="text-sm">{props.description}</p>
        <h4 className="text-accent mt-2">${props.price}</h4>
      </div>
    </div>
  )
}

export default Product
