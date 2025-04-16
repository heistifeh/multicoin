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
} from "@mui/material";

const WithdrawalScreen = () => {
  const [currency, setCurrency] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [walletAddress, setWalletAddress] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Handle withdrawal submission logic here
    console.log("Withdrawal submitted:", { currency, amount, walletAddress });
    // Simulating an API call or processing time
    setTimeout(() => {
      setIsSubmitting(false);
      // Clear the form fields
      setCurrency("");
      setAmount("");
      setWalletAddress("");
    }, 3000); // Reset after 3 seconds for demo purposes
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Instructions on How to Make a Withdrawal
          </Typography>

          <Typography variant="h6" gutterBottom>
            STEP 1
          </Typography>
          <Typography paragraph>
            Select the currency you want to withdraw and enter the amount. The
            minimum withdrawal amount may vary depending on the selected
            currency.
          </Typography>

          <Typography variant="h6" gutterBottom>
            STEP 2
          </Typography>
          <Typography paragraph>
            Enter the wallet address where you want to receive your funds.
            Double-check the address to ensure it's correct.
          </Typography>

          <Typography variant="h6" gutterBottom>
            STEP 3
          </Typography>
          <Typography paragraph>
            Review the withdrawal details and click the "Submit Withdrawal"
            button to initiate the transaction.
          </Typography>

          <Typography variant="h6" gutterBottom>
            STEP 4
          </Typography>
          <Typography paragraph>
            Once the withdrawal is processed, the funds will be sent to the
            provided wallet address. Processing times may vary depending on the
            selected currency and network congestion.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Withdrawal Options
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Bitcoin (BTC)
          </Typography>
          <Typography paragraph>
            - Network: Bitcoin (BTC) Mainnet
            <br />
            - Processing Time: ~10-30 minutes (depending on network congestion)
            <br />- Minimum Withdrawal Amount: $1,000
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Ethereum (ETH) & ERC-20 Tokens (USDT, USDC, etc.)
          </Typography>
          <Typography paragraph>
            - Network: ERC-20 (Ethereum Mainnet)
            <br />
            - Processing Time: ~5-15 minutes (depending on network congestion)
            <br />- Minimum Withdrawal Amount: $500
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Tether (USDT) - Multiple Networks
          </Typography>
          <Typography paragraph>
            - USDT (ERC-20): Ethereum Network
            <br />
            - USDT (TRC-20): Tron Network
            <br />
            - USDT (BEP-20): Binance Smart Chain
            <br />
            - Processing Time: ~1-5 minutes (depending on network congestion)
            <br />- Minimum Withdrawal Amount: $500
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Binance Coin (BNB) & BEP-20 Tokens (USDT, USDC, etc.)
          </Typography>
          <Typography paragraph>
            - Network: BEP-20 (Binance Smart Chain)
            <br />
            - Processing Time: ~1-5 minutes (depending on network congestion)
            <br />- Minimum Withdrawal Amount: $500
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Solana (SOL)
          </Typography>
          <Typography paragraph>
            - Network: Solana (SOL) Mainnet
            <br />
            - Processing Time: ~1-2 minutes (depending on network congestion)
            <br />- Minimum Withdrawal Amount: $500
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Important Withdrawal Guidelines
          </Typography>
          <Typography paragraph>
            Always double-check the wallet address – Cryptocurrency transactions
            are irreversible. Ensure you enter the correct address.
            <br />
            Select the correct network – Sending funds to the wrong network
            (e.g., ERC-20 USDT to a TRC-20 address) may result in lost funds.
            <br />
            Minimum Withdrawal Amounts Apply – Small withdrawals below the
            required minimum may not be processed.
            <br />
            Network Fees Apply – Blockchain transactions require network fees
            (gas fees), which must be covered by the sender.
            <br />
            Processing Time – Withdrawals are processed after blockchain
            confirmation. Processing times may vary depending on the selected
            currency and network congestion.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Need Help?
          </Typography>
          <Typography paragraph>
            If you encounter any issues with your withdrawal, our team is
            available to assist you.
            {/* <br />
            Email: [Your Support Email]
            <br />
            Live Chat: [Your Website Live Chat Link] */}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Make Withdrawal
          </Typography>
          {isSubmitting ? (
            <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
              Withdrawal in progress. You will be updated via email once
              complete.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="currency-label">Select Currency</InputLabel>
                <Select
                  labelId="currency-label"
                  value={currency}
                  onChange={handleCurrencyChange}
                  label="Select Currency"
                  required
                >
                  <MenuItem value="BTC">BTC</MenuItem>
                  <MenuItem value="ETH">ETH</MenuItem>
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
                inputProps={{ min: 0, step: "0.00000001" }}
                helperText="Enter the amount you want to withdraw"
              />
              <TextField
                fullWidth
                label="Wallet Address"
                type="text"
                value={walletAddress}
                onChange={handleWalletAddressChange}
                margin="normal"
                required
                helperText="Enter the wallet address for receiving funds"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit Withdrawal
              </Button>
            </form>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default WithdrawalScreen;
