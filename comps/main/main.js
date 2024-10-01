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

// Simple Navbar Component without Bootstrap
const Navbar = () => {
  return html`
    <nav style="background-color: darkgreen; padding: 10px;">
      <ul
        style="list-style-type: none; margin: 0; padding: 0; overflow: hidden;"
      >
        <!-- Home link in the navbar -->
        <li style="float: left; margin-right: 20px;">
          <a
            href="/"
            style="color: white; text-decoration: none; padding: 10px 15px; display: inline-block;"
            >Home</a
          >
        </li>
        <!-- Cost link in the navbar -->
        <li style="float: left; margin-right: 20px;">
          <a
            href="/cost"
            style="color: white; text-decoration: none; padding: 10px 15px; display: inline-block;"
            >Cost</a
          >
        </li>
        <!-- Species link in the navbar -->
        <li style="float: left; margin-right: 20px;">
          <a
            href="/species"
            style="color: white; text-decoration: none; padding: 10px 15px; display: inline-block;"
            >Species</a
          >
        </li>
        <!-- Price link in the navbar -->
        <li style="float: left;">
          <a
            href="/price"
            style="color: white; text-decoration: none; padding: 10px 15px; display: inline-block;"
            >Price</a
          >
        </li>
      </ul>
    </nav>
  `;
};

const Main = () => {
  const [users, setUsers] = useState([]); // State to store the user data
  const [cost, setCost] = useState(null); // State to hold the generated cost
  const [species, setSpecies] = useState(null); // State to hold

  // useEffect to fetch users data on component mount
  useEffect(() => {
    // Fetches all users and sets the users state
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return html`
    <div>
      <!-- Include the simple HTML Navbar at the top -->
      <${Navbar} />

      <!-- Main heading for the page -->
      <h1>Super cute animal json display</h1>

      <!-- Display the list of users (pets) -->
      <${MainList} users=${users} />

      <!-- Heading for the form section -->
      <h3>Submit A New Pet Into The Database!</h3>

      <!-- Form component for adding new pet data -->
      <${Form} />

      <!-- Section to display generated cost for a pet -->
      <h3>This is how much the cost is: ${cost || "Click to Generate"}</h3>

      <!-- randomCost component to generate and set cost value -->
      <${randomCost} onCostGenerated=${setCost} />

      <!-- Section to display recommended species -->
      <h3>Recommended species: ${species || "Click to Get Recommendation"}</h3>

      <!-- randomSpecies component to generate and set species recommendation -->
      <${randomSpecies} onSpeciesRecommended=${setSpecies} />
    </div>
  `;
};

export default Main;
