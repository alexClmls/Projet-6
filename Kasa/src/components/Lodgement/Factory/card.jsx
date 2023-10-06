import { Link } from 'react-router-dom';
function Card({lodgements}) {
    return (
        <div id='card'>
            {lodgements.map((lodgement) => (
                <Link to={`/location/${lodgement.id}`}>
                    <div>
                        <div className="background-card" style={{ backgroundImage: `url(${lodgement.cover})` }}>
                            <div className="rect"><span>{lodgement.title}</span></div>   
                        </div> 
                    </div>  
                </Link>
            ))}
        </div>   
    )
}
 
export default Card