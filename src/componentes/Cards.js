import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
import imagen1 from '../images/imagen1.png'
import imagen2 from '../images/imagen2.jpeg'
import imagen3 from '../images/imagen3.jpg'
import imagen4 from '../images/imagen4.jpg'
import imagen5 from '../images/imagen5.jpg'
import imagen6 from '../images/imagen6.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>¡Mira estos increíbles juegos! </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem 
                    src={imagen1}
                    text="VALORANT"
                    label='Acción'
                    path='https://playvalorant.com/es-es/'
                    />
                    <Carditem 
                    src={imagen2}
                    text="God of War"
                    label='Acción, Aventura'
                    path='https://store.epicgames.com/es-ES/p/god-of-war'
                    />
                    <Carditem 
                    src={imagen3}
                    text="FORNITE"
                    label='Acción, Disparos'
                    path='https://store.epicgames.com/es-ES/p/fortnite'
                    />
                </ul>
                <ul className='cards__items'>
                    <Carditem 
                    src={imagen4}
                    text="League of Legends"
                    label='Estrategia'
                    path='https://www.leagueoflegends.com/es-es/'
                    />
                    <Carditem 
                    src={imagen5}
                    text="Counter Strike"
                    label='Accion'
                    path='https://www.counter-strike.net/news'
                    />
                    <Carditem 
                    src={imagen6}
                    text="ARK: Survival Evolved"
                    label='Accion, Rol, Supervivencia'
                    path='https://store.epicgames.com/es-ES/p/ark'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards;