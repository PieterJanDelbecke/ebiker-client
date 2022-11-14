import React from "react";
import axios from "axios";

const LoginPage = () => {
  const handleLogin = async () => {
    console.log("CLICKED");
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          name: "Pieter-Jan",
          password: " 123987",
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
      <h5>Login</h5>
      <button onClick={handleLogin}>SEND</button>
    </>
  );
};

export default LoginPage;
