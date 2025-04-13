import React from 'react';
import { Grid, Typography, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const WithdrawalScreen = () => {
  const [currency, setCurrency] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [walletAddress, setWalletAddress] = React.useState('');
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
    console.log('Withdrawal submitted:', { currency, amount, walletAddress });
    // Simulating an API call or processing time
    setTimeout(() => {
      setIsSubmitting(false);
      // Clear the form fields
      setCurrency('');
      setAmount('');
      setWalletAddress('');
    }, 3000); // Reset after 3 seconds for demo purposes
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Instructions on how to make a withdrawal
          </Typography>
          <Typography variant="h6" gutterBottom>
            STEP 1
          </Typography>
          <Typography paragraph>
            Select the currency you want to withdraw and enter the amount. The minimum withdrawal amount may vary depending on the selected currency.
          </Typography>
          <Typography variant="h6" gutterBottom>
            STEP 2
          </Typography>
          <Typography paragraph>
            Enter the wallet address where you want to receive your funds. Double-check the address to ensure it's correct.
          </Typography>
          <Typography variant="h6" gutterBottom>
            STEP 3
          </Typography>
          <Typography paragraph>
            Review the withdrawal details and click the "Submit Withdrawal" button to initiate the transaction.
          </Typography>
          <Typography variant="h6" gutterBottom>
            STEP 4
          </Typography>
          <Typography paragraph>
            Once the withdrawal is processed, the funds will be sent to the provided wallet address. Processing times may vary depending on the selected currency and network congestion.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Make Withdrawal
          </Typography>
          {isSubmitting ? (
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
              Withdrawal in progress. You will be updated via email once complete.
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
