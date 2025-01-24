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
  const yValue = [totalCases, activeCases, recovered, deaths];

  return (
    <div className="barchart-box">
      <Plot
        data={[
          {
            type: "bar",
            x: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
            y: [totalCases, activeCases, recovered, deaths],
            text: yValue.map(String),
            textposition: "auto",
            hoverinfo: "none",
            marker: {
              color: "rgb(158,202,225)",
              opacity: 0.6,
              line: {
                color: "rgb(8,48,107)",
                width: 1.5,
              },
            },
          },
        ]}
        layout={{
          width: 400,
          height: 400,
          title: { text: "Covid Case Count" },
        }}
      />
    </div>
  );
}
