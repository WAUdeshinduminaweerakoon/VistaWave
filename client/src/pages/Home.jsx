import React, { useEffect, useState } from "react";
import { getDestinations } from "../services/api";

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
  getDestinations()
    .then(res => {
      console.log("API Response:", res);
      setDestinations(res.data); 
    })
    .catch(err => console.error("Error fetching destinations:", err));
}, []);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map(dest => (
          <div key={dest._id} className="border p-2 rounded shadow">
            <img src={dest.imageUrl} alt={dest.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{dest.name}</h2>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
