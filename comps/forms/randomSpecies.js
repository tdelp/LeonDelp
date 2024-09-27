import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// Random Species Recommendation Component
const RandomSpecies = ({ onSpeciesRecommended }) => {
  const speciesList = ["Amphibians", "Mammals", "Reptiles"]; // Available species

  // Function to recommend a random species
  const recommendSpecies = () => {
    const randomIndex = Math.floor(Math.random() * speciesList.length); // Get random index from the list
    const randomSpecies = speciesList[randomIndex]; // Pick random species
    onSpeciesRecommended(randomSpecies); // Send the species back to the parent component
  };

  return html`
    <div>
      <button onClick=${recommendSpecies}>Get Species Recommendation</button>
    </div>
  `;
};

export default RandomSpecies;
