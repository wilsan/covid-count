import "./styles.css";
import { useAppSelector } from "./store/hooks";

export default function App() {
  const covidData = useAppSelector((state) => state.appDate.covidData);

  return <h1>React TypeScript Webpack Starter Template</h1>;
}
