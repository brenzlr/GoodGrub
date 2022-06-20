

export function GetAllRecipe() {
  fetch("http://localhost:3001/recipes", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
