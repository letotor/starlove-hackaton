import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import ChoiceForm from '../components/ChoiceForm'
import Footer from '../components/templates/Footer'
/* import CardsList from '../components/CardsList' */

import './Home.css'


const Home = () => {
    return(

        <div className="home app-container">
            <Header className="header"/>

            <Main  className="main" >
                <ChoiceForm />
                /* <CardsList /> */
            </Main >
            <Footer className="footer"/>
        </div>
    )
}

export default Home