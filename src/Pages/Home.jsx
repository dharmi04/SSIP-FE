import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import search from '../assets/search.svg';
import Pots from '../components/Pots';
import Decorative from '../components/Decorative.jsx'
import Vase from '../components/Vase.jsx'
import Popular from '../components/Popular';


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
        <div className="flex flex-row text-white space-x-4 justify-center items-center mt-5 text-xl">
          <button
            className={`rounded-md w-auto text-lg p-1 border-white ${selectedCategory === 'decorative' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('decorative')}
          >
            Decorative
          </button>
          <button
            className={`rounded-md w-auto text-lg p-1 border-white ${selectedCategory === 'vase' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('vase')}
          >
            Vase
          </button>
          <button
            className={`rounded-md w-auto text-lg p-1 border-white ${selectedCategory === 'pots' ? 'bg-accent' : ''}`}
            onClick={() => setSelectedCategory('pots')}
          >
            Pots
          </button>
        </div>
      </div>

      {/* components */}
      {selectedCategory === 'popular' && (
        <div className="flex flex-row space-x-4 items-center justify-center mt-10">
          <Popular img="" name="popular11" desc="hrfhsjm" price="324" />
          <Popular img="" name="popular2" desc="hrfhsjm" price="3240" />
          <Popular img="" name="popular3" desc="hrfhsjm" price="3241" />
        </div>
      )}
      {selectedCategory === 'decorative' && (
        <div className="flex flex-row space-x-4 items-center justify-center mt-10">
          <Decorative img="" name="dec1" desc="hrfhsjm" price="324" />
          <Decorative img="" name="dec2" desc="hrfhsjm" price="3240" />
          <Decorative img="" name="dec3" desc="hrfhsjm" price="3241" />
        </div>
      )}

      {selectedCategory === 'vase' && (
        <div className="flex flex-row space-x-4 items-center justify-center mt-10">
          <Vase img="" name="vase1" desc="hrfhsjm" price="324" />
          <Vase img="" name="vase2" desc="hrfhsjm" price="3240" />
          <Vase img="" name="vase3" desc="hrfhsjm" price="3241" />
        </div>
      )}

      {selectedCategory === 'pots' && (
        <div className="flex flex-row space-x-4 items-center justify-center mt-10">
          <Pots img="" name="pot1" desc="hrfhsjm" price="324" />
          <Pots img="" name="pot2" desc="hrfhsjm" price="3240" />
          <Pots img="" name="pot3" desc="hrfhsjm" price="3241" />
        </div>
      )}
    </div>
  );
};

export default Home;
