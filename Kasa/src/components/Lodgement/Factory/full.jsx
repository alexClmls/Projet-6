import Carrousel from "../../carrousel";
import star from "../../../assets/logos/star.png";
import starIna from "../../../assets/logos/star-inactive.png";
import Collapse from '../../Collapse';

function Full({location}) {
  const { host } = location;
  const { name: hostName, picture: hostPicture } = host;
  const [firstName, lastName] = hostName.split(' '); // Divisez la chaîne en prénom et nom
  const stars = [];
  for (let i = 0; i < location.rating; i++) {
    stars.push(<img src={star} key={i} className="star"/>);
  }
  for (let i = location.rating; i < 5; i++) {
    stars.push(<img src={starIna} key={i} className="star"/>);
  }
  const equipementsList = location.equipments.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="main">
      <div>
        <Carrousel pictures={location.pictures} />  
      </div>
      <div className="wrapper-profil">
        <div className="wrapper-title-loc-tag">
          <span>{location.title}</span>
          <p>{location.location}</p>
          <ul>
            {location.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="wrapper-name-pic-rate">
          <div className="wrapper-name-pic">
            <div className="wrapper-name">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </div>
            <img src={hostPicture} alt={hostName} />
          </div>
          <div className="rating">{stars}</div>
        </div>
      </div>
      <div className="wrapper-collapse">
      <Collapse title="Description" content={location.description} className="collapse-rental"/>
      <Collapse title="Équipements" content={equipementsList} wrapperTag="ul" className="collapse-rental"/>
      </div> 
    </div>
  )
}

export default Full;