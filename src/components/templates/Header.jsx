import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header className="header">
      <nav className="header-links">
        <Link to='/'>Home</Link>
        <Link to='/goodies'>Goodies</Link>
      </nav>
    </header>
    )
}
 export default Header