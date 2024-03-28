import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import SignupForm from "./Pages/Signup";
import SigninForm from "./Pages/Signin";
import ForgetPasswordForm from "./Pages/forgetPassword";
import ResetPasswordForm from "./Pages/ResetPassword";
import MainPage from "./Pages/MainSite";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<SigninForm />} />
        <Route path="/forget-password" element={<ForgetPasswordForm />} />
        <Route path="/reset-password/:randomString/:expirationTimestamp" element={<ResetPasswordForm />} />
        <Route path="/dashboard" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
