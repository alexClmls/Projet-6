import star from "../../assets/logos/star.png";
import starIna from "../../assets/logos/star-inactive.png";

function Rating({stars}) {
    
    const Stars = [];
    for (let i = 0; i < stars; i++) {
        Stars.push(<img src={star} key={i} className="star"/>);
    }
    for (let i = stars; i < 5; i++) {
        Stars.push(<img src={starIna} key={i} className="star"/>);
    }

    return (
        <div className="rating">{Stars}</div>
    );  
};

export default Rating;