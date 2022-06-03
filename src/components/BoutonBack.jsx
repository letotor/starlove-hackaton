import React from 'react'
import './BoutonBack.css'


const BoutonBack = ({name="Back" ,  onClick}) => {
  return (
            <>
                <button onClick={onClick}className="button-back" href="/"> {name}</button>  
            </>


  )
}

export default BoutonBack