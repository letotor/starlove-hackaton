import CardsList from '../CardsList'
import './Main.css'

const Main = (props) => {
    return (
        <div>
           <h1>Main le passe plat ici</h1>
           {props.children}
        </div>
    )
}

export default Main