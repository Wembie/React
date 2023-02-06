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
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import SettingsIcon from "@mui/icons-material/Settings";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
/*import YoutubeIcon from "@material-ui/icons/Youtube";*/
/*import InstagramIcon from "@material-ui/icons/Instragram";*/
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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

export default function PrincipalPage() {
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
        <table borde="0px">
          <tr>
            <td>
              <tr>
                <td>
                  <center>
                    <h1> ¡GRAN PROMOCIÓN PARA VIAJAR!</h1>
                    <h3>
                      {" "}
                      DESTINOS NACIONALES E INTERNACIONALES DESDE COP 70.000{" "}
                    </h3>
                    <Button color="inherit" variant="outlined">
                      Compruebalo YA
                    </Button>
                  </center>
                </td>
                <td>
                  <img
                    src={principal.imagen1}
                    alt="Mujer Viajando"
                    style={{ width: 500, height: 300 }}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <img
                    src={principal.imagen2}
                    alt="espacio"
                    style={{ width: 835, height: 0 }}
                  />
                </th>
              </tr>
            </td>
          </tr>
        </table>
        <img
          src={principal.imagen2}
          alt="linea"
          style={{ width: 1800, height: 10 }}
        />
      </center>
      <center>
        <table borde="0px">
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <table border="0px">
                      <tr>
                        <td>
                          <TextField
                            id="filled-basic"
                            label="Salida"
                            variant="filled"
                          />
                        </td>
                        <td>
                          <TextField
                            id="filled-basic"
                            label="Destino"
                            variant="filled"
                          />
                        </td>
                        <td>
                          <InputLabel id="demo-simple-select-label">
                            Adultos
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                          </Select>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 250, height: 0 }}
                          />
                        </th>
                        <th>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 250, height: 0 }}
                          />
                        </th>
                        <th>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 100, height: 0 }}
                          />
                        </th>
                        <th>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 2, height: 0 }}
                          />
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                              label="Fecha Salida"
                              inputFormat="MM/dd/yyyy"
                              value={value}
                              onChange={handleChangeFecha}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </td>
                        <td>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                              label="Fecha Regreso"
                              inputFormat="MM/dd/yyyy"
                              value={value}
                              onChange={handleChangeFecha}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </td>
                        <td>
                          <InputLabel id="demo-simple-select-label">
                            Niños
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                          </Select>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <Button color="#2196f3" variant="outlined">
                <h2>BUSCAR</h2>
                <SearchIcon />
              </Button>
            </td>
            <tr>
              <td>
                <img
                  src={principal.imagen2}
                  alt="espacio"
                  style={{ width: 50, height: 0 }}
                />
              </td>
            </tr>
            <td>
              <img
                src={principal.imagen3}
                alt="avion"
                style={{ width: 400, height: 400 }}
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
                src={principal.imagen2}
                alt="espacio"
                style={{ width: 0, height: 25 }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <h1>
                      <center>
                        <font color="#1F618D">
                          Te contamos mas de WemBianMar
                        </font>
                      </center>
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0px">
                      <tr>
                        <td>
                          <center>
                            <img
                              src={principal.imagen4}
                              alt="Mejores Actividades"
                              style={{ width: 350, height: 350 }}
                            />
                          </center>
                        </td>
                        <td>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 50, height: 0 }}
                          />
                        </td>
                        <td>
                          <center>
                            <img
                              src={principal.imagen5}
                              alt="Promocion 2x1"
                              style={{ width: 350, height: 350 }}
                            />
                          </center>
                        </td>
                      </tr>
                      <tr>
                        <center>
                          <td>
                            <h2>Estarás en las mejores actividades</h2>
                          </td>
                        </center>
                        <td>
                          <img
                            src={principal.imagen2}
                            alt="espacio"
                            style={{ width: 50, height: 0 }}
                          />
                        </td>
                        <td>
                          <h2>
                            Tendrás las mejores ofertas en nuestra empresa
                          </h2>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <tr>
                <img
                  src={principal.imagen2}
                  alt="espacio"
                  style={{ width: 50, height: 0 }}
                />
              </tr>
            </td>
            <td>
              <tr>
                <img
                  src={principal.imagen6}
                  alt="linea"
                  style={{ width: 10, height: 550 }}
                />
              </tr>
            </td>
            <td>
              <tr>
                <img
                  src={principal.imagen2}
                  alt="espacio"
                  style={{ width: 50, height: 0 }}
                />
              </tr>
            </td>
            <td>
              <table border="0px">
                <center>
                  <h2>Nuestras Redes Sociales</h2>
                </center>
                <tr>
                  <img
                    src={principal.imagen2}
                    alt="espacio"
                    style={{ width: 50, height: 0 }}
                  />
                </tr>
                <tr>
                  <FacebookIcon /> www.Facebook.com/WemBianMar
                </tr>
                <tr>
                  <TelegramIcon /> www.Telegram.com/WemBianMar
                </tr>
                <tr>
                  <TwitterIcon /> www.Twitter.com/WemBianMar
                </tr>
                <tr>
                  <WhatsAppIcon /> +57 318 7314395
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </div>
  );
}
