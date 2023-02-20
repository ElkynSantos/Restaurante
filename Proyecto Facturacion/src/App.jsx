//import LOGIN from "./Components/LOGIN/index";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import RecuperarContraseña from "./Components/RecoveryPassword/index";
import FormPass from "./Components/FormPassword/index";
import ChangePass from "./Components/ChangePassword/index";
import Email from "./Components/EmailVerification/index";
import IMPUESTO from "./Components/IMPUESTOS";
import ECBMPUESTO from "./Components/EDITAR,CREAR,BORRAR IMPUESTOS";

function App() {
  //return <LOGIN />;
  //return <RecuperarContraseña />;
  //return <FormPass/>;
  //return <ChangePass/>;
 //return  <Email/>;
  return <ECBMPUESTO/>;
}

export default App;
