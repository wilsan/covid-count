import { useAppSelector } from "./store/hooks";

import PieChart from "./components/PieChart";
import Map from "./components/Map";
import BarChart from "./components/BarChart";
import DropDownMenu from "./components/DropDownMenu";

import "./styles.css";

export default function App() {
  const selectedState = useAppSelector((state) => state.appData.selectedState);

  return (
    <div className="container">
      <div className="container-left">
        <DropDownMenu />
        {selectedState && <PieChart />}
        {selectedState && <BarChart />}
      </div>
      <Map />
    </div>
  );
}
