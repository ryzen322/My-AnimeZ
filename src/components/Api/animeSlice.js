import { createSlice, current } from "@reduxjs/toolkit";
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
    favorites: JSON.parse(localStorage.getItem("favorites"))
      ? [JSON.parse(localStorage.getItem("favorites"))]
      : [],
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
    addFavorites: (state, action) => {
      const item = action.payload;

      const find = state.favorites.find((data) => data.id === item.id);
      if (!find) {
        state.favorites.push(item);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
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
  addFavorites,
} = animeSlice.actions;

export const playEp = (state) => state.anime.playEpisodes;
export const favorites = (state) => state.anime.favorites;

export default animeSlice.reducer;
