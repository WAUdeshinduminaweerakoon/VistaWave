import React, { useEffect, useState } from "react";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations") // Your backend URL
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>All Destinations</h1>
      <ul>
        {destinations.map(dest => (
          <li key={dest._id}>{dest.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
