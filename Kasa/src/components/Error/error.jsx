import { Link } from 'react-router-dom'
import "./error.scss";
import Footer from "../Footer/footer"
import Header from '../Header/header';

function Error() {
    return (
      <><Header /><><div id="error-container">
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link id='errorBack' to="/">Retourner sur la page d'accueil</Link>
      </div><Footer position="relative" /></></>
    )
  }
  
  export default Error