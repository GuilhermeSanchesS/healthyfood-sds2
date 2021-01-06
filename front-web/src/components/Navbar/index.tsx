import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="main-nanbar">
            <Logo />
            <Link to="/" className="logo-text">Healthy Food</Link>
        </nav>
    )
}

export default Navbar;