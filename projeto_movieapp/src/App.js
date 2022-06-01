import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./pirate.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  //on load
  useEffect(() => {
    searchMovies("pirate");
  }, []); //empty array -> run once

  //fetch API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  //ENTER = clicar no search
  const checkForEnter = (k) => {
    if(k.key === 'Enter'){
      searchMovies(searchTerm)
    }
  }

  //Prints to screen:
  return (
    <div className="app">
      {/* HEADER */}
      <h1>PPBSE</h1>
      <h2>Pretty PirateBay Search Engine</h2>

      <div className="search"> {/*search field*/}
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={checkForEnter} //adiciona check com ENTER
        />
        <img /* search icon */
          src={SearchIcon} //NOT LOADING ON SERVER, missing /ppbse/
          alt="search PirateBay"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* BODY */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
