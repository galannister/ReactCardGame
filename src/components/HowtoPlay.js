import '../App.css';
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";

function HowtoPlay(){
    return(
        <div className="HowtoPlay">
            <h1>Game Instructions </h1>
            <Button block size="lg" type="StartPage" ><Link to={'/'} > Home  </Link> 
            </Button>
        </div>
    );
}

export default HowtoPlay;