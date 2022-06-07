import { useResolvedPath, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function NavButton(props) {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    borderRadius: "15px",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  const activeButtonStyle = {
    backgroundColor: "blue",
    border: "none",
    borderRadius: "15px",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <NavLink to={props.to}>
      <button style={match ? activeButtonStyle : buttonStyle}>
        <p>{props.label}</p>
      </button>
    </NavLink>
  );
}

export default NavButton;
