import React, { useRef } from "react";

export function RegisterRecipe() {
  //const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
  const titleRef = useRef();
  const descRef = useRef();
  const instructRef = useRef();
  const ratingRef = useRef();
  const fileRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    // to fill in based on callPostBody
    fetch("http://localhost:3001/recipes/register", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        description: descRef.current.value,
        instructions: instructRef.current.value,
        rating: ratingRef.current.value, //needs to take from the component
        //picture, gotta see how to do this
        file: fileRef.current.value
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
    <div>
      <h1>Register a recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe's name: </label>
        <input id="title" type="text" ref={titleRef} required />
        <br></br>
        <label htmlFor="description">Description: </label>
        <input id="description" type="text" ref={descRef} required />
        <br></br>
        <label htmlFor="instructions">Instructions to replicate: </label>
        <input id="instructions" type="text" ref={instructRef} required />
        <br></br>
        {/*------hidden because the other users 
        will be the one to determine it and default value is 0------*/}
        <label htmlFor="rating"></label>
        <input
          id="rating"
          type="number"
          ref={ratingRef}
          hidden="true"
          value={0}
        />
        {/*------------*/}
        <label for="myfile">Select image: </label>
        <input type="file" id="myfile" ref={fileRef}></input>
        <br></br>
        {/*------------*/}
        <button type="submit">Post Recipe!</button>
      </form>
    </div>
  );
}

export default RegisterRecipe;
