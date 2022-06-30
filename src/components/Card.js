import Star from '../images/star.png';
import katieZaferes from '../images/katieZaferes.png';
import mountainBike from '../images/mountainBike.png';
import weddingPhotography from '../images/weddingPhotography.png';
const Card = ({ id, title, price, stats: { rating, reviewCount }, location, openSpots }) => {
  let badgeText;
  if (openSpots === 0) badgeText = 'sold out';
  else if (location === 'Online') badgeText = 'online';
  return (
    <div className="card">
      <div className="card--img">
        <img
          src={id === 1 ? katieZaferes : id === 2 ? mountainBike : weddingPhotography}
          alt="Card"
        />
        {badgeText && <span className="card--badge">{badgeText}</span>}
      </div>

      <div className="card--stats">
        <img src={Star} alt="rate" />
        <span>{rating}</span>
        <span className="text-black-50">({reviewCount})</span>
        <span className="dot ms-1"></span>
        <span className="text-black-50">{location}</span>
      </div>

      <p className="text-secondary">{title}</p>
      <p className="">
        <span className="fw-bold">From {price}$ </span>/ person
      </p>
    </div>
  );
};

export default Card;
