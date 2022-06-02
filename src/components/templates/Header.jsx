import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo192.png'
import './Header.css'

const Header = () => {
    return (
    <header className="header">
        <img src={Logo} alt="logo" className="App-logo" />
      <nav className="header-links">
        <Link to='/'className='home-link'>Home</Link>
        <Link to='/goodies' className='goodies-link'>Goodies</Link>
      </nav>
    </header>
    )
}
 export default Header