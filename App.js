import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Main from "./comps/main/main.js";

function App() {
  return html`<${Main} />`;
}

render(html` <${App} /> `, document.getElementById("app"));