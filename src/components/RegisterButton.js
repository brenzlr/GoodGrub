import { useNavigate } from "react-router-dom";

export function RegisterButton(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      navigate("/register", { replace: true });
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
        <p>Register</p>
      </button>
    </>
  );
}

export default RegisterButton;
