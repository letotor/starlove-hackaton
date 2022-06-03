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
            setDisplayLove(`Your love score is ${loveScore}, you go together like coke and mentos.`);
        }else if (loveScore >= 4 && loveScore <= 8){
            setDisplayLove(`Your love score is ${loveScore}, you are alright together.`);
        }else{
            setDisplayLove(`Your love score is ${loveScore}`);
        }

    }

    useEffect(() => {
        fetch('https://miadil.github.io/starwars-api/api/all.json')
        .then((res) => res.json())
        .then((res) => setCharacters(res))
    },[])


  return (
    <>
        <div className='loveDisplay'>{displayLove}</div>
            
            <select id="name1-select" >
            <option value="">--Please choose an option--</option>
            {characters.map((el) => <option value={el.name}>{el.name}</option> )}
            </select>

            <select id="name2-select" >
            <option value="">--Please choose an option--</option>
            {characters.map((el) => <option value={el.name}>{el.name}</option> )}
            </select>
            

        <button onClick={lesSelectes} >onClick</button>
    </>
  )
}

export default Truelove