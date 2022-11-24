import { useState, useEffect } from "react";

const SignUp = () => {
  return (
    <>
      <h5>SignUp</h5>
      <form>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="">re-enter password</label>
          <input type="text" name="rePassword" id="rePassword" />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div>
          <label htmlFor="streetName">Street Name</label>
          <input type="text" name="streetName" id="streetName" />
        </div>
        <div>
          <label htmlFor="streetNumber">Street Number</label>
          <input type="text" name="streetNumber" id="streetNumber" />
        </div>
        <div>
          <label htmlFor="unitNumber">Unit Number</label>
          <input type="text" name="unitNumber" id="unitNumber" />
        </div>
        <div>
          <label htmlFor="suburb">Suburb</label>
          <input type="text" name="suburb" id="suburb" />
        </div>
        <div>
          <label htmlFor="postNumber">postNumber</label>
          <input type="text" name="postNumber" id="postNumber" />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
