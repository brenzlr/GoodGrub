import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LoggedInContext, ThemeContext } from "../App";
import { useContext } from "react";

export function MainLayout() {

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <body class="d-flex flex-column min-vh-100" id={theme} >
      <Header />
      <Outlet />
      <Footer />
    </body>
  );
}

export default MainLayout;
