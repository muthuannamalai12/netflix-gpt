import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMoviesHook from "../hooks/usePopularMovies";
import useTopRatedMoviesHook from "../hooks/useTopRatedMovies";
import useUpcomingMoviesHook from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingHook();
  usePopularMoviesHook();
  useTopRatedMoviesHook();
  useUpcomingMoviesHook();
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
