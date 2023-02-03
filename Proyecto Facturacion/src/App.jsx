import LOGIN from "./Components/LOGIN/index";
import Barralateral from "./Components/common";
import INICIO from "./Components/INICIO/index";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div>
      <Barralateral />
      <INICIO />
    </div>
  );
}

export default App;
