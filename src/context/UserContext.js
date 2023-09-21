import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(storedUser || null);

  const loginUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/login', userData);
      setUser(response.data.user);
      // Store user in local storage
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Login failed');
    }
  };

  const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/users/register', userData);
      setUser(response.data.user);
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Registration failed');
    }
  };

  const logoutUser = async () => {
    try {
      localStorage.removeItem("user"); // Remove the user data from local storage
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('Logout error:', error);
      throw new Error('Logout failed');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        setUser,
        registerUser,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
