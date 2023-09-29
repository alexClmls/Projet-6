import Footer from "../../components/Footer"
import background from "../../assets/backgrounds/Background-apropos.png"
import Collapse from "../../components/Collapse"
import Banner from "../../components/Banner"
import "../../style/About/index.scss"
import Data from "../../data/About.json"

function About() {

  

  return (
    <>
    <Banner background={background} title= {""} />
    <div className="wrapper-collapse-about">
    {Data.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} className='collapse-about'/>
    ))}
    </div>
    
    <Footer position="relative" />
  </>
  )
}

export default About