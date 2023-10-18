import Logo from "../../assets/logos/LOGO-Footer.png";
import "./footer.scss";

const Footer = ({ position }) => {
   const footerStyle = {
     position: position === 'relative' ? 'relative' : 'absolute',
     bottom: 0,
     width: '100%',
   };
 
   return (
     <footer className={`footer`} style={footerStyle}>
          <img src={Logo} className="LOGO-instance" />
          <p className="text-wrapper">© 2020 Kasa. All rights reserved</p>
     </footer>
   );
 };
 
 export default Footer;