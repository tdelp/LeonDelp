import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ users }) => {
  return html`
    <div>
      <hr />
      This is the stateless child comonent with list
      <ul>
        ${users.map(
          (user) =>
            html` <li key="${user}">
              ${user.id} | ${user.size} ${user.color}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;
