import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => {
    pup.id === featPupId;
  });

  return (
    <div className="App">
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p
            key={puppy.id}
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
