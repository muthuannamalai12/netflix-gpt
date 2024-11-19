import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
          alt="backround-image"
        />
      </div>
      <div>
        <form className=" w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-2 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Enter email address"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <input
            type="text"
            placeholder="Enter password"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Submit
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix!! Sign Up Now"
              : "Already Registered ? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
