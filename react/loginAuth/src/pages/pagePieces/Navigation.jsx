import { Link } from 'react-router-dom';
import Logo from './logo.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfoCircle, faGamepad, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import '../../style/index.css';

export default function NavBar(){
    return (
        <header>
            <Logo/>
            <Link to="/">
                <h2><FontAwesomeIcon icon={faHouse} /><span className="noLines">&ensp;Home</span></h2>
            </Link>
            <Link to="/info">
                <h2><FontAwesomeIcon icon={faInfoCircle} /><span className="noLines">&ensp;Info</span></h2>
            </Link>
            <Link to="/games">
                <h2><FontAwesomeIcon icon={faGamepad} /><span className="noLines">&ensp;Games</span></h2>
            </Link>
            <Link to="/stats">
                <h2><FontAwesomeIcon icon={faChartColumn} /><span className="noLines">&ensp;Stats</span></h2>
            </Link>
            <Link to="/login">
                <div>login</div>
            </Link>
            
        </header>
    );
}