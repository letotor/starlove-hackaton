import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className="card">
       <div className="card-header">
          <div className="card-img"></div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Cassette audio</h2>
          <p className="card-info">Ce son vous transportera jusqu'à la terre de Melatonia.</p>
          <p className="card-price">€199.99</p>
          <p className="card-shipp">+ €100 Frais de transport</p>
          <button className="card-button">Ajouter au panier</button>
        </div>
    </div>
  )
}

export default Cards
