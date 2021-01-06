import './styles.css';
import { ReactComponent as Logo } from './logo.svg';

function Navbar(){
    return (
        <nav className="main-nanbar">
            <Logo />
            <a href="home" className="logo-text">Healthy Food</a>
        </nav>
    )
}

export default Navbar;