import { Link } from 'react-router-dom';
function Card({lodgement}) {
    return (
                <Link to={`/location/${lodgement.id}`} key={lodgement.id}>
                    <div>
                        <div className="background-card" style={{ backgroundImage: `url(${lodgement.cover})` }}>
                            <div className="rect"><span>{lodgement.title}</span></div>   
                        </div> 
                    </div>  
                </Link>
    )
}
 
export default Card