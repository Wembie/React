import React from "react";
import principal from "./assets/principal";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SettingsIcon from "@mui/icons-material/Settings";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Typography from "@material-ui/core/Typography";
import PasswordField from "material-ui-password-field";
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

export default function MisViajes() {
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
              <Typography variant="h1">MIS VIAJES</Typography>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="linea"
                style={{ width: 50, height: 0 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen28}
                alt="ajustes"
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
              <img
                src={principal.imagen29}
                alt="login"
                style={{ width: 300, height: 300 }}
              />
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 70, height: 0 }}
              />
            </td>
            <td>
              <table border="0px">
                <tr>
                  <td>
                    <TextField
                      id="filled-basic"
                      label="Correo"
                      variant="filled"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <PasswordField
                      hintText="Coloca mas de 8 caracteres"
                      floatingLabelText="Contraseña"
                      errorText="Tu contraseña es muy corta"
                    />
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
      <table border="0px">
        <tr>
          <td>
            <img
              src={principal.imagen2}
              alt="espacio"
              style={{ width: 1060, height: 0 }}
            />
          </td>
          <td>
            <Button variant="outlined">
              <h2>Continuar</h2>
              <ArrowForwardIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={principal.imagen2}
              alt="espacio"
              style={{ width: 1060, height: 0 }}
            />
          </td>
          <td>
            <Button>
              <h4>"Olvidaste tu Contraseña?"</h4>
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={principal.imagen2}
              alt="espacio"
              style={{ width: 1060, height: 0 }}
            />
          </td>
          <td>
            <Button>
              <h4>"Registrate aqui"</h4>
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
