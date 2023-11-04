import React from 'react'

const Popular = (props) => {
  return (
    <div className=' rounded-md bg-grey2 p-3 h-[250px] w-[200px]'>
       <img src={props.img} alt="products" />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
    </div>
  )
}

export default Popular
