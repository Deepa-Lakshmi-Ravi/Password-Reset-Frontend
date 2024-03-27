import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <h2 className="home-head">Welcome to our Website</h2>
      <br />
      <button className="home-btn" onClick={() => navigate("/login")}>
        Signin
      </button>
    </>
  );
};

export default HomePage;
