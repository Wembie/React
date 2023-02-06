import "./styles.css";
import PrincipalPage from "./paguinaPrincipal";
import Transaccion from "./transaccion";
import Ofertas from "./ofertas";
import IngresoDatos from "./ingresoDatos";
import FinalizacionPago from "./finalizacionPago";
import DentroOfertas from "./dentroOfertas";
import Ajustes from "./ajustes";
import MisViajes from "./misViajes";
import Vuelos from "./vuelos";

/*
 */

export default function App() {
  return (
    <div className="App">
      <PrincipalPage />
      <Transaccion />
      <Ofertas />
      <IngresoDatos />
      <FinalizacionPago />
      <DentroOfertas />
      <Ajustes />
      <MisViajes />
      <Vuelos />
    </div>
  );
}
