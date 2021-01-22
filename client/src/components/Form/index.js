import React from "react";

// This file exports the Input, TextArea, and FormBtn components
function SearchForm(props) {
  return (
    <form className="container">
      <div className="form">
        <input
          onChange={props.onChange}
          value={props.value}
          aria-label="Search"
          type="text"
          className="form-control"
          placeholder="Search for a book"
        />
        <button onClick={props.onClick} className="btn btn-success mt-3 mb-5">
        Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
