import  {useState, useEffect} from 'react'
import './CardsList.css'
import Cards from './Cards'
import CardDetail  from './CardDetail'
import '../debug.css'

const CardsList = ({gender,species,homeworld}) => {
    const [data, setData] = useState([]);
    const [isOk, setIsOk] = useState(false);
    const[keyCard, setKeyCard]= useState(0);
    
    // const gender="female"
    // const hairColor="brown"
    // const gender="female";
    // const hairColor= "hairColor";

    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => setData(res))
        
    }, [])

   
   
    // data.filter(element => element.gender == 'female').map(elm => console.log(elm))

    const callCardDetail= (id)=>{
        setKeyCard(id);
        console.log(id)
         setIsOk(true);
    }
    const onClikCard = (test)=>{
        console.log(test)
        // setKeyCard(elm.id)
    }


 let count=0;
    return (
        <div>  
            <section>
            <h1>Cards list</h1>

           
           {!isOk && 
            <div className="grid-container cards">
                {data.filter(element => element.gender ==gender && element.species ==species).map(elm => {
                  return(   
                     <div key={elm.id} >                  
                        <Cards  name={elm.name} gender={elm.gender} img={elm.image} eye={elm.gender}  species={elm.species} />
                        <button onClick={()=> {callCardDetail(elm.id)}}>OK</button>
                    </div>

                  )
                })}
            </div>
            }

            {isOk && 

            <CardDetail id={keyCard}/>}

            </section>
        </div>
            )
}








export default CardsList