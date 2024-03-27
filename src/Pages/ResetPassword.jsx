import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //const{randomString,expirationTimestamp} = useParams();
  let navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result = await axios.post(
        "https://password-rest-w3tr.onrender.com/user/reset-password",
        {
          newPassword: password,
        }
      );
      if (result.status === 200) {
        toast.success("Password updated successfully");
        navigate("/login");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error(
          "Invalid token or token has expired.Please request a new reset link."
        );
      } else {
        console.log(err);
      }
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
      <div className="reset-container">
        <h2
          style={{ textAlign: "center", color: "#97ccf7", fontWeight: "bold" }}
        >
          Reset Password
        </h2>
        <br />
        <form>
          <div className="form-group">
            <label style={{ color: "#97ccf7" }} htmlFor="exampleInputPassword1">
              New Password
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
          </div>
          <br />
          <button type="submit" onClick={resetPassword} className="set-btn">
            Set Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
