import React, { useState } from 'react';

const carMakes = [
  'Bajaj', 'Beta', 'BMW', 'CFMoto', 'Ducati', 'Euro Keeway', 'Gilera',
  'Haojue', 'Harley', 'Harley-Davidson', 'Honda', 'Indian', 'Italjet', 
  'Jianshe', 'Kawasaki', 'KTM', 'Lifan', 'LML', 'Loncin', 'MCX', 
  'Moto Guzzi', 'Motorstar', 'Peugeot', 'PGO', 'Piaggio', 'PMR', 
  'Royal Enfield', 'Rusi', 'Sinski', 'Skygo', 'Suzuki', 'Sym', 
  'Triumph', 'TVS', 'Vespa', 'Victory', 'Yamaha', 'Zongshen'
];

const SearchBar = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${make} ${model} in ${zipCode}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        
        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-auto"
        >
          <option value="">Select Make</option>
          {carMakes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-auto"
        />

        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full md:w-auto"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-lg w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
