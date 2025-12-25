import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import { checkValidData } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg"
          alt="BG-IMG"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full rounded-sm bg-black border-2 border-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 mb-4 w-full rounded-sm bg-black border-2 border-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-full rounded-sm bg-black border-2 border-gray-700"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          type="submit"
          onClick={handleSubmitForm}
          className="p-4 my-4 w-full bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
