import React, { useState } from "react";
import SignUpForm from "./signup";
import LoginForm from "./signin";
export const AuthPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle ? (
        <SignUpForm handleToggle={() => setToggle(false)} />
      ) : (
        <LoginForm handleToggle={() => setToggle(true)} />
      )}
    </div>
  );
};
