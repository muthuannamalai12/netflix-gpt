import React from "react";

const Header = () => {
  return (
    // To make the Login and header logo overlap
    <div className="absolute z-10">
      <img
        // to reduce the size of the image
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
    </div>
  );
};

export default Header;
