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
            marker: {
              colors: [
                "rgb(65, 223, 65)",
                "rgb(32, 179, 223)",
                "rgb(204, 33, 33)",
              ],
            },
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
