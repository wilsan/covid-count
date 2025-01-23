import Plot from "react-plotly.js";

import { useAppSelector } from "../store/hooks";
import type { CovidDataRecord } from "../store/appDataSlice";

import "./BarChart.css";

export default function BarChart() {
  const selectedState = useAppSelector(
    (state) => state.appData.selectedState
  ) as CovidDataRecord;

  const totalCases =
    selectedState.totalConfirmed +
    selectedState.discharged +
    selectedState.deaths;
  const activeCases = selectedState.totalConfirmed;
  const recovered = selectedState.discharged;
  const deaths = selectedState.deaths;

  return (
    <div className="barchart-box">
      <Plot
        data={[
          {
            type: "bar",
            x: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
            y: [totalCases, activeCases, recovered, deaths],
          },
        ]}
        layout={{ width: 400, height: 400 }}
      />
    </div>
  );
}
