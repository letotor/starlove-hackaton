import React from 'react'
import './BoutonBack.css'


const BoutonBack = ({name="Back" ,className="button-back",  onClick}) => {
  return (
            <>
                <button onClick={onClick} className="button-back" href="/"> {name}</button>  
            </>


  )
}

export default BoutonBack