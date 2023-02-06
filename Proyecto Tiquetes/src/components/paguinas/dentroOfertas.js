import React from "react";
import principal from "./assets/principal";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function DentroOfertas() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" className={classes.title}>
            WemBianMar
          </Button>
          <Button color="inherit">
            Ofertas
            <LocalOfferIcon />
          </Button>
          <Button color="inherit">
            Mis Viajes
            <AirplanemodeActiveIcon />
          </Button>
          <Button color="inherit">
            Ajustes
            <SettingsIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <center>
        <table border="0px">
          <tr>
            <td>
              <Typography variant="h1">OFERTAS</Typography>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 100, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen7}
                alt="mujer en avion"
                style={{ width: 450, height: 250 }}
              />
            </td>
          </tr>
        </table>
      </center>
      <img
        src={principal.imagen2}
        alt="linea"
        style={{ width: 1800, height: 10 }}
      />
      <center>
        <table border="0px">
          <tr>
            <td>
              <img
                src={principal.imagen16}
                alt="paris1"
                style={{ width: 500, height: 700 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 100, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>
                    <h2>Bogota - Paris</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>
                      Viaja a la ciudad del amor con los mejores precios!!!
                    </h4>
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td>
                    <table border="0px">
                      <tr>
                        <td>
                          <tr>
                            <td>
                              <h5>Incluye:</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>- Desayunos y almuerzos</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>- Avion con maleta mediana</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>- Recorridos por los mejores lugares</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5>- Avion primera clase</h5>
                            </td>
                          </tr>
                        </td>
                        <td>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 100, height: 0 }}
                          />
                        </td>
                        <td>
                          <center>
                            <img
                              src={principal.imagen13}
                              alt="50%"
                              style={{ width: 100, height: 50 }}
                            />
                          </center>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={principal.imagen2}
                      alt="espacio"
                      style={{ width: 100, height: 0 }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0px">
                      <tr>
                        <td>
                          <tr>
                            <td>
                              <h4>Hotel 4 estrellas 4 noches y 5 dias</h4>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h4>Precio $8.999.990 c/u</h4>
                            </td>
                          </tr>
                        </td>
                        <td>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 30, height: 0 }}
                          />
                        </td>
                        <td>
                          <Button variant="outlined">
                            <ShoppingCartIcon />
                            Compra Aqui
                          </Button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
      <img
        src={principal.imagen2}
        alt="linea"
        style={{ width: 1800, height: 10 }}
      />
      <center>
        <table border="0px">
          <tr>
            <td>
              <img
                src={principal.imagen14}
                alt="paris"
                style={{ width: 500, height: 400 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 100, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen15}
                alt="paris"
                style={{ width: 400, height: 300 }}
              />
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
