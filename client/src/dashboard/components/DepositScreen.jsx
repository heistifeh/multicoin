import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
// import QRCode from 'qrcode.react';
import { QRCodeSVG } from "qrcode.react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSelector } from "react-redux";

const DepositScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState(1000);
  const [showTransferScreen, setShowTransferScreen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openConfirmSnackbar, setOpenConfirmSnackbar] = useState(false);
  const [balance, setBalance] = useState({});
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [message, setMessage] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [userId, setUserId] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  ///////////////////////////////////////////////////
  //   console.log(currentUser.email);

  const loadUserStats = React.useCallback(async () => {
    if (currentUser) {
      try {
        // Get the JWT token from your auth context or localStorage (depending on your setup)

        // Fetch user balance
        const balanceResponse = await fetch(
          `api/user/${currentUser._id}/balance`
        );
        if (!balanceResponse.ok) {
          throw new Error(`Failed to fetch balance: `);
        }
        const balance = await balanceResponse.json();
        console.log("balance");

        // Fetch pending deposits
        // const pendingDepositsResponse = await fetch(
        //   `api/transactions/pending/${currentUser._id}`
        // );
        // if (!pendingDepositsResponse.ok) {
        //   throw new Error(`Failed to fetch pending deposits:`);
        // }
        // const pendingDeposits = await pendingDepositsResponse.json();
        // console.log(pendingDeposits);
      } catch (error) {
        console.error("Failed to load the function", error);
      }
    }
  }, [currentUser]);
  //////////////////////////////////////////////////////////
  useEffect(() => {
    if (currentUser && currentUser._id) {
      setUserId(currentUser._id);
    }
  }, [currentUser]);

  React.useEffect(() => {
    // const FIVE_SECONDS_MS = 5 * 1000; // 5 seconds in milliseconds
    const FIVE_SECONDS_MS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

    try {
      const handleLoadStat = async () => {
        await loadUserStats();
      };
      handleLoadStat();
    } catch (error) {
      console.error("Failed to update balance and stats:", error);
    }
  }, []);

  const walletAddresses = {
    BTC: "bc1qd6evmz0hwgd4xpuxphrhzhtd32s9gfp0y086wm",
    ETH: "0x85454158cC78EA7cb9C621b8fdB95dd493AFA7c2",
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowTransferScreen(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(walletAddresses[paymentMethod])
      .then(() => {
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const createDeposit = async ({
    user_id, // Send current user's ID
    type, // Deposit type
    amount, // Amount from the state
    status = "pending", // The transaction is pending
  }) => {
    try {
      const resultResponse = await fetch("/api/transactions/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // The content type should be JSON
        },
        body: JSON.stringify({
          user_id, // Send current user's ID
          type, // Deposit type
          amount, // Amount from the state
          status, // The transaction is pending
        }),
      });
      const result = await resultResponse.json();
      return result;
    } catch (error) {
      console.error("Error creating deposit:", error);
      return {
        success: false,
        message: "Failed to create deposit. Please try again.",
      };
    }
  };

  const handleConfirmTransaction = async () => {
    try {
      // Assume we have the user's email stored in a variable or context
      // Replace with actual user email
      // const result = await createDeposit(user?.username, parseFloat(amount), paymentMethod);
      await createDeposit({
        user_id: currentUser._id, // Send current user's ID
        type: "deposit", // Deposit type
        amount: parseFloat(amount), // Amount from the state
        status: "pending", // The transaction is pending
      });
      if (result.success) {
        setSnackbarMessage("Deposit request created successfully!");
        setSnackbarSeverity("success");
        setOpenConfirmSnackbar(true);
        const pendingDepositsResponse = await fetch(
          `api/transactions/pending/${currentUser._id}`
        );
        const pendingDeposits = await pendingDepositsResponse.json();
        console.log(pendingDeposits); // Refresh pending deposits
        setPendingDeposits(pendingDeposits);
        // We'll return to the main screen after the snackbar is closed
      } else {
        console.error("Failed to create deposit:", result.message);
        setSnackbarMessage("Failed to create deposit. Please try again.");
        setSnackbarSeverity("error");
        setOpenConfirmSnackbar(true);
      }
    } catch (error) {
      console.error("Error creating deposit:", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
      setOpenConfirmSnackbar(true);
    }
  };

  const handleCloseConfirmSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenConfirmSnackbar(false);
    if (snackbarSeverity === "success") {
      setShowTransferScreen(false);
      setAmount(1000); // Reset amount to default
      setPaymentMethod(""); // Reset payment method
    }
  };

  const fetchUserBalance = async () => {
    if (userId) {
      setBalance(balance);
    }
  };

  const fetchPendingDeposits = async () => {
    if (userId) {
      setPendingDeposits(pendingDeposits);
    }
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    await createDeposit({
      user_id: currentUser._id, // Send current user's ID
      type: "deposit", // Deposit type
      amount: parseFloat(amount), // Amount from the state
      status: "pending", // The transaction is pending
    });
    setMessage(result.message);
    if (result.success) {
      setAmount("");
      // Fetch pending deposits
      const pendingDepositsResponse = await fetch(
        `api/transactions/pending/${currentUser._id}`
      );
      const pendingDeposits = await pendingDepositsResponse.json();
    }
  };

  const renderTransferScreen = () => (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h5" gutterBottom>
        Confirm Your Deposit
      </Typography>
      <Typography variant="h6" gutterBottom>
        {paymentMethod} Deposit:
      </Typography>
      <Typography paragraph>Amount in USD: ${amount}</Typography>
      <Typography paragraph>Pay to {paymentMethod} address:</Typography>
      <Typography
        paragraph
        fontWeight="bold"
        sx={{
          display: "flex",
          alignItems: "center",
          wordBreak: "break-all",
        }}
      >
        {walletAddresses[paymentMethod]}
        <IconButton onClick={handleCopyAddress} size="small" sx={{ ml: 1 }}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Typography>
      {paymentMethod && (
        <div>
          <Typography variant="h6" gutterBottom>
            {paymentMethod} QR Code
          </Typography>
          <QRCodeSVG
            value={walletAddresses[paymentMethod]}
            size={200}
            style={{ margin: "20px 0" }}
          />
        </div>
      )}
      <Typography paragraph sx={{ mt: 2 }}>
        Note: We do not charge any transaction fees on deposits.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleConfirmTransaction}
      >
        Confirm Transaction
      </Button>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setShowTransferScreen(false)}
      >
        Back to Deposit Form
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Address copied to clipboard"
      />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openConfirmSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseConfirmSnackbar}
      >
        <Alert
          onClose={handleCloseConfirmSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );

  return (
    // <Grid container spacing={3}>
    //     <Grid item xs={12} md={6}>
    //         <Paper sx={{ p: 3, height: '100%' }}>
    //             <Typography variant="h5" gutterBottom>
    //                 Instructions on how to make a deposit
    //             </Typography>
    //             <Typography variant="h6" gutterBottom>
    //                 STEP 1
    //             </Typography>
    //             <Typography paragraph>
    //                 Enter the amount you want to deposit in the form. A minimum amount of $1000 USD worth in Bitcoin is allowed. There is no maximum amount to deposit.
    //             </Typography>
    //             <Typography variant="h6" gutterBottom>
    //                 STEP 2
    //             </Typography>
    //             <Typography paragraph>
    //                 Click on show QR code button at the bottom of the form, a QR code will be displayed for you to scan. Scan QR code and make payment to the QR code's wallet address.
    //             </Typography>
    //             <Typography variant="h6" gutterBottom>
    //                 STEP 3
    //             </Typography>
    //             <Typography paragraph>
    //                 After payment has been made, click deposit button to submit form.
    //             </Typography>
    //             <Typography variant="h6" gutterBottom>
    //                 STEP 4
    //             </Typography>
    //             <Typography paragraph>
    //                 Once payment is received, your available balance will be funded with deposited amount.
    //             </Typography>
    //         </Paper>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //         {showTransferScreen ? (

    //             renderTransferScreen()
    //         ) : (
    //             <Paper sx={{ p: 3, height: '100%' }}>
    //                 <Typography variant="h5" gutterBottom>
    //                     Make Deposit
    //                 </Typography>
    //                 <form onSubmit={handleSubmit}>
    //                     <FormControl fullWidth margin="normal">
    //                         <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
    //                         <Select
    //                             labelId="payment-method-label"
    //                             value={paymentMethod}
    //                             onChange={handlePaymentMethodChange}
    //                             label="Select Payment Method"
    //                             required
    //                         >
    //                             <MenuItem value="BTC">BTC</MenuItem>
    //                             <MenuItem value="ETH">ETH</MenuItem>
    //                         </Select>
    //                     </FormControl>
    //                     <TextField
    //                         fullWidth
    //                         label="Enter Amount"
    //                         type="number"
    //                         value={amount}
    //                         onChange={handleAmountChange}
    //                         margin="normal"
    //                         required
    //                         inputProps={{ min: 1000 }}
    //                         helperText="Minimum deposit amount is $1000"
    //                     />
    //                     <Button
    //                         type="submit"
    //                         variant="contained"
    //                         color="primary"
    //                         fullWidth
    //                         sx={{ mt: 2 }}
    //                     >
    //                         Submit Deposit
    //                     </Button>
    //                 </form>
    //             </Paper>
    //         )}
    //     </Grid>
    // </Grid>
    <div>hey</div>
  );
};

export default DepositScreen;
