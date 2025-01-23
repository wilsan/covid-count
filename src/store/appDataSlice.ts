import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import covidData from "./covidData.json";

const initialState = {
  covidData,
  selectedState: "",
};

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    selectState: (state, action: PayloadAction<string>) => {
      state.selectedState = action.payload;
    },
  },
});

const { actions, reducer } = appDataSlice;

export const { selectState } = actions;

export default reducer;
