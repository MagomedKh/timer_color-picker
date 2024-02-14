import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PaletteColor } from "../../types/Palette";
import { RootState } from "../store";

interface PaletteState {
   colors: PaletteColor[];
}

const initialState: PaletteState = {
   colors: [],
};

const paletteSlice = createSlice({
   name: "palette",
   initialState,
   reducers: {
      addColor: (state) => {
         const newColor: PaletteColor = { hex: "", id: crypto.randomUUID(), _isNew: true };
         state.colors.push(newColor);
      },
      editColor: (state, { payload }: PayloadAction<PaletteColor>) => {
         const color = state.colors.find((color) => color.id === payload.id);
         if (color) {
            color.hex = payload.hex;

            if (payload._isNew === false) {
               delete color._isNew;
            }
         }
      },
      deleteColor: (state, { payload: id }: PayloadAction<PaletteColor["id"]>) => {
         state.colors = state.colors.filter((color) => color.id !== id);
      },
   },
});

export const { addColor, editColor, deleteColor } = paletteSlice.actions;

export const selectColors = (state: RootState) => state.palette.colors;

export default paletteSlice.reducer;
