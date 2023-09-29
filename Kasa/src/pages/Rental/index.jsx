import { useParams } from 'react-router-dom';
import data from '../../data/Annonces.json';
import '../../style/Rental/index.scss'
import Footer from "../../components/Footer"
import Error from "../../components/Error"
import "../../style/Collapse/index.scss"
import Lodgement from '../../components/Lodgement';

const Rental = () => {
  const { id } = useParams(); // Récupérer l'ID à partir de l'URL


  const apartment = data.find(annonce => annonce.id === id);
  
  if (!apartment) {
    return <Error />
  }

  return (
    <><div>
      <Lodgement type='Full' data={apartment} />
    </div><Footer position="relative" /></>
  );
};

export default Rental