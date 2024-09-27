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
  const [users, setUsers] = useState([]);
  const [cost, setCost] = useState(null); // State to hold the generated cost
  const [species, setSpecies] = useState(null); // State to hold the recommended species

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

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
