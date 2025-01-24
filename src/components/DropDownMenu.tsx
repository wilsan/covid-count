import { useEffect, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectState } from "../store/appDataSlice";
import type { CovidDataRecord } from "../store/appDataSlice";

import "./DropDownMenu.css";

export default function DropDownMenu() {
  const dropdownMenuRef = useRef<HTMLInputElement>(null);
  const covidData = useAppSelector((state) => state.appData.covidData);
  const selectedState = useAppSelector((state) => state.appData.selectedState);
  const disptach = useAppDispatch();

  const toggleDropDown = () => {
    if (dropdownMenuRef.current)
      dropdownMenuRef.current.style.display = "block";
  };

  const handleClick = (data: CovidDataRecord) => {
    disptach(selectState(data));
    if (dropdownMenuRef.current) dropdownMenuRef.current.style.display = "none";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        dropdownMenuRef.current.style.display = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container">
      <label>Select state</label>
      <div onClick={toggleDropDown} className="dropdown-input">
        {selectedState?.loc ?? "----"}
      </div>
      <div ref={dropdownMenuRef} className="dropdown-menu">
        <ul>
          {covidData.map((item) => (
            <li key={item.loc} onClick={() => handleClick(item)}>
              {item.loc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
