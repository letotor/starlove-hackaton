import React from 'react'
import  {useState, useEffect} from 'react'
import './Cards.css'


import CardDetail  from './CardDetail'


const Cards = ({name,gender,img,species,homeworld,id,call}) => {
    const [isOk, setIsOk] = useState(false);
  // const colorFilter = (e)=>{
  //   console.log(e.target.value)
  // }

  const cardDetail = ()=>{
          
 
        //  setIsOk(true);
    console.log('card detail')
  }


  return (
     <>
        {!isOk &&
              <div className="card">
              <div className="card-header">
                  <img src={img} className="card-img  card-nofilter ">

                  </img>
                </div>
                <div className="card-body">
                  
                  {/* <select>
                    <option value="test">femme</option>
                    <option value="tests">test</option>
                  </select> */}
                  <h2 className="card-title">{name}</h2>
                  <div className='d-flex justify-content-center'>
                        <span className="card-critere">{species}</span>
                        <span className="card-critere">{gender}</span>
                        <span className="card-critere">{homeworld}</span>
                  </div>
             
                  <button className="card-button" onClick={call}>add To Love ?</button>

                  
                </div>
            </div>
        }
{/* 
         {isOk && 

            <CardDetail id={id}/>} */}
     
     </>
    
  




  )
}

export default Cards
