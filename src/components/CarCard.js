import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold">{car.make} {car.model}</h3>
      <p>Mileage: {car.mileage} KM</p>
      <p>Price: ₱ {car.price}</p>
      <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg">
        Request Info
      </button>
    </div>
  );
};

export default CarCard;
