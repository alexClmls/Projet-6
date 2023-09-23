import { useParams } from 'react-router-dom'; // Importez useParams
import Full from '../../components/Full/full'; // Assurez-vous que le chemin est correct
import data from '../../data/Annonces.json';
import '../../style/Rental/index.scss'
import Footer from "../../components/Footer"
const Rental = () => {
  const { id } = useParams(); // Récupérez l'ID à partir de l'URL

  // Recherchez les détails de l'appartement dans vos données
  const apartment = data.find(annonce => annonce.id === id);
  if (!apartment) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <><div>
      <Full
        id={apartment.id}
        title={apartment.title}
        pictures={apartment.pictures}
        host={apartment.host}
        location={apartment.location}
        rating={apartment.rating}
        tags={apartment.tags}
        description={apartment.description}
        equipments={apartment.equipments} />
    </div><Footer position="relative" /></>
  );
};

export default Rental