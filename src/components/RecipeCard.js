import React, { useRef, useState } from "react";
import "./RecipeCard.css";
import { motion } from "framer-motion";
import { LoggedInContext } from "../App";
import { useFetch } from "hooks/useFetch";

export function RecipeCard(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("card");

  const [recipeRef] = useFetch("http://localhost:3001/recipes/" + props.title, "GET");

  const handleFav = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/favorites/register", {
      method: "POST",
      body: JSON.stringify({
        currUser: isLoggedIn,
        recipe: recipeRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success ? alert("Recipe added to favorites") : alert(json.msg);
      });
  };

  return (
    <div>
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
          </div>
        </div>
      </motion.div>
      <button className="card__btn" onCLick={handleFav}>
        Add to favorites
      </button>
    </div>
  );
}

export default RecipeCard;
