import { Link } from 'react-router-dom'
import "../../style/Error/index.scss";
import Footer from "../Footer"

function Error() {
    return (
      <><div id="error-container">
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link id='errorBack' to="/">Retourner sur la page d'accueil</Link>
      </div><Footer position="absolute"/></>
    )
  }
  
  export default Error