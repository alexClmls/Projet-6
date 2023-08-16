import background from "../../assets/backgrounds/Background-accueil.png"
import "../../style/Home/index.scss"

function Home() {
  return (
    <div className="background-container">
      <div className="backgroundIMG" style={{ backgroundImage: `url(${background})` }}>
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div> 
  )
}

export default Home