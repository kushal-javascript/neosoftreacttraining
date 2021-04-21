import { Link } from "react-router-dom";

var cardsImage = "./cake_image_card.jpg";

function Cards(props) {
  let getProductIDFunction = (event) => {
    event.preventDefault();
    props.getProductCollect(event.target.id);
  };

  return (
    <div className="card" id={props.cakeid}>
      <img
        src={props.cardsImage}
        className="card-img-top"
        alt={props.cardsName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.cardsName}</h5>
        <p className="card-text">{props.shortDetails}</p>
        <Link to={"/cake/" + props.cakeid}>
          <button className="btn btn-primary" id={props.cakeid}>
            Show More Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export function CardsObject(props) {
  return (
    <div className="card">
      <img
        src={props.cardData.cardsImage}
        className="card-img-top"
        alt={props.cardData.cardsName}
      />
      <div className="card-body">
        <h5 className="card-title">{props.cardData.cardsName}</h5>
        <p className="card-text">{props.cardData.shortDetails}</p>
        <button className="btn btn-primary">Show More Detail</button>
      </div>
    </div>
  );
}

export default Cards;
