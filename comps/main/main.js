import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../servs/Users.js";
import MainList from "./mainList.js";
import Form from "../forms/Form.js";
import randomCost from "../forms/randomCost.js";
import randomSpecies from "../forms/randomSpecies.js";

const Main = () => {
  const [users, setUsers] = useState([]); // State to hold the user data
  const [cost, setCost] = useState(null); // State to hold the generated cost
  const [species, setSpecies] = useState(null); // State to hold the recommended species

  // useEffect hook to run the async getAllUsers function
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers(); // Await the async getAllUsers function
      setUsers(data); // Set the fetched user data in state
    };

    fetchUsers(); // Call the async function
  }, []); // Empty dependency array ensures this only runs once on mount

  return html`
    <div>
      <h1>Super cute animal json display</h1>
      <${MainList} users=${users} />

      <h3>Submit A New Pet Into The Database!</h3>
      <${Form} />

      <h3>This is how much the cost is: ${cost || "Click to Generate"}</h3>
      <${randomCost} onCostGenerated=${setCost} />

      <h3>Recommended species: ${species || "Click to Get Recommendation"}</h3>
      <${randomSpecies} onSpeciesRecommended=${setSpecies} />
    </div>
  `;
};

export default Main;
