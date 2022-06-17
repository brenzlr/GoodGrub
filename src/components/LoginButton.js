import { useNavigate } from "react-router-dom";

export function LoginButton(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const buttonStyle = {
    right: 0,
    width: "70px",
    height: "70px",
    border: "3px solid blue",
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleSubmit}>
        <p>Log in</p>
      </button>
    </>
  );
}

export default LoginButton;
