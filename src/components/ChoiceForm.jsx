import { useState } from 'react';
import Cardslist from './CardsList';
import './ChoiceForm.css'
    
function ChoiceForm () {
        const [gender, setGender] = useState('male');
        const [homeworld, setHomeworld] = useState('terre');
        const [species, setSpecies] = useState('human');
        
        const [isOk, setIsOk] = useState(false);
        
        
        /*const handleChange = (e) => {
            setGender(e.target.gender)
            setPlanet(e.target.planet)
            e.preventDefault();
            console.log(e.target.value);
        } */
        
        const check = (e) =>{
            setIsOk(true)
            e.preventDefault();
            console.log(isOk);
        }

        
        return (
            <div>
            {!isOk && <form>
                <p>Choose gender</p>
                <select gender={gender} onChange={ e => setGender (e.target.value)} >
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
                <p>Choose planet</p>
                <select homeworld={homeworld} onChange={e => setHomeworld(e.target.value)} >
                    <option value='terre'>terre</option>
                    <option value='mars'>mars</option>
                </select>
                <p>Choose species</p>
                <select species={species} onChange={e => setSpecies(e.target.value)} >
                    <option value='human'>human</option>
                    <option value='ewoks'>ewok</option>
                </select>
                <p>Send your choices</p>
                <button onClick= {check} >Send</button>
            </form>}
            {isOk && <Cardslist gender={gender} homeworld={homeworld} species={species} />}
        </div>
        )
    }
    
    
    
    
    
    
    
export default ChoiceForm;