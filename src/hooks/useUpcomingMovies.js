import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMoviesHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMoviesList();
  }, []);

  const getUpcomingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
};

export default useUpcomingMoviesHook;
