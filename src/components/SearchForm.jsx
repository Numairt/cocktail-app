import React from "react";
import { useGlobalContext } from "../Context";
import { useRef } from "react";
import { useEffect } from "react";
const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchText(searchValue.current.value);
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
