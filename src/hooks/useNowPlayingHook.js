import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMoviesList();
  }, []);

  const getMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovies(json?.results));
  };
};

export default useNowPlayingHook;
