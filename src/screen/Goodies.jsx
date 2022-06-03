
import Footer from "../components/templates/Footer"
import Header from "../components/templates/Header"
import Main from "../components/templates/Main"
import Truelove from "../components/Truelove"


const Goodies = () => {
    return(
        <div className="app-container">
            <Header />
            <Main >
                <Truelove />
            </Main>
            <Footer />
        </div>
    )
}

export default Goodies