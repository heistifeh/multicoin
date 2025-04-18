import React, { useState, useEffect, useRef } from "react";
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
  Divider,
  Collapse,
} from "@mui/material";
import {  Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { QRCodeSVG } from "qrcode.react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSelector } from "react-redux";
import AssetScreen from "./AssetScreen";
import { set } from "mongoose";

const DepositScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState(1000);
  const [showTransferScreen, setShowTransferScreen] = useState(false);
  const [showDepositForm, setShowDepositForm] = useState(false); // Toggles deposit form section
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openConfirmSnackbar, setOpenConfirmSnackbar] = useState(false);
  const [balance, setBalance] = useState({});
  const [pendingDeposits, setPendingDeposits] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [userId, setUserId] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(false); // Asset selected by the user
  const { currentUser } = useSelector((state) => state.user);
  const depositFormRef = useRef(null);

  // useEffect(() => {
  //   // Cleanup function to reset the states when the component unmounts
  //   return () => {
  //     setSelectedAsset(false);
  //   };
  // }, []);
  const loadUserStats = React.useCallback(async () => {
    if (currentUser) {
      try {
        // Fetch user balance
        const balanceResponse = await fetch(
          `https://multicoin-xdbp.onrender.com/api/user/${currentUser._id}/balance`
        );
        if (!balanceResponse.ok) {
          throw new Error("Failed to fetch balance:");
        }
        const balance = await balanceResponse.json();
        console.log(balance);

        // Fetch pending deposits
        const pendingDepositsResponse = await fetch(
          `https://multicoin-xdbp.onrender.com/api/transactions/pending/${currentUser._id}`
        );
        if (!pendingDepositsResponse.ok) {
          throw new Error("Failed to fetch pending deposits:");
        }
        const pendingDeposits = await pendingDepositsResponse.json();
        console.log(pendingDeposits);
      } catch (error) {
        console.error("Failed to load user stats", error);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser._id) {
      setUserId(currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      const handleLoadStat = async () => {
        await loadUserStats();
      };
      handleLoadStat();
    } catch (error) {
      console.error("Failed to update balance and stats:", error);
    }
  }, [loadUserStats]);

  // Auto scroll to deposit form when shown
  useEffect(() => {
    if (showDepositForm && depositFormRef.current) {
      depositFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDepositForm]);

  // Wallet addresses for QR code and copy functionality
  const walletAddresses = {
    BTC: "bc1qd6evmz0hwgd4xpuxphrhzhtd32s9gfp0y086wm",
    ETH: "0x85454158cC78EA7cb9C621b8fdB95dd493AFA7c2",
    USDT_ERC20: "0xYourEthereumAddress",
    USDT_TRC20: "TYourTronAddress",
    USDT_BEP20: "bnbYourBSCAddress",
    BNB: "bnbYourBSCAddress",
    SOL: "solYourSolanaAddress",
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
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const createDeposit = async ({ username = currentUser.username, amount }) => {
    try {
      const resultResponse = await fetch("https://multicoin-xdbp.onrender.com/api/transactions/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, amount }),
      });
      const result = await resultResponse.json();
      console.log(result);
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
      const result = await createDeposit({ amount: parseFloat(amount) });
      console.log(result);
      if (result.success) {
        setSnackbarMessage("Deposit request created successfully!");
        setSnackbarSeverity("success");
        setOpenConfirmSnackbar(true);
        const pendingDepositsResponse = await fetch(
          `https://multicoin-xdbp.onrender.com/api/transactions/pending/${currentUser._id}`
        );
        const pendingDeposits = await pendingDepositsResponse.json();
        setPendingDeposits(pendingDeposits);
      } else {
        setSnackbarMessage("Failed to create deposit. Please try again.");
        setSnackbarSeverity("error");
        setOpenConfirmSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
      setOpenConfirmSnackbar(true);
    }
  };

  const handleCloseConfirmSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenConfirmSnackbar(false);
    if (snackbarSeverity === "success") {
      setShowTransferScreen(false);
      setAmount(1000); // Reset to default
      setPaymentMethod(""); // Reset payment method
    }
  };

  // Render the transfer/confirmation screen once the user submits the deposit form
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
  const handleSelectAsset = () => {
    setSelectedAsset(true);
  };
  const handleGoBack = () => {
    setSelectedAsset(false);
  };

  return (
    <>
      {selectedAsset ? (
        <Grid spacing={3}>
          {/* Guidelines & Instructions Section (Full Width) */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, height: "100%", overflowY: "auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Go Back Icon Button */}
                <IconButton onClick={handleGoBack}>
                  <ArrowBackIcon />
                </IconButton>

                <Typography variant="h5" gutterBottom>
                  Crypto Payments – Secure & Instant Deposits
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom>
                At Multicoin Capital, we offer fast and secure cryptocurrency
                payment options for funding your account. Follow the
                instructions below to ensure smooth transactions.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Accepted Cryptocurrencies & Wallet Addresses
              </Typography>
              <Typography variant="body2" gutterBottom>
                To fund your account, send your chosen cryptocurrency to the
                corresponding wallet address. Ensure you select the correct
                network to avoid lost transactions.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Bitcoin (BTC)
              </Typography>
              <Typography variant="body2" gutterBottom>
                Wallet Address: ?<br />
                Network: Bitcoin (BTC) Mainnet
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Ethereum (ETH) & ERC-20 Tokens (USDT, USDC, etc.)
              </Typography>
              <Typography variant="body2" gutterBottom>
                Wallet Address: ?<br />
                Network: ERC-20 (Ethereum Mainnet)
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Tether (USDT) - Multiple Networks
              </Typography>
              <Typography variant="body2" gutterBottom>
                USDT (ERC-20): 0xYourEthereumAddress (Ethereum Mainnet)
                <br />
                USDT (TRC-20): TYourTronAddress (Tron Network)
                <br />
                USDT (BEP-20): bnbYourBSCAddress (Binance Smart Chain)
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                (Ensure you select the correct USDT network to prevent failed
                transactions.)
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Binance Coin (BNB) & BEP-20 Tokens (USDT, USDC, etc.)
              </Typography>
              <Typography variant="body2" gutterBottom>
                Wallet Address: ?<br />
                Network: BEP-20 (Binance Smart Chain)
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Solana (SOL)
              </Typography>
              <Typography variant="body2" gutterBottom>
                Wallet Address: ?<br />
                Network: Solana (SOL) Mainnet
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Important Deposit Guidelines
              </Typography>
              <Typography variant="body2" component="div">
                <ul>
                  <li>
                    ✅ Always Double-Check the Wallet Address – Cryptocurrency
                    transactions are irreversible. Ensure you enter the correct
                    address.
                  </li>
                  <li>
                    ✅ Select the Right Network – Sending funds to the wrong
                    network (e.g., ERC-20 USDT to a TRC-20 address) may result
                    in lost funds.
                  </li>
                  <li>
                    ✅ Minimum Deposit Amounts Apply – Small deposits below the
                    required minimum may not be credited. (Minimum Deposit is
                    $1,000)
                  </li>
                  <li>
                    ✅ Network Fees Apply – Blockchain transactions require
                    network fees (gas fees), which must be covered by the
                    sender.
                  </li>
                  <li>
                    ✅ Processing Time – Deposits are processed after blockchain
                    confirmation:
                    <ul>
                      <li>Bitcoin (BTC): ~10-30 minutes</li>
                      <li>Ethereum (ETH) & ERC-20 Tokens: ~5-15 minutes</li>
                      <li>BEP-20 & TRC-20 Tokens: ~1-5 minutes</li>
                      <li>Solana (SOL): ~1-2 minutes</li>
                    </ul>
                  </li>
                </ul>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Confirming Your Deposit
              </Typography>
              <Typography variant="body2" gutterBottom>
                Once you’ve sent the funds, submit your payment details for
                verification:
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                Send an email to: [Your Support Email] with:
                <ul>
                  <li>Transaction ID (TxID) from your wallet</li>
                  <li>Amount Sent & Cryptocurrency Used</li>
                  <li>Your Account Username or ID</li>
                </ul>
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Need Help? Contact Support
              </Typography>
              <Typography variant="body2" gutterBottom>
                If you encounter any issues with your crypto deposit, our team
                is available to assist you.
              </Typography>
              <Typography variant="body2" gutterBottom>
                Email: [Your Support Email] <br />
                Live Chat: [Your Website Live Chat Link]
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                ⚠️ Warning: Protect Your Funds – Never send funds to an address
                not listed on this page. We will never request private keys or
                wallet passwords – beware of scams. If you're unsure about a
                transaction, contact support before sending funds.
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Ready to Fund Your Account? 🚀
              </Typography>
              <Typography variant="body2" gutterBottom>
                Choose your preferred cryptocurrency and send funds now to get
                started!
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => setShowDepositForm(true)}
              >
                View Your Wallet & Deposit Now
              </Button>
            </Paper>
          </Grid>

          {/* Deposit Form / Transfer Screen Section (Full Width) */}
          {showDepositForm && (
            <Grid item xs={12} ref={depositFormRef}>
              <Collapse in={showDepositForm} timeout="auto" unmountOnExit>
                {showTransferScreen ? (
                  renderTransferScreen()
                ) : (
                  <Paper sx={{ p: 3, height: "100%" }}>
                    <Typography variant="h5" gutterBottom>
                      Make Deposit
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel id="payment-method-label">
                          Select Payment Method
                        </InputLabel>
                        <Select
                          labelId="payment-method-label"
                          value={paymentMethod}
                          onChange={handlePaymentMethodChange}
                          label="Select Payment Method"
                          required
                        >
                          <MenuItem value="BTC">BTC</MenuItem>
                          <MenuItem value="ETH">ETH</MenuItem>
                          <MenuItem value="USDT_ERC20">USDT (ERC-20)</MenuItem>
                          <MenuItem value="USDT_TRC20">USDT (TRC-20)</MenuItem>
                          <MenuItem value="USDT_BEP20">USDT (BEP-20)</MenuItem>
                          <MenuItem value="BNB">BNB</MenuItem>
                          <MenuItem value="SOL">SOL</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        fullWidth
                        label="Enter Amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        margin="normal"
                        required
                        inputProps={{ min: 1000 }}
                        helperText="Minimum deposit amount is $1000"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                      >
                        Submit Deposit
                      </Button>
                    </form>
                  </Paper>
                )}
              </Collapse>
            </Grid>
          )}
        </Grid>
      ) : (
        <AssetScreen handleSelect={handleSelectAsset} />
      )}
    </>
  );
};

export default DepositScreen;
