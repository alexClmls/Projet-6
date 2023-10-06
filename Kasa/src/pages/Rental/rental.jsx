import { useParams } from 'react-router-dom';
import data from '../../data/Annonces.json';
import './rental.scss'
import Footer from "../../components/Footer/footer"
import Error from "../../components/Error/error"
import "../../components/Collapse/collapse.scss"
import Lodgement from '../../components/Lodgement/lodgement';
import Header from '../../components/Header/header';

const Rental = () => {
  const { id } = useParams(); // Récupérer l'ID à partir de l'URL


  const lodgement = data.find(annonce => annonce.id === id);
  
  if (!lodgement) {
    return <Error />
  }

  return (
    <><Header /><>
    <Lodgement type='Full' data={lodgement} />
    <Footer position="relative" /></></>
  );
};

export default Rental