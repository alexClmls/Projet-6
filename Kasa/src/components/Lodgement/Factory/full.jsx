import Carrousel from "../../Carrousel/carrousel";
import Collapse from '../../Collapse/collapse';
import Rating from '../../Rating/rating';

function Full({lodgement}) {
  const { host } = lodgement;
  const { name: hostName, picture: hostPicture } = host;
  const [firstName, lastName] = hostName.split(' '); // Divise la chaîne en prénom et nom
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
          <Rating stars={lodgement.rating} />
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