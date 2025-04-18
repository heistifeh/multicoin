import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Define your columns
export const columns = [
  {
    field: "transactionType",
    headerName: "Transaction Type",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 120,
  },
  { field: "status", headerName: "Status", flex: 0.5, minWidth: 80 },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "center",
    align: "center",
    flex: 1,
    minWidth: 100,
  },

  {
    field: "createdAt",
    headerName: "Date",
    headerAlign: "left",
    align: "left",
    flex: 1,
    minWidth: 120,
  },
  { field: "statusLabel", headerName: "Reference ID", flex: 1, minWidth: 100 },
];

// Fetch and map rows data from API
export const useTransactionData = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (currentUser && currentUser._id) {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)twk_token_67ffbb87e9af841915f4e593\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        try {
          const response = await fetch(
            `https://multicoin-xdbp.onrender.com/api/transactions/pending/${currentUser._id}`,
            {
              method: "GET", // or "PUT" if you're updating
              headers: {
                Authorization: `Bearer ${token}`, // Add the token in the Authorization header
                "Content-Type": "application/json", // If required by your API
              },
            }
          );
          const data = await response.json();

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
          console.error("Error fetching transactions:", error);
          setLoading(false); // Set loading to false on error
        }
      }
    };

    fetchTransactions();
  }, [currentUser]);

  // Return rows and loading state
  return { rows, loading };
};
