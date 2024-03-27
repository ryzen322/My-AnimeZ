import { configureStore } from "@reduxjs/toolkit";
import animeSliceReducer from "./components/Api/animeSlice";
import Api from "./components/Api/Api";

const store = configureStore({
  reducer: {
    anime: animeSliceReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaltMiddleWare) =>
    getDefaltMiddleWare({
      serializableCheck: false,
    }).concat([Api.middleware]),
  devTools: true,
});

export default store;
