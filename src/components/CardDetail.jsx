import React,{useState,useEffect} from 'react'
import './CardDetail.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const CardDetail = ({id}) => {
const [data, setData] = useState([]);
 
    useEffect(() => {
        fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
        .then((res) => res.json())
        .then((res) => setData(res))
        
    }, [])

let keyData=Object.getOwnPropertyNames(data).filter(elmt=>elmt!="image" && elmt!="id");

// keyData.map(elt=>console.log(elt));
let count=0;
  return (
    <div className="card-detail">
      <h1>Person detail</h1>
      <div className="card-container">
        <img src={data.image}>
        </img>
        <div className="card-items">
          {keyData.map(elt=>{ 
                      return <li key={count++}>{elt} : {data[elt]}</li>
                  }).filter(el=>el!="id")
                    }
        </div>
          
      </div>
    
  <button value="qsqs" href="/"> Back </button>  
    </div>
  )
}

export default CardDetail