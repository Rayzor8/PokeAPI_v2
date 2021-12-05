import React from 'react';

const SearchForm = ({ setSearchValue }) => {
   return (
      <form className="flex justify-center flex-col items-center">
         <div className="mb-6 w-full md:w-8/12">
            <label
               htmlFor="email"
               className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
               Search Here
            </label>
            <input
               onChange={(e) => setSearchValue(e.target.value)}
               type="text"
               className="outline-none focus:ring-2 focus:ring-yellow-400  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               placeholder="Search your favorite Pokemon here . ."
               required
            />
         </div>
         <button
            type="submit"
            className=" transition-all duration-150 ease-out text-gray-900 bg-green-400 hover:bg-green-500 focus:ring-2 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
         >
            Search Pokemon
         </button>
      </form>
   );
};

export default SearchForm;
