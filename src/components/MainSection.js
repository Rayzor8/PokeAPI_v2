import React from 'react';

const MainSection = ({ upperCaseFirstLetter, pokemon, isPokemonChosen }) => {
   return (
      <main className="grid place-content-center">
         {isPokemonChosen ? (
            <div className="flex gap-4 flex-col justify-center items-center my-16 p-8 bg-yellow-400 text-gray-900 rounded-lg max-w-4xl">
               <img src={pokemon.image} alt="pokemon" className="w-36 h-36" />
               <div className="flex gap-2 flex-col justify-start text-2xl font-bold font-mono">
                  <h1 className="text-4xl text-center">
                     {upperCaseFirstLetter(pokemon.name)}
                  </h1>
                  <span className="mx-auto mb-4 bg-gray-900 w-max text-yellow-400 px-2 rounded-lg  italic text-xs tracking-wider">
                     {upperCaseFirstLetter(pokemon.type)}
                  </span>
                  <p>HP : {pokemon.hp}</p>
                  <p>Attack : {pokemon.attack}</p>
                  <p>Defense : {pokemon.defense}</p>
                  <p>Speed : {pokemon.speed}</p>
               </div>
            </div>
         ) : (
            <h1>Please Input value</h1>
         )}
      </main>
   );
};

export default MainSection;
