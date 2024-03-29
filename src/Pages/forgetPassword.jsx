import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const forgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        "https://password-rest-sokz.onrender.com/user/forget-password",
        {
          email,
        }
      );
      if (result.status === 201) {
        toast.success(
          "Reset link sent successfully your email.please check the email",
          {
            position: "top-center",
          }
        );
        setEmail(" ");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email", {
        position: "top-center",
      });
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
      <div className="forget-container">
        <h2
          style={{ textAlign: "center", color: "#97ccf7", fontWeight: "bold" }}
        >
          Forget Password
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
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" onClick={forgetPassword} className="send-btn">
            Send
          </button>
          <br />
          <br />
          
          <p style={{ color: "#97ccf7" }}>
            Remember your password ? &nbsp; &nbsp;
            <span
              style={{ cursor: "pointer", color: "#97ccf7", fontSize: "20px" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
