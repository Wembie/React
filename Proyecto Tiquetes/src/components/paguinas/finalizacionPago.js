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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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

export default function FinalizacionPago() {
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
              <Typography variant="h1">FINALIZACION</Typography>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 50, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen19}
                alt="dinero"
                style={{ width: 220, height: 220 }}
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
              <center>
                <h1>
                  Tu pago ha sido un exito, disfruta tu viaje y gracias por
                  preferirnos
                </h1>
              </center>
            </td>
          </tr>
          <tr>
            <td>
              <center>
                <h2>WemBianMar</h2>
              </center>
            </td>
          </tr>
        </table>
      </center>
      <img
        src={principal.imagen2}
        alt="linea"
        style={{ width: 1800, height: 10 }}
      />
      <table border="0px">
        <td>
          <img
            src={principal.imagen2}
            alt="linea"
            style={{ width: 1090, height: 0 }}
          />
        </td>
        <td>
          <Button variant="outlined">
            <h2>volver Ahora</h2>
            <ArrowForwardIcon />
          </Button>
        </td>
      </table>
    </div>
  );
}
