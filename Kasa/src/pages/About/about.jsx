import Footer from "../../components/Footer/footer"
import background from "../../assets/backgrounds/Background-apropos.png"
import Collapse from "../../components/Collapse/collapse"
import Banner from "../../components/Banner/banner"
import "./about.scss"
import Data from "../../data/About.json"
import { useState, useEffect } from 'react';
import Header from "../../components/Header/header"

function About() {

  // const [bannerWidth, setBannerWidth] = useState(0);

  // useEffect(() => {
  //   // Récupérer la largeur de la bannière après le rendu
  //   const bannerElement = document.querySelector('.background-container');
  //   if (bannerElement) {
  //     const width = bannerElement.offsetWidth;
  //     setBannerWidth(width);
  //   }
  // }, []);

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