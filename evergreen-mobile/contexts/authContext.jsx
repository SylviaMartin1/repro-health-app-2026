import { useState, createContext } from "react";
import { login,  register as apiRegister  } from "../api/api.js";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null); 
  const [email, setEmail] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    setAuthToken(data);
  }

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setEmail(email);
    }
    else {
    alert(result.error || "Login failed");
  }
  };


  const register = async (email, password) => {
    const result = await apiRegister(email, password);
    return result.success;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        email
      }}
    >
      {props.children} {/* eslint-disable-line */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
