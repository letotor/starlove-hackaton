import React from 'react'
import Forms from "../components/Forms"
import Footer from "../components/templates/Footer"
import Header from "../components/templates/Header"
import Main from "../components/templates/Main"


const Screen3 = () => {
  return (
    <div>
        <Header />
            <Main >
               <Forms/>
            </Main>
            <Footer />
    </div>
  )
}

export default Screen3