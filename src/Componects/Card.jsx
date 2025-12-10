import React from 'react'
import "../Componects/Card.css"
import Tukaram from '../assets/Tukaram.jpg'
import S from '../assets/S.jpg'
import Shivaji from '../assets/Shivaji.jpg'
import Mauli from '../assets/Mauli.jpg'

function Card(props) {
  return (
    <div className='contains' style={props.style}>
          <p id='title'>{props.name} </p>
          <img className='img' src={props.image} alt="Maharaj" />
          <p id='desc'>Here is the simplest </p>
    </div>
  )
}

export default Card