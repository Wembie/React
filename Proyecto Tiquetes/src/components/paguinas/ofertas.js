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

export default function Ofertas() {
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
                alt="espacio"
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
              <Button>
                <table border="0px">
                  <tr>
                    <td>
                      <img
                        src={principal.imagen8}
                        alt="paris"
                        style={{ width: 300, height: 300 }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h2>Bogotá-Paris</h2>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Hotel 4 estrellas 4 noches y 5 dias</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Precio $8.999.990 c/u</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
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
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 70, height: 0 }}
              />
            </td>
            <td>
              <Button>
                <table border="0px">
                  <tr>
                    <td>
                      <img
                        src={principal.imagen9}
                        alt="roma"
                        style={{ width: 300, height: 300 }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h2>Bogotá-Roma</h2>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Hotel 3 estrellas 4 noches y 5 dias</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Precio $6.999.990 c/u</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <img
                          src={principal.imagen12}
                          alt="30%"
                          style={{ width: 100, height: 50 }}
                        />
                      </center>
                    </td>
                  </tr>
                </table>
              </Button>
            </td>
            <td>
              <img
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 70, height: 0 }}
              />
            </td>
            <td>
              <Button>
                <table border="0px">
                  <tr>
                    <td>
                      <img
                        src={principal.imagen10}
                        alt="dubai"
                        style={{ width: 300, height: 300 }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h2>Bogotá-Dubai</h2>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Hotel 7 estrellas 4 noches y 5 dias</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <h4>Precio $28.999.990 c/u</h4>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <img
                          src={principal.imagen11}
                          alt="20%"
                          style={{ width: 100, height: 50 }}
                        />
                      </center>
                    </td>
                  </tr>
                </table>
              </Button>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
