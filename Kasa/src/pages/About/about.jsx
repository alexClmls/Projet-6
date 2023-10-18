import Footer from "../../components/Footer/footer"
import background from "../../assets/backgrounds/Background-apropos.png"
import Collapse from "../../components/Collapse/collapse"
import Banner from "../../components/Banner/banner"
import "./about.scss"
import Data from "../../data/About.json"
import Header from "../../components/Header/header"

function About() {

  return (
    <><Header />
    <Banner background={background} title= {""} />
    <div className="wrapper-collapse-about" >
    {Data.map((item, index) => (
          <Collapse key={index} 
          title={item.title} 
          content={item.content} 
          className='collapse-about' 
          />
    ))}
    </div>
    
    <Footer position="relative" />
  </>
  )
}

export default About