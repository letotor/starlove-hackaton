import { useState } from 'react';
import Cardslist from './CardsList';
import './ChoiceForm.css'
    
function ChoiceForm () {
        const [gender, setGender] = useState('male');
        const [homeworld, setHomeworld] = useState('tatooine');
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
            <div className="containForm">
            {!isOk && <form className="form">
                <h2>Make your choices !</h2>
                <p>Choose gender</p>
                <select className="selector" gender={gender} onChange={ e => setGender (e.target.value)} >
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </select>
                <p>Choose planet</p>
                <select className="selector" homeworld={homeworld} onChange={e => setHomeworld(e.target.value)} >
                    <option value='tatooine'>tatooine</option>
                    <option value='naboo'>naboo</option>
                    <option value='alderaan'>alderaan</option>
                    <option value='stewjon'>stewjon</option>
                    <option value='eriadu'>eriadu</option>
                    <option value='corellia'>corellia</option>
                    <option value='bestine'>bestine</option>
                    <option value='kamino'>kamino</option>
                    <option value='trandosha'>trandosha</option>
                    <option value='mon cala'>mon cala</option>
                    <option value='chandrila'>chandrila</option>
                    <option value='socorro'>socorro</option>
                    <option value='socorro'>endor</option>
                    <option value='sullust'>sullust</option>
                    <option value='coruscant'>coruscant</option>
                    <option value='neimoidian'>neimoidian</option>
                </select>
                <p>Choose species</p>
                <select className="selector" species={species} onChange={e => setSpecies(e.target.value)} >
                    <option value='human'>human</option>
                    <option value='ewoks'>ewok</option>
                    <option value='droid'>droid</option>
                    <option value='wookiee'>wookiee</option>
                    <option value='rodian'>rodian</option>
                    <option value='hutt'>droid</option>
                    <option value="yoda's species">yoda's species</option>
                    <option value='mon calamari'>mon calamari</option>
                    <option value='sullust'>sullust</option>
                    <option value='neimoidian'>neimoidian</option>
                    
                </select>
                <p>Send your choices</p>
                <button  onClick= {check} >Send</button>
            </form>}
            {isOk && <Cardslist gender={gender} homeworld={homeworld} species={species} />}
        </div>
        )
    }
    
    
    
    
    
    
    
export default ChoiceForm;