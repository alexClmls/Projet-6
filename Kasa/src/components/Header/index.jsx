import { Link } from 'react-router-dom'
import Logo from "../../assets/logos/LOGO-Header.png"
import "../../style/Header/index.scss";

function Header() {
  return (
    <div className='Header'>
      <img src={Logo}></img>
      <nav>
        <Link className='link' to="/">Accueil</Link>
        <Link className='link' to="/a-propos">A Propos</Link>
      </nav>
    </div>
    
  )
}

export default Header