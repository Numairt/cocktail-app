import React, { useContext, useState, useEffect, useCallback } from "react";
import Loading from "./components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("m");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchText}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((eachDrink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            eachDrink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            category: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [searchText]);

  useEffect(() => {
    fetchDrinks();
  }, [searchText, fetchDrinks]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
