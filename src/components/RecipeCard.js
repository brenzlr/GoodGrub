import { useContext, useState } from "react";
import "./RecipeCard.css";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "App";

export function RecipeCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("card");
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <motion.div
      Layout
      onClick={() => {
        setIsOpen(!isOpen);
        setSize(size === "card" ? "card-expanded" : "card");
      }}
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <div id={theme} className={size}>
        <div className="card">
          <div className="card__body">
            <img src={props.imgUrl} className="card__image" alt="" />
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">
              {props.type} - {props.duration} mins
            </p>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="card__description">Intructions to replicate: {props.description}</p>
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
