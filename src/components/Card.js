export default function Card(props) {
    let badgeText

    if (props.openSpots === 0) 
    {
        badgeText = "SOLD OUT"
    } 
    else if (props.location === "Online") 
    {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
         {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} className="card-img" alt="ima" />
            <div className="card-elements">
                <img src="./images/star.png" className="star-icon" alt="star"/>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}).</span>
                <span className="grey">India</span>
                </div>
                <p className="card--title" >{props.title}</p> 
                <p className="card--price"><span className="bold">From {props.price}</span> / persons</p>
            
        </div>
    )
}