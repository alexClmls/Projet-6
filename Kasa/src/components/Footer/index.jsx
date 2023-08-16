import Logo from "../../assets/logos/LOGO.png";
import "../../style/Footer/index.scss";

 function Footer() {
    return (
        <div className={`d-footer`}>
       <img src={Logo} className="LOGO-instance" />
        <p className="text-wrapper">© 2020 Kasa. All rights reserved</p>
         </div>     
    )
 }
    
export default Footer