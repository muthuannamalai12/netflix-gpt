import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
