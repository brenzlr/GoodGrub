import React, { useRef } from "react";
import { Card, Col } from "react-bootstrap";
import "./FormStyle.css";
import { useState } from "react";

export function RegisterRecipe() {
  //const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const recipeNameRef = useRef();
  const recipeDurationRef = useRef();
  const recipeTypeRef = useRef();
  const recipeIngredientsRef = useRef();
  const recipeInstructionRef = useRef();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const dateRef = useRef();
  // const ratingRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch("http://localhost:3001/recipes/register", {
      method: "POST",
      body: JSON.stringify({
        recipeName: recipeNameRef.current.value,
        recipeType: recipeTypeRef.current.value,
        recipeDuration: recipeDurationRef.current.value,
        recipeIngredients: recipeIngredientsRef.current.value,
        recipeInstructions: recipeInstructionRef.current.value,
        date: dateRef.current.value,

        // rating: recipeRatingRef.current.value, //needs to take from the component
        //picture, gotta see how to do this
        // file: fileRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        json.success ? alert("Recipe created successfully") : alert(json.msg);
      });
  };

  //need picture here -----------------------------------------------
  return (
    <div className="container">
      <Col md={{ span: 4, offset: 4 }} className="mt-5">
        <Card>
          <h1>Register a recipe</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="control-label ml-2">
              Name
            </label>
            <input
              id="title"
              type="text"
              ref={recipeNameRef}
              className="form-control"
              required
            />
            <br></br>
            <label htmlFor="type" className="control-label ml-2">
              Type (ex.Italian, French, etc.)
            </label>
            <input
              id="type"
              type="text"
              ref={recipeTypeRef}
              className="form-control"
              required
            />
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
            {/*------hidden because the other users 
        will be the one to determine it and default value is 0------*/}
            {/* <label htmlFor="rating"></label>
            <input
              id="rating"
              type="number"
              ref={ratingRef}
              hidden="true"
              className="form-control"
              value={0}
            />

            <br></br> */}
            {/* <label for="myfile" className="control-label">
              Select image{" "}
            </label>
            <input
              type="file"
              id="myfile"
              ref={fileRef}
              className="form-control"
            ></input> */}
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
            <input id="date" type="text" value={date} ref={dateRef} required hidden={true}/>
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
