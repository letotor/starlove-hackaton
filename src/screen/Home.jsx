import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'
import Forms from '../components/Forms'

import './Home.css'
import CardsList from '../components/CardsList'
const Home = () => {
    return(

        <div className="home app-container">
            <Header className="header"/>
            <Main  className="main" >
             {/* (formsValidate) && <Forms/>  */}
               <CardsList/>
            </Main >
            <Footer className="footer"/>
        </div>
    )
}

export default Home