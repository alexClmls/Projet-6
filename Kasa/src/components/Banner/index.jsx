function Banner({ background }) {
    return (
      <div className="background-container">
        <div className="backgroundIMG" style={{ backgroundImage: `url(${background})` }}>
        </div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
  
  export default Banner;
  