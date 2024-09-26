import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ users }) => {
  return html`
    <div>
      <hr />
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}">
              ${user.name} | ${user.size} ${user.color} ${user.animal}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;
