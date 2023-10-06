function Banner({ background, title}) {
    return (
      <div className="background-container">
        <div className="backgroundIMG" style={{ backgroundImage: `url(${background})` }}>
        </div>
        <h1>{title}</h1>
      </div>
    )
  }
  
  export default Banner;
  