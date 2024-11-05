import React, { useState } from 'react';
import Listings from './components/Listings';
import Filters from './components/Filters';

function App() {
  const [filters, setFilters] = useState({ make: '', model: '' });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div className="App flex">
      {/* Sidebar for Filters on larger screens */}
      <div className="hidden md:block w-64">
        <Filters onFilterChange={handleFilterChange} />
      </div>

      <div className="flex-grow">
        {/* Filters (hamburger menu) on mobile */}
        <div className="px-4 py-6">
          <div className="md:hidden">
            <Filters onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* Listings */}
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Best Deals</h2>
          <Listings filters={filters} />
        </div>
      </div>
    </div>
  );
}

export default App;
