// create your App component here

import React, { useState, useEffect } from 'react';

function App() {
  // State to store the dog image URL and loading status
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch data from the API
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
