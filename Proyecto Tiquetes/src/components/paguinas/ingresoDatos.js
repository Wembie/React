import React from "react";
import principal from "./assets/principal";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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

export default function IngresoDatos() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
              <Typography variant="h2">INGRESA TUS DATOS</Typography>
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
                src={principal.imagen17}
                alt="mujer en pc"
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
              <table border="0px">
                <tr>
                  <td>
                    <tr>
                      <td>
                        <TextField
                          id="filled-basic"
                          label="Nombres"
                          variant="filled"
                        />
                      </td>
                      <td>
                        <img
                          src={principal.imagen2}
                          alt="linea"
                          style={{ width: 50, height: 0 }}
                        />
                      </td>
                      <td>
                        <TextField
                          id="filled-basic"
                          label="Apellidos"
                          variant="filled"
                        />
                      </td>
                    </tr>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table border="0px">
                <tr>
                  <td>
                    <tr>
                      <td>
                        <h3>+57</h3>
                      </td>
                      <td>
                        <img
                          src={principal.imagen2}
                          alt="linea"
                          style={{ width: 10, height: 0 }}
                        />
                      </td>
                      <td>
                        <TextField
                          id="filled-basic"
                          label="Celular"
                          variant="filled"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={principal.imagen2}
                          alt="linea"
                          style={{ width: 0, height: 50 }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <InputLabel id="demo-simple-select-label">
                          <h3>Documento</h3>
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>C.C</MenuItem>
                          <MenuItem value={2}>C.E</MenuItem>
                          <MenuItem value={3}>T.I</MenuItem>
                        </Select>
                      </td>
                      <td>
                        <img
                          src={principal.imagen2}
                          alt="linea"
                          style={{ width: 50, height: 0 }}
                        />
                      </td>
                      <td>
                        <TextField
                          id="filled-basic"
                          label="Numero Documento"
                          variant="filled"
                        />
                      </td>
                    </tr>
                  </td>
                  <td>
                    <img
                      src={principal.imagen2}
                      alt="linea"
                      style={{ width: 70, height: 0 }}
                    />
                  </td>
                  <td>
                    <table border="0px">
                      <tr>
                        <center>
                          <td>
                            <h3>Anuncio:</h3>
                          </td>
                        </center>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={principal.imagen18}
                            alt="KDA"
                            style={{ width: 350, height: 200 }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <center>
                          <td>
                            <h4>Escuchala ahora!!!</h4>
                          </td>
                        </center>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <TextField
                        id="filled-basic"
                        label="Correo"
                        variant="filled"
                      />
                    </center>
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
        <td>
          <img
            src={principal.imagen2}
            alt="linea"
            style={{ width: 1070, height: 0 }}
          />
        </td>
        <td>
          <Button variant="outlined">
            <h2>Continuar</h2>
            <ArrowForwardIcon />
          </Button>
        </td>
      </table>
    </div>
  );
}
