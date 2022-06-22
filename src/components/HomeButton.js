import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    borderRadius: "20px",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <button style={buttonStyle} onClick={handleSubmit}>
        <p>Home</p>
      </button>
    </div>
  );
}

export default HomeButton;
