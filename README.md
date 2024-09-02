# Clickable Game

Este proyecto es un fork del juego "Clickable Game" original desarrollado por Gauris, con el objetivo de realizar algunas mejoras visuales y de usabilidad en el diseño de la interfaz.

## Mejoras Implementadas

### 1. Diseño Minimalista y Centrando el Contenido

Una de las principales mejoras realizadas fue el rediseño del CSS para lograr una apariencia más minimalista y centrada. El objetivo fue modernizar la interfaz y hacer que el juego sea visualmente más atractivo y fácil de usar.

#### Cambios Clave:

- **Centrado del Contenido**: Utilicé `flexbox` para centrar todos los elementos en el medio de la pantalla, tanto vertical como horizontalmente. Esto permite que el juego se vea más limpio y equilibrado en cualquier tamaño de pantalla.

- **Fondo Suave**: Cambié el fondo del `body` a un color gris claro (`#f0f0f0`) para reducir la fatiga visual y dar un contraste suave con el área de juego.

- **Área de Juego**: El área de juego (`#gameArea`) ahora tiene un fondo blanco con un borde sutil y una ligera sombra para darle un efecto de elevación. Esto resalta el área donde ocurre la acción sin sobrecargar la vista.

- **Cuadrado Objetivo**: Se mejoró el diseño del cuadrado rojo (`#clickTarget`) añadiendo bordes redondeados para darle un aspecto más moderno y agradable.

- **Botones e Inputs**: Los botones y campos de entrada ahora tienen un diseño uniforme con un borde suave y un efecto de hover que cambia el color de fondo, lo que mejora la experiencia del usuario.

#### Código CSS Mejorado:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
}

#gameArea {
    width: 300px;
    height: 300px;
    border: 2px solid #333;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#clickTarget {
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
    cursor: pointer;
    border-radius: 4px;
}

h1, p {
    margin: 10px 0;
    text-align: center;
}

input, button {
    margin: 10px 0;
    padding: 8px 12px;
    border: 1px solid #333;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #ddd;
}

hr {
    width: 100%;
    border: 1px solid #ddd;
}

#mensaje {
    font-weight: bold;
    color: #e74c3c;
}
