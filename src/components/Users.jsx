import React, { useState } from "react";

const Users = () => {
  const [userID, setUserID] = useState(""); // Input for User ID
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "RGAPI-99e21bca-0837-40f5-99e2-a5c3ce2aa22f"; // Replace with your valid API key
  const region = "asia"; // Correct region for Pakistan

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setProfileData(null);

    try {
      const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/${userID}?api_key=${API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Received non-JSON response. Check your API key or endpoint.");
      }

      const data = await response.json();
      setProfileData(data); // Store the fetched profile data
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <p className="text-2xl font-bold mb-6">Fetch Riot Player Profile</p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <label htmlFor="userID" className="block text-sm font-medium mb-2">
          User ID:
        </label>
        <input
          type="text"
          id="userID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter User ID"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium"
        >
          Fetch Profile
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {profileData && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
          <p className="text-xl font-bold">Player Profile:</p>
          <p className="mt-2">Name: {profileData.name}</p>
          <p className="mt-2">Level: {profileData.summonerLevel}</p>
          <p className="mt-2">ID: {profileData.id}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
