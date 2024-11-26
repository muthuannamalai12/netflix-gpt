import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle.js";
import VideoBackground from "./VideoBackground.js";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainComponent;
