import React,{useState,useEffect} from 'react'
import './CardDetail.css'


const CardDetail = ({id}) => {
const [data, setData] = useState([]);
 
    useEffect(() => {
        fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
        .then((res) => res.json())
        .then((res) => setData(res))
        
    }, [])

let keyData=Object.getOwnPropertyNames(data);

keyData.map(elt=>console.log(elt))

    
  
  return (
    <div className="card-detail">
      <h1>CARD DETAIL</h1>
      <div className="card-container">
        <img src={data.image}>
        </img>
        <div class="card-items">
          {keyData.map(elt=>{
                      return <li>{elt} : {data[elt]}</li>
                  })
                    }
        </div>
          
      </div>
       
      
      
    </div>
  )
}

export default CardDetail