// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogUrl, setDogUrl] = useState(null); //null indicates that there is no image
   
//   useEffect to fetch the dog image after the component mounts 
  useEffect(() => {
        const fetchDogImage = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogUrl(data.message);
        };

    fetchDogImage();
  }, []); //Empty dependancy so that we run our fetch only once

  return (
    <div className="App">
      {dogUrl ? (
        <img src={dogUrl} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;