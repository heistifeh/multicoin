import React, { createContext, useContext, useState, useEffect } from 'react';
import { signIn, signUp } from '../dashboard/utils/database.jsx';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const result = await signIn(username, password);
    if (result.success) {
      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      // Dispatch a custom event to notify other parts of the app
      window.dispatchEvent(new CustomEvent('userChanged', { detail: result.user }));
      return { success: true };
    }
    return { success: false, message: result.message };
  };

  const register = async (username, password) => {
    const result = await signUp(username, password);
    if (result.success) {
      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      // Dispatch a custom event to notify other parts of the app
      window.dispatchEvent(new CustomEvent('userChanged', { detail: result.user }));
      return { success: true };
    }
    return { success: false, message: result.message };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Dispatch a custom event to notify other parts of the app
    window.dispatchEvent(new CustomEvent('userChanged', { detail: null }));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
