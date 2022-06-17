import React from "react";

function DbData() {
  return (
    <div>
      <button onClick={callGetAll}>Get all users</button>
      <button onClick={callPostBody}>POST</button>
      <button onClick={callGetQuery}>Get query</button>
      <button onClick={callGetParams}>Get params</button>
      <button onClick={callPutBody}>Update - Full PUT</button>
      <button onClick={callPatchBodyUsername}>Update - Partial PATCH</button>
      <button onClick={callDeleteParams}>DELETE</button>
      <button onClick={registerUserTemp}>registerUserTemp</button>
    </div>
  );
}

function callGetAll() {
  fetch("http://localhost:3001/users", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callPostBody() {
  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
      username: "Dio",
      password: "Brando",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetQuery() {
  fetch("http://localhost:3001/users?username=Dio", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetParams() {
  fetch("http://localhost:3001/users/Dio", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callPutBody() {
  fetch("http://localhost:3001/users", {
    method: "PUT",
    body: JSON.stringify({
      username: "Dio",
      password: "Brando",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callPatchBodyUsername() {
  fetch("http://localhost:3001/users/Dio/password", {
    method: "PATCH",
    body: JSON.stringify({
      password: "126",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callDeleteParams() {
  fetch("http://localhost:3001/users/Dio", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function registerUserTemp() {
  fetch("http://localhost:3001/users/register", {
    method: "POST",
    body: JSON.stringify({
      username: "Dios",
      password: "Brando231!",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default DbData;
