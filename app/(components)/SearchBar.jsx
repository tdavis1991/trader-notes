// components/SearchBar.js

const SearchBar = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 rounded-md shadow-md flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 w-full focus:outline-none"
        />
        <button className="btn-cta">Search</button>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
