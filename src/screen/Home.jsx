import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'
import Forms from '../components/Forms'

import './Home.css'
const Home = () => {
    return(
        <div className="home app-container">
            <Header className="header"/>
            <Main  className="main" >
               <Forms/>
            </Main >
            <Footer className="footer"/>
        </div>
    )
}

export default Home