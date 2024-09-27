import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

//Child Component used for button within SearchForm (located in Form.js)
export default function Child({ buttonText, onChildClick }) {
  return html`
    <div class="child">
      <button type="submit" onClick=${onChildClick}>${buttonText}</button>
    </div>
  `;
}