import React from 'react'
import explore1 from '../assets/Explore-1.png'
import explore2 from '../assets/Explore-2.png'
import explore3 from '../assets/Explore-3.png'
// import explore from '../assets/Explore.png'

const Explore = () => {
  return (
    <div className=''>
      <div className='bg-primary'>
      <p className='text-white font-bold text-5xl text-center items-center font-serif pt-10 bg-primary'>KalaSangam</p>
        <div className='flex flex-row space-x-4 items-baseline mt-15'>
            <img src={explore2} alt="pot"  className='flex w-[87px] h-[400px]'/>
            <img src={explore1} alt="design" className='flex w-[200px] h-[325px]' />
            <img src={explore3} alt="pot" className='flex w-[87px] h-[400px]' />
        </div>
      </div>
      <div className=' items-center justify-center'>
        <p className='text-black font-extrabold text-5xl font-serif text-center mt-10'>Find the Best Collection</p>
        <p className='text-black font-medium text-2xl font-serif text-center mt-5'>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
      </div>
      <div class="flex items-center justify-center">
  <a href="/home" class="text-black bg-accent w-32 h-12 p-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black mt-5">Explore</a>
</div>

    </div>
  )
}

export default Explore
