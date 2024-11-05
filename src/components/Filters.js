import React, { useState } from 'react';

const carMakes = [
  'Bajaj', 'Beta', 'BMW', 'CFMoto', 'Ducati', 'Euro Keeway', 'Gilera',
  'Haojue', 'Harley', 'Harley-Davidson', 'Honda', 'Indian', 'Italjet', 
  'Jianshe', 'Kawasaki', 'KTM', 'Lifan', 'LML', 'Loncin', 'MCX', 
  'Moto Guzzi', 'Motorstar', 'Peugeot', 'PGO', 'Piaggio', 'PMR', 
  'Royal Enfield', 'Rusi', 'Sinski', 'Skygo', 'Suzuki', 'Sym', 
  'Triumph', 'TVS', 'Vespa', 'Victory', 'Yamaha', 'Zongshen'
];

const yamahaModels = [
  'YTX 125', 'Mio Sporty 115', 'Mio i 125', 'Mio Gear', 'Mio Soul i125',
  'XTZ 125', 'Mio Fazzio', 'Mio Gravis', 'PG-1', 'FZi 150', 'Sniper 155',
  'NMAX 155', 'Mio Aerox', 'YZF R15 155', 'MT-15', 'WR 155', 'XSR155',
  'YZF-R15M', 'MT-03', 'YZF R3', 'XMAX', 'MT-07', 'XSR700', 'YZF-R7',
  'Bolt 950 R', 'MT-09', 'Tenere 700', 'XSR900', 'TMAX 560', 'Tracer 9 GT',
  'Super Tenere ES', 'MT-10 SP', 'YZF R1 1000', 'YZF R6'
];


const Filters = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [zipCode, setZipCode] = useState('');

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  // Update the filters directly in the onChange handlers
  const handleMakeChange = (e) => {
    const selectedMake = e.target.value;
    setMake(selectedMake);
    setModel(''); // Clear model when make changes
    onFilterChange({ make: selectedMake, model: '' });
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
    onFilterChange({ make, model: e.target.value });
  };

  // Determine available models based on selected make
  const availableModels = make === 'Yamaha' ? yamahaModels : [];

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden p-4 text-blue-500"
        onClick={toggleFilters}
      >
        ☰ Filters
      </button>

      {/* Sidebar Filters */}
      <div
        className={`fixed md:static top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Make Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Make</h3>
            <select
              value={make}
              onChange={handleMakeChange}
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="">Select Make</option>
              {carMakes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Model Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Model</h3>
            {make === '' ? (
              <p className="text-gray-500">Select a make to see models</p>
            ) : (
              <select
                value={model}
                onChange={handleModelChange}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <option value="">Select Model</option>
                {availableModels.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Zip Code Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Zip Code</h3>
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>

          {/* Other filters */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input type="range" min="5000" max="100000" className="w-full" />
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Mileage</h3>
            <input type="range" min="1000" max="200000" className="w-full" />
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Year</h3>
            <input type="range" min="2000" max="2024" className="w-full" />
          </div>
        </div>
      </div>

      {/* Overlay for Mobile (to close sidebar when clicking outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleFilters}
        ></div>
      )}
    </>
  );
};

export default Filters;
