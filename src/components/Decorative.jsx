import React from 'react'

const Decorative = (props) => {
  return (
    <div className=' rounded-md bg-grey2 p-3'>
      <img src={props.img} alt="products" className='' />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
    </div>
  )
}

export default Decorative
