import { NavLink } from 'react-router-dom';
import Logo from "../../assets/logos/LOGO-Header.png";
import LogoSmall from "../../assets/logos/LOGO-Header-small.png";
import "./header.scss";

function Header() {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className='Header'>
      <img src={isSmallScreen ? LogoSmall : Logo} alt="Logo" />
      <nav>
        <NavLink exact="true" to="/" className="link" >Accueil</NavLink>
        <NavLink exact="true" to="/a-propos" className="link">A Propos</NavLink>
      </nav>
    </div>
  )
}

export default Header;

