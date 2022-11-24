import { useState, useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    const inputs = {
      email,
      password,
      rePassword,
      streetName,
      streetNumber,
      unitNumber,
      suburb,
      postNumber,
      state,
    };

    console.log("INPUTS:", inputs);
  };
  return (
    <>
      <h5>SignUp</h5>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">re-enter password</label>
          <input
            type="text"
            name="rePassword"
            id="rePassword"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="streetName">Street Name</label>
          <input
            type="text"
            name="streetName"
            id="streetName"
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="streetNumber">Street Number</label>
          <input
            type="text"
            name="streetNumber"
            id="streetNumber"
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="unitNumber">Unit Number</label>
          <input
            type="text"
            name="unitNumber"
            id="unitNumber"
            onChange={(e) => setUnitNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="suburb">Suburb</label>
          <input
            type="text"
            name="suburb"
            id="suburb"
            onChange={(e) => setSuburb(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postNumber">postNumber</label>
          <input
            type="text"
            name="postNumber"
            id="postNumber"
            onChange={(e) => setPostNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </>
  );
};

export default SignUp;
