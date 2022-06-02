import React from 'react'


const Cards = ({gender, homeworld, species}) => {
  return (
    <div>
      <p>cards</p>
      <h2>le genre {gender}</h2>
      <h2>la planete {homeworld}</h2>
      <h2>l'espece {species}</h2>
    </div>
  )
}

export default Cards
