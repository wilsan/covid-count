import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";

import { useAppSelector } from "../store/hooks";

import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map() {
  const covidData = useAppSelector((state) => state.appData.covidData);
  const selectedState = useAppSelector((state) => state.appData.selectedState);

  return (
    <div className="map-box">
      <MapContainer
        center={[21.5937, 81.9629]}
        zoom={5}
        style={{ height: 700, width: 700 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {covidData.map((item) => (
          <CircleMarker
            key={item.loc}
            center={[item.coordinates[0], item.coordinates[1]]}
            pathOptions={{ color: "red" }}
            radius={selectedState?.loc === item.loc ? 12 : 5}
          >
            <Tooltip>
              <h4 className="map-tooltip-heading">{item.loc}</h4>
              <p className="map-tooltip-content">
                <strong>Total Cases: </strong>
                {item.totalConfirmed + item.discharged + item.deaths}
              </p>
              <p className="map-tooltip-content">
                <strong>Active Cases: </strong>
                {item.totalConfirmed}
              </p>
              <p className="map-tooltip-content">
                <strong>Recovered: </strong>
                {item.discharged}
              </p>
              <p className="map-tooltip-content">
                <strong>Deaths: </strong>
                {item.deaths}
              </p>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
