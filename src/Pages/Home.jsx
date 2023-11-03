import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import search from '../assets/search.svg';
import Pots from '../components/Pots';
import Decorative from '../components/Decorative.jsx'
import Vase from '../components/Vase.jsx'
import Popular from '../components/Popular';
import product from '../assets/product1.jpeg'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <div>
      <div className="bg-primary rounded-3xl">
        <div>
          <NavBar />
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-white font-serif text-3xl justify-center text-center">
            Discover your cherished handmade decorations
          </p>
        </div>
        <div className="relative mt-4 flex justify-center">
          <span className="bg-grey1 pt-2 pl-2">
            <img src={search} alt="search" />
          </span>
          <span>
            <input
              type="text"
              placeholder="Search Here"
              className="pl-10 pr-4 py-2 bg-grey1 rounded-sm w-80 text-lg font-mono"
            />
          </span>
        </div>

        {/* buttons */}
        <div className="flex flex-row text-white space-x-4 justify-center items-center mt-5 text-xl ">
          <button
            className={`rounded-md w-auto text-lg p-2 h-10 border-white ${selectedCategory === 'Decorative' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('Decorative')}
          >
            Decorative
          </button>
          <button
            className={`rounded-md w-auto text-lg p-2 h-10 border-white ${selectedCategory === 'Vase' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('Vase')}
          >
            Vase
          </button>
          <button
            className={`rounded-md w-auto text-lg p-2 h-10 border-white ${selectedCategory === 'Pots' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('Pots')}
          >
            Pots
          </button>
        </div>
      </div>
      <div className='flex flex-row space-x-7 font-serif text-justify p-5'>
        <p className='flex text-black font-bold flex-grow text-xl'>{selectedCategory}</p>
        <a href="/productpage" className='flex text-grey1 font-semibold text-xl'>View More</a>
      </div>


      {/* components */}
      <div>
        {selectedCategory === '' && (
          <div className="flex flex-row space-x-4 items-center justify-center mt-10 overflow-x-auto">
            <Popular img={product} name="popular11" desc="hrfhsjm" price="324" />
            <Popular img={product} name="popular2" desc="hrfhsjm" price="3240" />
            <Popular img={product} name="popular3" desc="hrfhsjm" price="3241" />
          </div>
        )}
        {selectedCategory === 'Decorative' && (
          <div className="flex flex-row space-x-4 items-center justify-center mt-10 overflow-x-auto">
            <Decorative img={product} name="dec1" desc="hrfhsjm" price="324" />
            <Decorative img={product} name="dec2" desc="hrfhsjm" price="3240" />
            <Decorative img={product} name="dec3" desc="hrfhsjm" price="3241" />
            <Decorative img={product} name="dec3" desc="hrfhsjm" price="3241" />
            <Decorative img={product} name="dec3" desc="hrfhsjm" price="3241" />
            <Decorative img={product} name="dec3" desc="hrfhsjm" price="3241" />
          </div>
        )}
        {selectedCategory === 'Vase' && (
          <div className="flex flex-row space-x-4 items-center justify-center mt-10 overflow-x-auto">
            <Vase img={product} name="vase1" desc="hrfhsjm" price="324" />
            <Vase img={product} name="vase2" desc="hrfhsjm" price="3240" />
            <Vase img={product} name="vase3" desc="hrfhsjm" price="3241" />
            <Vase img={product} name="vase3" desc="hrfhsjm" price="3241" />
            <Vase img={product} name="vase3" desc="hrfhsjm" price="3241" />
          </div>
        )}
        {selectedCategory === 'Pots' && (
          <div className="flex flex-row space-x-4 items-center justify-center mt-10 overflow-x-auto">
            <Pots img={product} name="pot1" desc="hrfhsjm" price="324" />
            <Pots img={product} name="pot2" desc="hrfhsjm" price="3240" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
            <Pots img={product} name="pot3" desc="hrfhsjm" price="3241" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
