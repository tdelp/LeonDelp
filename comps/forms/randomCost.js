import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// Random Cost Generator Component
const RandomCost = ({ onCostGenerated }) => {
  // Function to generate random number
  const generateRandomCost = () => {
    const randomCost = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    onCostGenerated(randomCost); // Send the number back to the parent component
  };

  return html`
    <div>
      <button onClick=${generateRandomCost}>Generate Random Cost</button>
    </div>
  `;
};

export default RandomCost;
