import background from "../../assets/backgrounds/Background-accueil.png"
import "./home.scss"
import data from "../../data/Annonces.json"
import Footer from "../../components/Footer/footer"
import Banner from "../../components/Banner/banner"
import Lodgement from "../../components/Lodgement/lodgement"
import Header from "../../components/Header/header"

function Home() {
  return (
    <><Header />
      <Banner background={background} title={"Chez vous, partout et ailleurs"} />
        <Lodgement type='Card' data={data} />
      <Footer position="relative" />
    </>
  );
}

export default Home; 