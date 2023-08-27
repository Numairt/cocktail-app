import React from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { Suspense } from "react";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Suspense>
        <CocktailList />
      </Suspense>
    </main>
  );
};

export default Home;
