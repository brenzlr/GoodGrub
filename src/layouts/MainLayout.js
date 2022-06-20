import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <body class="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </body>
  );
}

export default MainLayout;
