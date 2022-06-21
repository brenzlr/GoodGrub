import { useState } from "react";
import "./RecipeCard.css";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function RecipeCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("card");

  return (
    <motion.div
      Layout
      onClick={() => {
        setIsOpen(!isOpen);
        setSize(size === "card" ? "card-expanded" : "card");
      }}
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <div className={size}>
        <div className="card">
          <div className="card__body">
            <img src={props.img} className="card__image" alt="" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">
              {props.type} - {props.duration} mins
            </p>
            <p className="card__description">{props.description}</p>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="card__description">Intructions to replicate: {props.instructions}</p>
                <p className="card__description">Ingredients needed: {props.ingredients}</p>
              </motion.div>
            )}
          </div>

          <button className="card__btn">Add to favorites</button>
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeCard;
