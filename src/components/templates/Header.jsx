import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <header className="header">
      <nav className="header-links">
        <Link to='/'>Home</Link>
        <Link to='/goodies'>Goodies</Link>
        <Link to='/screen3'>Screen</Link>
      </nav>
    </header>
    )
}
 export default Header