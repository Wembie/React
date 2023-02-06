//Importamos las librerias

import React, { Component, useContext, useState } from "react";
import "./styles.css";

//Creamos las constantes de los temas de dichos botones a crear mas abajo
//Cada asignacion tiene su color y el backgroung definidos
//color -> color de letra
//background -> color del fondo

//Usamos export por que tenemos varias acciones y con ello se van exportando
//1x1

export const themes = {
  light: {
    color: "#555555",
    background: "#eeeeee"
  },
  dark: {
    color: "#eeeeee",
    background: "#222222"
  },
  vaporwave: {
    color: "#ffffff",
    background: "#ff71ce"
  }
};

//Creamos la constante del contexto que va hacer nuestro tema

export const ThemeContext = React.createContext({
  theme: themes.light,
  updateTheme: () => {}
});

//Creamos nuestra clase de boton
//como podemos observar en dicha clase usamos props, y esto se refiere
//a una técnica para compartir código entre componentes en React
//utilizando una propiedad cuyo valor es una función
//y invocamos al contexto

//ademas de ello hacemos que el estilo de dicho boton sea
//backgroundColor -> color del fondo
//color -> color de letra
//border -> borde
//borderRadius -> tamaño del borde

//En el return observamos que los dichos props de dicha clase

class MyButton extends Component {
  render() {
    const { theme, updateTheme } = this.context;
    const style = {
      backgroundColor: theme.background,
      color: theme.color,
      border: "1px solid",
      borderRadius: 5
    };

    const updateLightTheme = () => {
      updateTheme(themes.light);
    };

    const onClick = this.props.handleClick || updateLightTheme;

    return <button onClick={onClick} style={style} {...this.props} />;
  }
}

MyButton.contextType = ThemeContext;

//Creamos nuestra constante de boton
//como podemos observar en dicha constante no usamos props
//y hacemos uso del useContext hacia el theme context actual

//ademas de ello hacemos que el estilo de dicho boton sea
//backgroundColor -> color del fondo
//color -> color de letra
//border -> borde
//borderRadius -> tamaño del borde

//En el return observamos no usamos dichos props mencionados anteriormente
//en la clase de MyButton

const MyNewButton = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.background,
    color: theme.color,
    border: "1px solid",
    borderRadius: 5
  };

  const updateLightTheme = () => {
    updateTheme(themes.light);
  };

  const onClick = props.handleClick || updateLightTheme;

  return <button onClick={onClick} {...props} style={style} />;
};

//como observamos MyButton se esta llamando a sus propios props para saber
//dicho estado del context

//sin embargo en el MyNewButton usa directamente el theme context sin hacer ningun
//llamado a dicha clase

//Hacemos nuestro botones con su dicha accion

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  return (
    <div className="App">
      <h1>React Context</h1>
      <h2>Con componente tipo clase</h2>
      <ThemeContext.Provider
        value={{ theme: currentTheme, updateTheme: setCurrentTheme }}
      >
        <MyButton onClick={() => setCurrentTheme(themes.dark)}>
          Tema oscuro
        </MyButton>

        <MyButton onClick={() => setCurrentTheme(themes.vaporwave)}>
          Tema rosa
        </MyButton>

        <MyButton>Tema claro</MyButton>

        <hr />

        <h2>Con componente tipo función y useContext</h2>

        <MyNewButton onClick={() => setCurrentTheme(themes.dark)}>
          Tema oscuro
        </MyNewButton>

        <MyNewButton onClick={() => setCurrentTheme(themes.vaporwave)}>
          Tema rosa
        </MyNewButton>

        <MyNewButton>Tema claro</MyNewButton>

        <h2>Integrantes</h2>
        <h3>Juan Esteban Acosta Lopez</h3>
        <h3>Fabian Ernesto Ledezma Ledezma</h3>
        <h3>Maria del Mar Villaquiran</h3>
      </ThemeContext.Provider>
    </div>
  ); //oli
}
