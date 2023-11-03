import React from 'react';

const Pots = (props) => {
  return (
    <div className='rounded-md bg-grey2 p-4 mb-4 w-64 h-64'>
      <div className="text-center">
        <img src={props.img} alt="products" className="w-36 h-36 md:mx-auto mb-2" />
        <h4 className="text-lg font-semibold">{props.name}</h4>
        <p className="text-sm">{props.description}</p>
        <h4 className="text-accent mt-2">${props.price}</h4>
      </div>
    </div>
  );
}

export default Pots;
