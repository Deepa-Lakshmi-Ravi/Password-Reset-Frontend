import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [firstName, setfirstName] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    let firstName = sessionStorage.getItem("firstName");
    if (firstName) {
      setfirstName(firstName);
    }
  }, []);

  return (
    <>
      <div className="main-container">
        <h1 style={{ color: "#97ccf7", fontSize: "80px" }}>WELCOME</h1>
        <br />
        <br />
        <p style={{ color: "#97ccf7", fontSize: "50px" }} className="username">
          {firstName}
        </p>
        <br />
        <br />
        <button
          style={{ backgroundColor: "#97ccf7", marginLeft: "150px" }}
          type="submit"
          onClick={() => navigate("/login")}
          className="logout-btn"
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default MainPage;
