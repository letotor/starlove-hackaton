import React from 'react'
import './Cards.css'


const Cards = ({name,gender,img,species,eyeColor}) => {

  // const colorFilter = (e)=>{
  //   console.log(e.target.value)
  // }


  return (
    <div className="card">
       <div className="card-header">
          <img src={img} className="card-img  card-filter ">

          </img>
        </div>
        <div className="card-body">
          
          {/* <select>
            <option value="test">femme</option>
            <option value="tests">test</option>
          </select> */}
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
