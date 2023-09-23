import background from "../../assets/backgrounds/Background-accueil.png"
import "../../style/Home/index.scss"
import data from "../../data/Annonces.json"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"

function Home() {
  return (
    <>
      <Banner background={background} />
      <div id="card">
        {data.map((annonce) => (
          <Card
            key={annonce.id}
            id={annonce.id}
            cover={annonce.cover}
            title={annonce.title}
          />
        ))}
      </div>
      <Footer position="relative" />
    </>
  );
}

export default Home; 