import { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login,  register as apiRegister, getProfile  } from "../api/api.js";

export const AuthContext = createContext(null); //eslint-disable-line

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
  
useEffect(() => {
  const initAuth = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        return;
      }

      setAuthToken(token);
      setIsAuthenticated(true);

      const userData = await getProfile(token);

      setUser(userData);

    } catch (err) {
      console.log("INIT AUTH ERROR:", err.message);
      setUser(null);
      setAuthToken(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };
  initAuth();
}, []);


  //Function to put JWT token in local storage.
const setToken = async (token) => {
  const cleanToken = token.replace(/^BEARER\s+/i, "");
  setAuthToken(cleanToken);
  await AsyncStorage.setItem("authToken", cleanToken);
};

const authenticate = async (email, password) => {
  try {
    const result = await login(email, password);

if (!result || !result.token) {
  throw new Error("Login failed: no token returned");
}

const cleanToken = result.token.replace(/^BEARER\s+/i, "");
    await AsyncStorage.setItem("authToken", cleanToken);

    setAuthToken(cleanToken);
    setIsAuthenticated(true);

    const userData = await getProfile(cleanToken);

    console.log("USER DATA:", userData);

    setUser(userData);

  } catch (err) {
  console.log("LOGIN ERROR:", err.message);
  setAuthToken(null);
  setIsAuthenticated(false);
  setUser(null);

  await AsyncStorage.removeItem("authToken");

  setError("Incorrect email or password. Please try again.");

  return false;
}
};

  const register = async (email, password, lifeStage) => {
    const result = await apiRegister(email, password, lifeStage);
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
        loading,
        setUser, 
        error,  
        setError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
