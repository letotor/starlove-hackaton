import React from 'react'
import './Cards.css'

const Cards = ({name,gender,img,species,eyeColor}) => {
  return (
    <div className="card">
       <div className="card-header">
          <img src={img} className="card-img">

          </img>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-info">{species}</p>
          <p className="card-price">{gender}</p>
          <p className="card-shipp">{eyeColor}</p>
          <button className="card-button">Matching pour chat?</button>
        </div>
    </div>
  )
}

export default Cards
