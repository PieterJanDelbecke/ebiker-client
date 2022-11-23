import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("CLICKED");
    console.log("EMAIL:", email);
    console.log("Password:", password);
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/login",
    //     {
    //       email: "Pieter-Jan",
    //       password: " 123987",
    //     },
    //     {
    //       headers: {
    //         contentType: "application/json",
    //       },
    //     }
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <h5>Login</h5>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>SEND</button>
    </>
  );
};

export default LoginPage;
