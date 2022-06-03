import  {useState, useEffect} from 'react'
import './CardsList.css'
import Cards from './Cards'

const CardsList = () => {
    const [data, setData] = useState([])
 
    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => setData(res))
        
    }, [])
    data.filter(element => element.gender == 'male').map(elm => console.log(elm))

    return (
        <div>
            
            <section>
            <h1>Cards list</h1>
             <div className="grid-container cards">
                {data.filter(element => element.gender =='female').map(elm => {
                  return(                  
                        <Cards name={elm.name} gender={elm.gender} img={elm.image} eye={elm.gender}  species={elm.species}
                        />
                  )
                })}
               </div>
            </section>
            </div>
            )
}








export default CardsList