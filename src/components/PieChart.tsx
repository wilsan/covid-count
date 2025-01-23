import Plot from "react-plotly.js";

import { useAppSelector } from "../store/hooks";
import type { CovidDataRecord } from "../store/appDataSlice";

import "./PieChart.css";

export default function PieChart() {
  const selectedState = useAppSelector(
    (state) => state.appData.selectedState
  ) as CovidDataRecord;

  const active = selectedState.totalConfirmed;
  const recovered = selectedState.discharged;
  const deaths = selectedState.deaths;

  return (
    <div className="piechart-box">
      <Plot
        data={[
          {
            type: "pie",
            values: [active, recovered, deaths],
            labels: ["Active", "Recovered", "Death"],
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true,
          },
        ]}
        layout={{
          height: 400,
          width: 400,
          title: {
            text: `${active + recovered + deaths} Total Cases`,
          },
          showlegend: false,
        }}
      />
    </div>
  );
}
