import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>please Log in </h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning">
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
