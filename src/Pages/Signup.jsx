import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await axios.post(
        " https://password-rest-w3tr.onrender.com/user/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      if (res.status === 200) {
        toast.success("User created successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Fill all the detials");
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
      <div className="signup-container">
        <h2 className="signup">SignUp</h2>
        <form>
          <div className="form-group">
            <label
              style={{ color: "#97ccf7" }}
              className="col-sm-4"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              type="text"
              className="form-control col-sm-3 "
              placeholder="First name"
              aria-label="First name"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label style={{ color: "#97ccf7" }} htmlFor="lastname">
              Last Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <br />
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
              pattern=".{8,}"
              title="Password must be atleast 8 characters"
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
          </div>
          <br />
          <button
            type="submit"
            onClick={(e) => createUser(e)}
            className="signup-btn"
          >
            Sign Up
          </button>
          <br />
          <br />
          <p style={{ color: "#97ccf7" }}>
            Already have an account?&nbsp; &nbsp;
            <span
              style={{ cursor: "pointer", color: "#97ccf7", fontSize: "20px" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
