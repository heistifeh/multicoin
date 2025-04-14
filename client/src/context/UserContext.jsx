import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserBalance, getPendingDeposits } from '../dashboard/utils/database.jsx';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userBalance, setUserBalance] = useState(null);
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (userId) => {
    try {
      const balance = await getUserBalance(userId);
      const deposits = await getPendingDeposits(userId);
      setUserBalance(balance);
      setPendingDeposits(deposits);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshUserData = (userId) => {
    setLoading(true);
    fetchUserData(userId);
  };

  const value = {
    userBalance,
    pendingDeposits,
    loading,
    refreshUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
