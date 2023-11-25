import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/getArtisian`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArtistData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {artistData ? (
        <div>
          <h2>Artisan Details</h2>
          <p>Name: {artistData.name}</p>
          <p>Mobile: {artistData.mobile}</p>
          <p>Age: {artistData.age}</p>
          <p>Address: {artistData.address}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
