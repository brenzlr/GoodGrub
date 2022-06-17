import react, { useState } from "react";
import ReactDOM from "react";
import "./RecipeCard.css";
import { Rating } from "react-simple-star-rating";

export function RecipeCard(props) {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt="" />
        <h2 className="card__title">{props.title}</h2>
        <div className="card__rating">
          <Rating onClick={handleRating} ratingValue={rating} /* Available Props {props.rating}*/ />
        </div>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  );
}

export default RecipeCard;
