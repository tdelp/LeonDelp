import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllUsers } from "../../servs/Users.js";
import MainList from "./mainList.js";
import Form from "../forms/Form.js";

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return html`
    <div>
      <h1>Super cute animal json display</h1>
      <${MainList} users=${users} />

      // Website Form
      <h3>Submit A New Pet Into The Database!</h3>
      <${Form} />
    </div>
  `;
};

export default Main;
