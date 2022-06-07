import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "./App.css";

import { MainLayout } from "./layouts/MainLayout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" Invalid URL />} />
      </Routes>
    </div>
  );
}

export default App;
