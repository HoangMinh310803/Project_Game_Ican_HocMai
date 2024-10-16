import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      value={{ users, setUsers, email, setEmail, password, setPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
