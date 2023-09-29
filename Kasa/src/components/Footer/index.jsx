import Logo from "../../assets/logos/LOGO.png";
import "../../style/Footer/index.scss";

const Footer = ({ position }) => {
   const footerStyle = {
     position: position === 'relative' ? 'relative' : 'absolute',
     bottom: 0,
     width: '100%',
   };
 
   return (
     <footer>
       <div className={`d-footer`} style={footerStyle}>
            <img src={Logo} className="LOGO-instance" />
            <p className="text-wrapper">© 2020 Kasa. All rights reserved</p>
         </div> 
     </footer>
   );
 };
 
 export default Footer;