import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:9999/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        users,
        email,
        setEmail,
        password,
        setPassword,
        login,
        logout,
        isLoggedIn,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
