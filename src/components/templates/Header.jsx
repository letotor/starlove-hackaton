import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logobb8.png'

import './Header.css'


const Header = () => {
    return (
    <header className="header">        
      <nav className="header-links">

        <Link to='/' className='home-link'>Home</Link>
        <img src={Logo} alt="logo" className="App-logo" />
        <Link to='/goodies' className='goodies-link'>Goodies</Link>
        <Link to='/screen3'>Screen</Link>

      </nav>
    </header>
    )
}
 export default Header