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

function Arsenal() {
  return (
    <div>Arsenal</div>

  )
}

export default Arsenal

// export default ArsenalPage;
