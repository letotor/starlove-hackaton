import React from 'react'
import './Cards.css'


const Cards = ({gender, homeworld, species, name, img }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={img} ></img>
      <h2> {gender}</h2>
      <h2> {homeworld}</h2>
      <h2> {species}</h2>
    </div>
  )
}

export default Cards
