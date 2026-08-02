import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

import api from "../api/api";
import { registerUser } from "../api/userApi";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const formData = new URLSearchParams();

      formData.append("username", email);
      formData.append("password", password);

      const response = await api.post(
        "/users/login",
        formData,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
        }
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful!");

      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    }
  };
   
  const handleRegister = async () => {

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  try {

    setLoading(true);

    await registerUser({
      name: email.split("@")[0],
      email,
      password,
    });

    alert("Account created successfully.\nPlease login.");

    // Don't login automatically
    // await handleLogin();

  } catch (error) {

    console.error(error);

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Unable to connect to backend.");
    }

  } finally {

    setLoading(false);

  }

};
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <BrainCircuit size={34} />
        </div>

        <h1>HELIX AI</h1>

        <p>
          Connected Decision Intelligence Platform
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <div className="login-buttons">

    <button
        onClick={handleLogin}
        disabled={loading}
    >
        Login
    </button>

    <button
        className="register-btn"
        onClick={handleRegister}
        disabled={loading}
    >
        Create Account
    </button>

</div>

        <div className="demo-box">

          <h3>Demo Credentials</h3>

          <p>
            <strong>Email:</strong>
            {" "}
            admin@helix.ai
          </p>

          <p>
            <strong>Password:</strong>
            {" "}
            admin123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;