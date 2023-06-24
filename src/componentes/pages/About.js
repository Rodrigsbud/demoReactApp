import React from "react";
import '../../App.css';
import '../pages/About.css';
import Me from '../../images/aboutme.jpeg'

function About() {
    return (
    <div className="about">
        <div 
        className="aboutTop" 
        style={{backgroundImage: `url(${Me})`}}
        ></div>
        <div className="aboutBottom">
            <h1> ABOUT ME</h1>
            <p>
                Hola!! Mi nombre es Angel Rodrigo Guaño Quishpi, pero me dicen Rodri o Rodrick, tengo
                19 años y me gusta todo el mundo de los videojuegos.
                Actualmente me encuentro estudiando la carrera de ingeniería en Software en la ESPOCH.

                Esta página web la he creado con React.js, con la finalidad de poder demostrar mi lógica
                de programación y espceialmente para que cualquier usuario que ingrese a la página pueda 
                mirar información de algunos juegos que especialmente he escogido y me gustan, para que así
                puedan los usuario disfrutar de los mismos al igual que yo.
                (Algunas palabras están en inglés porque me gusta hablar y escribir ese idioma xD)
                Espero les guste mi primera página web :D

            </p>
        </div>
    </div>
    );

}

export default About;