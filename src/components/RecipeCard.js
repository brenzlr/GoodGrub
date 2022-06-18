import { useState } from "react";
import "./RecipeCard.css";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

export function RecipeCard(props) {
  // ---------------- Star Rating --------------------------------
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };
  // -------------------------------------------------------------
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      //<Link to={{ pathname: "/RecipeDetails", state: props }}></Link>;
      navigate("/recipeDetails", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" alt="" />
        <h2 className="card__title">{props.title}</h2>
        <div className="card__rating">
          <Rating onClick={handleRating} ratingValue={rating} /* Available Props {props.rating}*/ />
        </div>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" onClick={handleSubmit}>
        View Recipe
      </button>
    </div>
  );
}

export default RecipeCard;
