import { useState } from "react";
import axios from "axios";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewEnabled, setViewEnabled] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("viewenabled", viewEnabled);
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        },
        {
          headers: {
            contentType: "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h5>Sign In</h5>
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
          type={viewEnabled ? "text" : "password"}
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="checkbox"
          onChange={(e) => setViewEnabled(e.target.checked)}
        />
      </div>
      <button onClick={handleLogin}>SEND</button>
    </>
  );
};

export default SignInPage;
