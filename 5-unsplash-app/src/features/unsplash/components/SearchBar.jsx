/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [termino, setTermino] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(termino);
  }

  return (
    <section className="row">
      <form className="form-horizontal" onSubmit={onFormSubmit}>
        <input type="text" className="form-control" 
            onChange={ (e) => setTermino(e.target.value) }
        />
      </form>
    </section>
  );
}

export default SearchBar;
