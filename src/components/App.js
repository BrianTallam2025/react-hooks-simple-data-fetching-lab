import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true); // Ensure 'loading' is true initially

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Update state with the fetched image URL
        setLoading(false); // Set 'loading' to false once the fetch completes
      })
      .catch((error) => console.error("Error fetching dog image:", error)); // Handle fetch errors
  }, []);

  return (
    <div>
      {loading ? ( // Show "Loading..." until the image is 
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;