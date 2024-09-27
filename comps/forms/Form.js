import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import Child from "./buttonAlert.js";

// Child Component for Search Input
const SearchInput = ({ label }) => {
  return html`
    <div class="form-group">
      <label>${label}: </label>
      <input type="text" placeholder="${label}" class="search-input" />
    </div>
  `;
};

// Parent Component for Search Form
const SearchForm = () => {

  //Parent Component for submission button
  const buttonText = "Submit";

  function handleClick() {
    alert("Added new animal into database");
  }

  return html`
    <form class="search-form">
      <${SearchInput} label="Pet Name" />
      <${SearchInput} label="Pet Type" />
      <${SearchInput} label="Pet Size" />
      <${SearchInput} label="Pet Color" />

      <${Child} buttonText=${buttonText} onChildClick=${handleClick} />
    </form>
  `;
};

export default SearchForm;