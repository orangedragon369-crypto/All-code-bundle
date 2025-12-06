import { Link } from 'react-router-dom';
import Logo from './logo.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faInfoCircle, faGamepad, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import '../../style/index.css';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function NavBar(){
    function onClick(){
        const root = document.documentElement;

        const primary = getComputedStyle(root).getPropertyValue("--primary");
        const text = getComputedStyle(root).getPropertyValue("--text");
        const secondary = getComputedStyle(root).getPropertyValue("--secondary");
        const tertiary = getComputedStyle(root).getPropertyValue("--tertiary");

        root.style.setProperty("--primary", text);
        root.style.setProperty("--text", primary);

        root.style.setProperty("--secondary", tertiary);
        root.style.setProperty("--tertiary", secondary);
    }

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

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography>Light</Typography>
                <Switch value={"mode"} id='mode-btn' onChange={onClick}/>
                <Typography>Dark</Typography>
            </Stack>
        </header>
    );
}