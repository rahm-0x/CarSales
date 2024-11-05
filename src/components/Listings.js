import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

// Static car data for now (replace with actual data later)
const cars = [
  {
    id: 1,
    make: 'Yamaha',
    model: 'YZF R6',
    mileage: '34,253',
    price: 14900,
    image: 'https://news.webike.net/wp-content/uploads/2020/09/200908_YZF-R1.jpg',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Click 125cc',
    mileage: 22412,
    price: 950,
    image: 'https://www.thmmotorcycles.com.ph/Materials/products/honda/scooters/329.png',
  },

  {
  id: 3,
  make: 'BMW',
  model: 'S1000RR',
  mileage: '10,000',
  price: 18500,
  image: 'https://www.bmwpap.gr/image/cache/data/product/BMW/2023/S%201000%20RR/BLACK/bmw-s-1000-rr-black-1-1-2-1400x1200.jpg',
},
  // Add more cars here...
];

const Listings = ({ filters }) => {
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    console.log('Current filters:', filters); // Debugging statement to check filters state

    const filtered = cars.filter((car) => {
      return (
        (!filters.make || car.make.toLowerCase() === filters.make.toLowerCase()) &&
        (!filters.model || car.model.toLowerCase().includes(filters.model.toLowerCase()))
      );
    });

    console.log('Filtered cars:', filtered); // Debugging statement to check filtered results
    setFilteredCars(filtered);
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
      {filteredCars.length === 0 && <p>No results found.</p>}
    </div>
  );
};

export default Listings;
