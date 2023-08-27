import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const urlId = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  const fetchSingleCocktail = async () => {
    try {
      const response = await fetch(`${urlId}${id}`);
      const data = await response.json();
      setLoading(false);
      if (data.drinks) {
        const {
          strDrink: name,
          strAlcoholic: info,
          strDrinkThumb: image,
          strCategory: category,
          strInstructions: instructions,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          info,
          image,
          category,
          instructions,
          ingredients,
          glass,
        };
        setCocktail(newCocktail);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    setLoading(true);
    fetchSingleCocktail();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, info, image, category, instructions, ingredients, glass } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span>
              {name}
            </p>
            <p>
              <span className="drink-data">category :</span>
              {category}
            </p>
            <p>
              <span className="drink-data">info :</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass :</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions :</span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients: </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item},</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
