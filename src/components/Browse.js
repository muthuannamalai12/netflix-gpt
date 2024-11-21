import React from "react";
import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingHook();
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
