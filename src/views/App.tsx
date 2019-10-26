import React from "react";
import SearchBar from "../components/organisms/SearchBar";
import MovieBox from "../components/organisms/MovieBox";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <MovieBox />
    </div>
  );
};

export default App;
