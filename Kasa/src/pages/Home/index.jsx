import background from "../../assets/backgrounds/Background-accueil.png"
import "../../style/Home/index.scss"
import data from "../../data/Annonces.json"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Lodgement from "../../components/Lodgement"

function Home() {
  return (
    <>
      <Banner background={background} title={"Chez vous, partout et ailleurs"} />
        <Lodgement type='Card' data={data} />
      <Footer position="relative" />
    </>
  );
}

export default Home; 