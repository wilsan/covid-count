import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import covidData from "./covidData.json";

export type CovidDataRecord = {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
  coordinates: [number, number];
};

type StoreState = {
  covidData: CovidDataRecord[];
  selectedState: CovidDataRecord | null;
};

const initialState = {
  covidData,
  selectedState: null,
} as StoreState;

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    selectState: (state, action: PayloadAction<CovidDataRecord>) => {
      state.selectedState = action.payload;
    },
  },
});

const { actions, reducer } = appDataSlice;

export const { selectState } = actions;

export default reducer;
