
import React from "react";
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
const DepositPage = () => {
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
    
  return (
    <>
      <Grid spacing={3}>
        {/* Guidelines & Instructions Section (Full Width) */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, height: "100%", overflowY: "auto" }}>
            <Typography variant="h5" gutterBottom>
              Crypto Payments – Secure & Instant Deposits
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Multicoin Capital, we offer fast and secure cryptocurrency
              payment options for funding your account. Follow the instructions
              below to ensure smooth transactions.
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
                  network (e.g., ERC-20 USDT to a TRC-20 address) may result in
                  lost funds.
                </li>
                <li>
                  ✅ Minimum Deposit Amounts Apply – Small deposits below the
                  required minimum may not be credited. (Minimum Deposit is
                  $1,000)
                </li>
                <li>
                  ✅ Network Fees Apply – Blockchain transactions require
                  network fees (gas fees), which must be covered by the sender.
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
              If you encounter any issues with your crypto deposit, our team is
              available to assist you.
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
    </>
  );
};

export default DepositPage;
