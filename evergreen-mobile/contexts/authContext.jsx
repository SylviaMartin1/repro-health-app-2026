import { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login,  register as apiRegister  } from "../api/api.js";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null); 
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setAuthToken(token);
        setIsAuthenticated(true);
      }
    };
    loadToken();
  }, []);


  //Function to put JWT token in local storage.
 const setToken =  async (token) => {
    const cleanToken = token.replace(/^BEARER\s+/i, "");
    setAuthToken(cleanToken);
    await AsyncStorage.setItem('authToken', cleanToken);
  }

  const authenticate = async (email, password) => {
    const result = await login(email, password);
    console.log("LOGIN RESPONSE:", result);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setEmail(email);
      setUser(result.user);
    }
    else {
    alert(result.error || "Login failed");
  }
  };


  const register = async (email, password) => {
    const result = await apiRegister(email, password);
    return result.success;
  };

  const signout = async () => {
    setAuthToken(null);
    setIsAuthenticated(false);
    setEmail("");
    await AsyncStorage.removeItem('authToken');
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        email, 
        authToken,
        user,
        setUser
      }}
    >
      {props.children} {/* eslint-disable-line */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
