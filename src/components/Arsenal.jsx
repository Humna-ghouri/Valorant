// import React, { useEffect, useState } from 'react';

// const ArsenalPage = () => {
//   const [weapons, setWeapons] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     const fetchWeapons = async () => {
//       try {
//         const response = await fetch('https://api.example.com/weapons');  // Replace with your API URL
//         const data = await response.json();
//         setWeapons(data);  // Save the data in state
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchWeapons();
//   }, []);  // Empty array ensures this runs once on component mount

//   return (
//     <div className="arsenal-container">
//       {weapons.map((weapon) => (
//         <div key={weapon.id} className="weapon">
//           <img src={weapon.imageUrl} alt={weapon.name} className="weapon-img" />
//           <h3>{weapon.name}</h3>
//           <p>{weapon.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// function Arsenal() {
//   return (
//     <div>Arsenal</div>

//   )
// }

// export default Arsenal

// export default ArsenalPage;
import React, { useEffect, useState } from 'react';

const Arsenal = () => {
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        const data = await response.json();
        setCarts(data.carts); // Accessing the carts array
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      }
    };

    fetchCarts();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Carts List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Cart ID: {cart.id}
              </h2>
              <p className="text-gray-600">
                <span className="font-bold">Total Products:</span> {cart.totalProducts}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Total Price:</span> ${cart.total}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Discounted Price:</span> ${cart.discountedTotal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arsenal;
