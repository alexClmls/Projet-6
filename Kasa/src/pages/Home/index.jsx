import background from "../../assets/backgrounds/Background-accueil.png"
import "../../style/Home/index.scss"

function Home() {
  return (
    <div className="background-container">
        <div className="backgroundIMG" style={{ backgroundImage: `url(${background})` }}>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </div>
    
  )
}

export default Home