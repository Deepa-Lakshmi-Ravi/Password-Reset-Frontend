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
        <h1 className="welcome">WELCOME</h1>
        <br />
        <br />
        <p className="username">{firstName}</p>
        <br />
        <br />
        <button
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
