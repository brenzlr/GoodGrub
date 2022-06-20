import React, { useRef } from "react";
import { MultiMeat } from "./MultiMeat";

export function RegisterRecipe() {
  //const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const recipeNameRef = useRef();
  const recipeInstructionRef = useRef();
  const recipeRatingRef = useRef();
  const recipeTimeRef = useRef();
  const fileRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch("http://localhost:3001/recipes/register", {
      method: "POST",
      body: JSON.stringify({
        recipeName: recipeNameRef.current.value,
        recipeInstruction: recipeInstructionRef.current.value,
        recipeTime: recipeTimeRef.current.value,
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

  //need picture and rating here -----------------------------------------------
  return (
    <div className="container">
      
      <h1>Register a recipe</h1>
      <form onSubmit={handleSubmit} className="form-control">
        <label htmlFor="title">Recipe's name: </label>
        <input id="title" type="text" ref={recipeNameRef} required />
        <br></br>
        <label htmlFor="instructions">Instructions to replicate: </label>
        <input
          id="instructions"
          type="text"
          ref={recipeInstructionRef}
          required
        />
        <br></br>
        {/*------hidden because the other users 
        will be the one to determine it and default value is 0------*/}
        {/* <MultiMeat/> */}
        <label htmlFor="time">Time: </label>
        <input id="time" type="number" ref={recipeTimeRef} />
        <br></br>
        {/*------------*/}
        {/* <label for="myfile">Select image: </label>
        <input type="file" id="myfile" ref={fileRef}></input>
        <br></br> */}
        {/*------------*/}
        <button type="submit">Post Recipe!</button>
      </form>
    </div>
  );
}

export default RegisterRecipe;
