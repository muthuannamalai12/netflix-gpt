import React, { useState, useRef } from "react";
import Header from "./Header";
import validateData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { LOGO } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  //   const [emailId, setEmailId] = useState(null);
  //   const [password, setPassword] = useState(null);
  //   const [firstName, setFirstName] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const firstName = useRef(null);
  const password = useRef(null);
  const emailId = useRef(null);

  //   const toggleSignInForm = () => {
  //     setIsSignInForm(!isSignInForm);
  //     setPassword("");
  //     setEmailId("");
  //     setErrorMessage(null);
  //   };

  //   const handleButtonClick = () => {
  //     const message = validateData(isSignInForm, firstName, emailId, password);
  //     setErrorMessage(message);

  //     if (!message) {
  //       setErrorMessage(null);
  //     }
  //   };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    emailId.current.value = ""; // Clear email field
    password.current.value = ""; // Clear password field
  };

  const handleButtonClick = () => {
    let message = null; // Default value for message

    if (isSignInForm) {
      // Validate only email and password for sign-in form
      message = validateData(
        isSignInForm,
        null,
        emailId.current.value,
        password.current.value
      );
    } else {
      // Validate firstName, email, and password for sign-up form
      message = validateData(
        isSignInForm,
        firstName.current.value,
        emailId.current.value,
        password.current.value
      );
    }

    setErrorMessage(message); // Set the error message

    // if (!message) or if (message === null)
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailId.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: firstName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              //   const { uuid, email, displayName, photoURL } = user;
              // auth.current user only has the updated values of all the fields
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          //   console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailId.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //   console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGO} alt="backround-image" />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {/* {!isSignInForm && (
            <input
              value={firstName}
              type="text"
              placeholder="Enter First Name"
              className="p-2 my-4 w-full bg-gray-700"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          )}
          <input
            type="text"
            value={emailId}
            placeholder="Enter email address"
            className="p-2 my-4 w-full bg-gray-700"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            placeholder="Enter password"
            className="p-2 my-4 w-full bg-gray-700"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> */}
          {!isSignInForm && (
            <input
              ref={firstName}
              type="text"
              placeholder="Enter First Name"
              className="p-2 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="text"
            ref={emailId}
            placeholder="Enter email address"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className="p-2 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
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
