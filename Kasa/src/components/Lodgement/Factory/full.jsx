import Carrousel from "../../Carrousel/carrousel";
import star from "../../../assets/logos/star.png";
import starIna from "../../../assets/logos/star-inactive.png";
import Collapse from '../../Collapse/collapse';

function Full({lodgement}) {
  const { host } = lodgement;
  const { name: hostName, picture: hostPicture } = host;
  const [firstName, lastName] = hostName.split(' '); // Divisez la chaîne en prénom et nom
  const stars = [];
  for (let i = 0; i < lodgement.rating; i++) {
    stars.push(<img src={star} key={i} className="star"/>);
  }
  for (let i = lodgement.rating; i < 5; i++) {
    stars.push(<img src={starIna} key={i} className="star"/>);
  }
  const equipementsList = lodgement.equipments.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="main">
      <div>
        <Carrousel pictures={lodgement.pictures} />  
      </div>
      <div className="wrapper-profil">
        <div className="wrapper-title-loc-tag">
          <span>{lodgement.title}</span>
          <p>{lodgement.location}</p>
          <ul>
            {lodgement.tags.map((tag, index) => (
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
      <Collapse title="Description" content={lodgement.description} className="collapse-rental"/>
      <Collapse title="Équipements" content={equipementsList} wrapperTag="ul" className="collapse-rental"/>
      </div> 
    </div>
  )
}

export default Full;