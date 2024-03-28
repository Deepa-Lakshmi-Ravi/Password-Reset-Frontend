import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const ExistUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        "https://password-rest-sokz.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      if (result.status === 200) {
        toast.success("Login successfull");

        sessionStorage.setItem("firstName", result.data.user.firstName);
        sessionStorage.setItem("email", result.data.user.email);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="login-container">
        <h2
          style={{ textAlign: "center", color: "#97ccf7", fontWeight: "bold" }}
        >
          Login
        </h2>
        <br />
        <form>
          <div className="form-group">
            <label style={{ color: "#97ccf7" }} htmlFor="exampleInputEmail1">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label style={{ color: "#97ccf7" }} htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={showPassword}
              onChange={PasswordVisibility}
              value=""
              id="flexCheckDefault"
            />
            <label
              style={{ color: "#97ccf7" }}
              className="form-check-label"
              htmlFor="showpassword"
            >
              Show Password
            </label>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span
              style={{ color: "#97ccf7", cursor: "pointer" }}
              onClick={() => navigate("/forget-password")}
            >
              Forget Password?
            </span>
          </div>
          <br />

          <button
            type="submit"
            onClick={(e) => ExistUser(e)}
            className="login-btn "
          >
            Login
          </button>
          <br />
          <br />

          <p style={{ color: "#97ccf7" }}>
            Create Account?&nbsp; &nbsp;
            <span
              style={{ cursor: "pointer", color: "#97ccf7", fontSize: "20px" }}
              onClick={() => navigate("/signup")}
            >
              SignUp
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
