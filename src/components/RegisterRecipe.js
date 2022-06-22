import React, { useRef } from "react";
import { Card, Col } from "react-bootstrap";
import "./FormStyle.css";
import { useState } from "react";
import { LoggedInContext } from "../App";
import { useNavigate } from "react-router-dom";

export function RegisterRecipe() {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const recipeNameRef = useRef();
  const recipeDurationRef = useRef();
  const recipeTypeRef = useRef();
  const recipeIngredientsRef = useRef();
  const recipeInstructionRef = useRef();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const dateRef = useRef();
  const imgUrlRef = useRef();
  const navigate = useNavigate();
  const url = process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url + "/recipes/register", {
      method: "POST",
      body: JSON.stringify({
        recipeName: recipeNameRef.current.value,
        recipeType: recipeTypeRef.current.value,
        recipeDuration: recipeDurationRef.current.value,
        recipeIngredients: recipeIngredientsRef.current.value,
        recipeInstructions: recipeInstructionRef.current.value,
        date: dateRef.current.value,
        imgUrl: imgUrlRef.current.value,
        recipeOwner: isLoggedIn, //field for current user (recipe owner)
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success ? alert("Recipe created successfully") : alert("Issue creating recipe");
        if (json.success) {
          navigate("/myRecipes");
        }
      });
  };

  return (
    <div className="container">
      <Col md={{ span: 4, offset: 4 }} className="mt-5">
        <Card>
          <h1>Register a recipe</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="control-label ml-2">
              Name
            </label>
            <input id="title" type="text" ref={recipeNameRef} className="form-control" required />
            <br></br>
            <label htmlFor="type" className="control-label ml-2">
              Type (ex.Italian, French, etc.)
            </label>
            <input id="type" type="text" ref={recipeTypeRef} className="form-control" required />
            <br></br>
            <label htmlFor="ingredients" className="control-label ml-2">
              Ingredients
            </label>
            <input
              id="ingredients"
              type="text"
              ref={recipeIngredientsRef}
              className="form-control"
              required
            />
            <br></br>
            <label htmlFor="instructions" className="control-label ml-2">
              Instructions
            </label>
            <input
              id="instructions"
              type="text"
              ref={recipeInstructionRef}
              className="form-control"
              required
            />
            <br></br>
            <label htmlFor="duration" className="control-label ml-2">
              Duration (in minutes)
            </label>
            <input
              type="number"
              id="duration"
              className="form-control"
              ref={recipeDurationRef}
              required
            />
            <br></br>
            <label htmlFor="title" className="control-label ml-2">
              Enter Image URL
            </label>
            <input id="title" type="text" ref={imgUrlRef} className="form-control" required />
            <br></br>
            <input id="date" type="text" value={date} ref={dateRef} required hidden={true} />
            <button type="submit" className="btn btn-success float-right">
              Post Recipe!
            </button>
          </form>
        </Card>
      </Col>
    </div>
  );
}

export default RegisterRecipe;
