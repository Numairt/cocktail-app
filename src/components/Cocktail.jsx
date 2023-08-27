import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ image, id, name, glass, category }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{category}</p>
        <Link to={`/cocktail/${id}`} className="btn- btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
