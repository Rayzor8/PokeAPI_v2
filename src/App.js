import { useState } from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import propsTypes from 'prop-types';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
   const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

   const [searchValue, setSearchValue] = useState('');
   const [isPokemonChosen, setIsPokemonChosen] = useState(false);
   const [pokemon, setPokemon] = useState({
      name: '',
      species: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      type: '',
   });

   const getDataPokemon = async () => {
      try {
         const res = await axios.get(
            `${API_ENDPOINT}/${searchValue.toLowerCase()}`
         );
         setPokemon({
            name: searchValue || 'pidgey',
            species: res.data.species.name,
            image: res.data.sprites.front_default,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[3].base_stat,
            type: res.data.types[0].type.name,
         });
         setIsPokemonChosen(true);
      } catch (err) {
         setIsPokemonChosen(false);
      }
   };

   const upperCaseFirstLetter = (string) => {
      return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
   };

   return (
      <div className="App bg-gray-900 text-yellow-400 w-full min-h-screen px-4">
         <Header />
         {/* search form section */}
         <SearchForm
            setSearchValue={setSearchValue}
            getDataPokemon={getDataPokemon}
         />

         <MainSection
            upperCaseFirstLetter={upperCaseFirstLetter}
            pokemon={pokemon}
            isPokemonChosen={isPokemonChosen}
         />
         <Footer />
      </div>
   );
}

App.prototype = {
   setSearchValue: propsTypes.func,
   getDataPokemon: propsTypes.func,
   upperCaseFirstLetter: propsTypes.func,
   pokemon: propsTypes.object,
   isPokemonChosen: propsTypes.bool,
};

export default App;
