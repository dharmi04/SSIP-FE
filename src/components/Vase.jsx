import React from 'react'

const Vase = (props) => {
  return (
    <div className='rounded-md bg-grey2 p-4 mb-4'>
      <div className="text-center w-64 h-72">
        <img src={props.img} alt="products" className="w-52 h-52 md:mx-auto mb-2 p-4" />
        <h4 className="text-lg font-semibold">{props.name}</h4>
        <p className="text-sm p-2">{props.description}</p>
        <h4 className="text-accent mt-2 p-2">${props.price}</h4>
      </div>
    </div>
  )
}

export default Vase
