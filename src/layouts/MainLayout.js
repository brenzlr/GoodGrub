import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout(props) {
  return (
    <body className="d-flex flex-column min-vh-100" id={props.color}>
      <Header color={props.color} />
      <Outlet />
      <Footer color={props.color} />
    </body>
  );
}

export default MainLayout;
