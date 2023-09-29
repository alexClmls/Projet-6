import { Link } from 'react-router-dom';
function Card({location}) {
    return (
        <Link to={`/location/${location.id}`}>
            <div>
                <div className="background-card" style={{ backgroundImage: `url(${location.cover})` }}>
                    <div className="rect"><span>{location.title}</span></div>   
                </div> 
            </div>  
        </Link>
        
    )
}
 
export default Card