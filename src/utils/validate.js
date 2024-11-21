const validateData = (isSignInForm, firstName, emailId, password) => {
  if (!isSignInForm) {
    const isFirstNameValid = /^[a-zA-Z ]{4,30}$/.test(firstName);
    if (!isFirstNameValid) return "First Name is not valid";
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    emailId
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

  if (!isEmailValid) return "Emaild Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

// const validateData = (isSignInForm, firstName, emailId, password) => {
//   if (!isSignInForm) {
//     const isFirstNameValid = /^[a-zA-Z]{4,30}$/.test(firstName);
//     if (!isFirstNameValid) return "First Name is not valid";
//   }

//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
//     emailId
//   );

//   const isPasswordValid =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

//   if (!isEmailValid) return "Emaild Id is not valid";
//   if (!isPasswordValid) return "Password is not valid";

//   return null;
// };

export default validateData;
