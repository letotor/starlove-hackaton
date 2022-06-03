import  {useState, useEffect} from 'react'
import './CardsList.css'
import Cards from './Cards'
import CardDetail  from './CardDetail'
import '../debug.css'
import Button from'./BoutonBack';

const CardsList = ({gender,species,homeworld}) => {
    const [data, setData] = useState([]);
    const [isOk, setIsOk] = useState(false);
    const [isScreenPrec, SetIsScreenPrec] = useState(false);
    const[keyCard, setKeyCard]= useState(0);
    
    // const gender="female"
    // const hairColor="brown"
    // const gender="female";
    // const hairColor= "hairColor";
        console.log({gender,species,homeworld}) 
    useEffect(() => {
        fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => setData(res))
        
    }, [])

   
   
    // data.filter(element => element.gender == 'female').map(elm => console.log(elm))

    const callCardDetail= (id)=>{
        setKeyCard(id);

         setIsOk(true);
    }
    const onClikCard = (test)=>{
         setIsOk(false);
        console.log(test)
        // setKeyCard(elm.id)
    }


 let count=0;
    return (
        <div>  
            <section>
            {/* <h1>Cards list</h1> */}

           
           {!isOk && 
            <div className="grid-container cards">
                {data.filter(element => element.gender ==gender && element.species ==species && element.homeworld ==homeworld ).map(elm => {
                  return(   
                     <div key={elm.id} >                  
                        <Cards  name={elm.name} gender={elm.gender} img={elm.image} homeworld={elm.homeworld}  species={elm.species} id={elm.id} call= {()=> {callCardDetail(elm.id)}}/>
     
                    </div>

                  )
                })}
            </div>
            }

            {isOk && 
            <CardDetail id={keyCard}/>}
            <Button onClick={onClikCard}/>
            </section>
        </div>
            )
}








export default CardsList