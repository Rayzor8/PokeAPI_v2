import { useState } from 'react';
import SearchForm from './components/SearchForm';

function App() {
   const API_ENDPOINT = 'https://pokeapi.co/api/v2';

   const [searchValue, setSearchValue] = useState('');

   console.log(searchValue)
   return (
      <div className="App bg-gray-900 text-yellow-400 w-full min-h-screen px-4">
         <div className="title">
            <h1 className="font-mono text-4xl md:text-6xl bg-yellow-400 text-gray-900 text-center pt-2 pb-8 px-4 font-bold rounded-b-xl">
               Pokemon Tracker{' '}
               <span className="text-xs bg-gray-900 w-max text-yellow-400 italic rounded-xl px-2 py-1 md:-ml-5 ">
                  By Rayzor
               </span>
            </h1>
         </div>

          <SearchForm setSearchValue={setSearchValue}/>
      </div>
   );
}

export default App;
