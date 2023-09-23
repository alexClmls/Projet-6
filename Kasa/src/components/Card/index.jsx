import { Link } from 'react-router-dom';
function Card({ id, title, cover }) {
    return (
        <Link to={`/location/${id}`}>
            <div>
                <div className="background-card" style={{ backgroundImage: `url(${cover})` }}>
                    <div className="rect"><span>{title}</span></div>   
                </div> 
            </div>  
        </Link>
        
    )
}
 
export default Card