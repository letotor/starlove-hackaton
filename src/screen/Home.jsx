import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

import './Home.css'
const Home = () => {
    return(
        <div className="home">
            <Header />
            <h1>Azul home!!!</h1>
            <Main />
            <Footer />
        </div>
    )
}

export default Home