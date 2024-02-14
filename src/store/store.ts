import { configureStore } from "@reduxjs/toolkit";
import paletteSlice from "./slices/paletteSlice";

export const store = configureStore({
   reducer: {
      palette: paletteSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
