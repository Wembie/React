import React from "react";
import principal from "./assets/principal";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
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

export default function Ajustes() {
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
              <Typography variant="h1">AJUSTES</Typography>
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
                src={principal.imagen25}
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
              <InputLabel id="demo-simple-select-label">
                <h3>Idiomas</h3>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>Español</MenuItem>
                <MenuItem value={2}>Ingles</MenuItem>
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
              <img
                src={principal.imagen26}
                alt="Col"
                style={{ width: 50, height: 50 }}
              />
              <img
                src={principal.imagen27}
                alt="Usa"
                style={{ width: 54, height: 54 }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <InputLabel id="demo-simple-select-label">
                <h3>Tamaño letra</h3>
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>16</MenuItem>
                <MenuItem value={2}>18</MenuItem>
                <MenuItem value={3}>20</MenuItem>
              </Select>
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
            style={{ width: 1030, height: 0 }}
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
