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
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
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

export default function Transaccion() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(new Date("2021-09-25T21:11:54"));
  const handleChangeFecha = (newValue) => {
    setValue(newValue);
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
              <Typography variant="h1">TRANSACCION</Typography>
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
                          src={principal.imagen24}
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
                        <TextField
                          id="filled-basic"
                          label="Numero Tarjeta de Credito"
                          variant="filled"
                        />
                      </td>
                      <td>
                        <img
                          src={principal.imagen24}
                          alt="linea"
                          style={{ width: 50, height: 0 }}
                        />
                      </td>
                      <td>
                        <TextField
                          id="filled-basic"
                          label="CVC"
                          variant="filled"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={principal.imagen20}
                          alt="linea"
                          style={{ width: 30, height: 30 }}
                        />
                        <img
                          src={principal.imagen21}
                          alt="linea"
                          style={{ width: 30, height: 30 }}
                        />
                        <img
                          src={principal.imagen22}
                          alt="linea"
                          style={{ width: 30, height: 20 }}
                        />
                        <img
                          src={principal.imagen23}
                          alt="linea"
                          style={{ width: 30, height: 20 }}
                        />
                      </td>
                    </tr>
                    <img
                      src={principal.imagen24}
                      alt="linea"
                      style={{ width: 50, height: 0 }}
                    />
                    <tr></tr>
                    <tr>
                      <td>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            label="Fecha Vencimiento"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChangeFecha}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                  </td>
                  <td>
                    <img
                      src={principal.imagen24}
                      alt="linea"
                      style={{ width: 50, height: 0 }}
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
                            src={principal.imagen24}
                            alt="linea"
                            style={{ width: 350, height: 200 }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <center>
                          <td>
                            <h4>Juega ahora!!!</h4>
                          </td>
                        </center>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0px">
                      <td>
                        <InputLabel id="demo-simple-select-label">
                          <h4>Documento</h4>
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
                        </Select>
                      </td>
                      <td>
                        <img
                          src={principal.imagen24}
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
      <table border="0px">
        <td>
          <img
            src={principal.imagen2}
            alt="linea"
            style={{ width: 1090, height: 0 }}
          />
        </td>
        <td>
          <h2>$PRECIO</h2>
          <Button variant="outlined">
            <h2>Pagar Ahora</h2>
            <ArrowForwardIcon />
          </Button>
        </td>
      </table>
    </div>
  );
}
