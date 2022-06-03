import React from 'react'
import { useState, useEffect } from 'react'

import './Truelove.css'

function Truelove() {


    const [characters, setCharacters] = useState([])
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [displayLove, setDisplayLove] = useState('')

    function lesSelectes() {
        const selec1 = document.getElementById('name1-select').value
        const selec2 = document.getElementById('name2-select').value
        setName1(selec1)
        setName2(selec2)
    }

    useEffect(()=> {
        name1 && name2 && handleClick()
    },[name1, name2])



    function handleClick() {

        
        const concatLetter = name1 + name2
        function getCount(str) {
    
            let letterCount = 0
            const word = ['t','r','u','e','l','o','v','e']
            for (let char of str) {
                if(word.includes(char)){
                    letterCount ++ 
                }
            }
            return letterCount
        }

        const loveScore = getCount(concatLetter)


        if(loveScore < 1 || loveScore > 9 ){
            setDisplayLove(`Votre score d'amour est ${loveScore}, vous allez ensemble comme les mentos dans le Coka...
            Elle:  "je suis nulle en anglais mais je sais dire 'i love you", je suis nulle en mathématique mais je sais combien tu compte pour moi, je suis nulle en géographie mais je sais où est ta place...dans mon cœur" et...
            Lui: "je suis nul en anatomie, mais je sais où je vais te la mettre..."`);
        }else if (loveScore >= 4 && loveScore <= 8){
            setDisplayLove(`Votre score d'amour est ${loveScore}, vous êtes bien ensemble..."l'amour platonique est à l'amour charnel ce que l'armée de réserve est à l'armée active"`);
        }else{
            setDisplayLove(`Votre score d'amour est ${loveScore}`);
        }

    }

    useEffect(() => {
        fetch('https://miadil.github.io/starwars-api/api/all.json')
        .then((res) => res.json())
        .then((res) => setCharacters(res))
    },[])


  return (
    <>
   
            <div className='container-select'>
        

    <div className='.bg-img'>
        <p className='para-love'>"Un Jedi ne connaîtra point la colère, ni la haine, ni l'amour." Un peu rude, non? Ça donne l'impression que toute émotion, tout sentiment, même positifs, sont interdits aux Jedi. C'est loin d'être le cas...</p>
            <select id="name1-select" >
            <option value="">--Veuillez choisir une option--</option>
            {characters.map((el) => <option value={el.name}>{el.name}</option> )}
            </select>

            <select id="name2-select" >
            <option value="">--Veuillez choisir une option--</option>
            {characters.map((el) => <option value={el.name}>{el.name}</option> )}
            </select>
            
            {/* {{displayLove}>5 ? <img className="img-love"></img> : <img className="img-love" src="src/assets/images/logobb8.png"></img> } */}
         
        <button className="btn-select" onClick={lesSelectes} >Click Lover</button>
        <div className='loveDisplay'>{displayLove}</div>
        </div>
        </div>
        
    </>
  )
}

export default Truelove