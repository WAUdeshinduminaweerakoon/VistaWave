import { useEffect, useState } from "react";
import axios from "axios";

export default function DestinationsList() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/destinations")
      .then(res => {
        setDestinations(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching destinations:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading destinations...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {destinations.map(dest => (
        <div key={dest._id} className="border rounded p-4 shadow">
          <img src={dest.imageUrl} alt={dest.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{dest.name}</h2>
          <p className="text-gray-600">{dest.description}</p>
        </div>
      ))}
    </div>
  );
}
