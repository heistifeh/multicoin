import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Define your columns
export const columns = [
  {
    field: "transactionType",
    headerName: "Type",
    headerAlign: "left",
    align: "left",
    flex: 0.5,
    minWidth: 120,
  },
  { field: "status", headerName: "Status", flex: 0.5, minWidth: 130 },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "left",
    align: "left",
    flex: 0.5,
    minWidth: 140,
  },

  {
    field: "createdAt",
    headerName: "Date",
    headerAlign: "left",
    align: "left",
    flex: 0.5,
    minWidth: 120,
  },
];

// Fetch and map rows data from API
export const useTransactionData = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (currentUser && currentUser._id) {
        try {
          const response = await fetch(
            `https://multicoin-xdbp.onrender.com/api/user/${currentUser._id}/transactions`,
            {
              method: "GET", // Use "PUT" if updating data
              headers: {
                Authorization: `Bearer ${currentUser.token}`,
                "Content-Type": "application/json", // Required if you're sending/receiving JSON
              },
            }
          );
          
          const data1 = await response.json();
          const data = [...data1].reverse();

          console.log("Fetched data:", data); // Log fetched data for debugging

          // Map the data to the required format
          const mappedRows = data.map((transaction) => ({
            id: transaction._id,
            pageTitle:
              transaction.type === "deposit" ? "Deposit" : "Withdrawal",
            amount: `$${transaction.amount}`,
            status: transaction.status,
            statusLabel: transaction._id,
            transactionType:
              transaction.type === "deposit" ? "Deposit" : "Withdrawal",
            createdAt: new Date(transaction.created_at).toLocaleString(),
          }));

          setRows(mappedRows); // Set state with fetched data
          setLoading(false); // Set loading to false
        } catch (error) {
          console.error("Error fetching transactions:😑😑😐😐", error);
          setLoading(false); // Set loading to false on error
        }
      }
    };

    fetchTransactions();
  }, []);

  // Return rows and loading state
  return { rows, loading };
};
