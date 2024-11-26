import React from "react";
import { CDN_URL } from "../utils/constants";

const MovieCard = ({ imageUrl }) => {
  if (!imageUrl) return;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="movie-card" src={CDN_URL + imageUrl} />
    </div>
  );
};

export default MovieCard;
