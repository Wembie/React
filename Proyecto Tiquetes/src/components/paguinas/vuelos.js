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

export default function Vuelos() {
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
              <Typography variant="h1">VUELOS</Typography>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 70, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen30}
                alt="aveWiiiiiiii"
                style={{ width: 400, height: 250 }}
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
              <h2>De Bogotá C.D. a Paris Francia</h2>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 0, height: 30 }}
              />
            </td>
          </tr>
        </table>
      </center>
      <center>
        <table border="0px">
          <tr>
            <td>
              <Button>
                Comprar <ShoppingCartIcon />
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="webima"
                style={{ width: 50, height: 50 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <h3>WemBianMar</h3>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Salida</td>
                </tr>
                <tr>
                  <td>3:00 am</td>
                </tr>
              </table>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Llegada</td>
                </tr>
                <tr>
                  <td>2:50 pm</td>
                </tr>
              </table>
            </td>

            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>2 escalas</td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>$7.200.300</td>
          </tr>
          <tr>
            <img
              src={principal.imagen2}
              alt="linea"
              style={{ width: 0, height: 10 }}
            />
          </tr>
          <tr>
            <td>
              <Button>
                Comprar <ShoppingCartIcon />
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="webima"
                style={{ width: 50, height: 50 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <h3>WemBianMar</h3>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Salida</td>
                </tr>
                <tr>
                  <td>10:00 am</td>
                </tr>
              </table>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Llegada</td>
                </tr>
                <tr>
                  <td>9:50 pm</td>
                </tr>
              </table>
            </td>

            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>1 escalas</td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>$8.999.990</td>
          </tr>
          <tr>
            <img
              src={principal.imagen2}
              alt="linea"
              style={{ width: 0, height: 10 }}
            />
          </tr>
          <tr>
            <td>
              <Button>
                Comprar <ShoppingCartIcon />
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="webima"
                style={{ width: 50, height: 50 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <h3>WemBianMar</h3>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Salida</td>
                </tr>
                <tr>
                  <td>5:00 pm</td>
                </tr>
              </table>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Llegada</td>
                </tr>
                <tr>
                  <td>4:50 pm</td>
                </tr>
              </table>
            </td>

            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>1 escalas</td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>$9.499.990</td>
          </tr>
          <tr>
            <img
              src={principal.imagen2}
              alt="linea"
              style={{ width: 0, height: 10 }}
            />
          </tr>
          <tr>
            <td>
              <Button>
                Comprar <ShoppingCartIcon />
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen32}
                alt="webima"
                style={{ width: 50, height: 50 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <h3>Avianca</h3>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Salida</td>
                </tr>
                <tr>
                  <td>1:00 am</td>
                </tr>
              </table>
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>Llegada</td>
                </tr>
                <tr>
                  <td>12:50 pm</td>
                </tr>
              </table>
            </td>

            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>4 escalas</td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 20, height: 5 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen31}
                alt="linea"
                style={{ width: 10, height: 0 }}
              />
            </td>
            <td>$19.999.990</td>
          </tr>
          <tr>
            <img
              src={principal.imagen2}
              alt="linea"
              style={{ width: 0, height: 10 }}
            />
          </tr>
        </table>
      </center>

      <center></center>
      <img
        src={principal.imagen2}
        alt="linea"
        style={{ width: 1800, height: 10 }}
      />
    </div>
  );
}
