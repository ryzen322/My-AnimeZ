import { createSlice } from "@reduxjs/toolkit";
import { defaultValue } from "../ultils";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    player: false,
    showPlayer: null,
    playerObject: defaultValue,
    playingCard: "",
    selectedAnime: [],
    playEpisodes: null,
  },
  reducers: {
    playingTrailer: (state, action) => {
      state.playerObject = action.payload;
      state.player = true;
    },

    playingYtTrailer: (state, action) => {
      state.playerObject = action.payload;
      state.player = false;
    },
    playingCards: (state, action) => {
      state.playingCard = action.payload;
    },
    selectedAnime: (state, action) => {
      state.selectedAnime = action.payload;
    },
    playEpisodes: (state, action) => {
      state.playEpisodes = action.payload;
    },
  },
});

export const {
  playingTrailer,
  playingTrailerImage,
  playingYtTrailer,
  playingCards,
  selectedAnime,
  playEpisodes,
} = animeSlice.actions;

export default animeSlice.reducer;
