import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel, IconButton, Snackbar, Alert } from '@mui/material';
// import QRCode from 'qrcode.react';
import {QRCodeSVG} from 'qrcode.react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { createDeposit, getUserBalance, getPendingDeposits } from '../utils/database';
import { useAuth } from '../context/AuthContext';

const DepositScreen = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState(1000);
    const [showTransferScreen, setShowTransferScreen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openConfirmSnackbar, setOpenConfirmSnackbar] = useState(false);
    const [balance, setBalance] = useState({});
    const [pendingDeposits, setPendingDeposits] = useState([]);
    const [message, setMessage] = useState('');
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const { user } = useAuth();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (user && user.id) {
            setUserId(user.id);
        }
    }, [user]);

    useEffect(() => {
        if (userId) {
            fetchUserBalance();
            fetchPendingDeposits();
        }
    }, [userId]);

    const walletAddresses = {
        BTC: 'bc1qd6evmz0hwgd4xpuxphrhzhtd32s9gfp0y086wm',
        ETH: '0x85454158cC78EA7cb9C621b8fdB95dd493AFA7c2',
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
        navigator.clipboard.writeText(walletAddresses[paymentMethod])
            .then(() => {
                setOpenSnackbar(true);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleConfirmTransaction = async () => {
        try {
            // Assume we have the user's email stored in a variable or context
             // Replace with actual user email
            const result = await createDeposit(user?.username, parseFloat(amount), paymentMethod);
            if (result.success) {
                setSnackbarMessage('Deposit request created successfully!');
                setSnackbarSeverity('success');
                setOpenConfirmSnackbar(true);
                await fetchPendingDeposits(); // Refresh pending deposits
                // We'll return to the main screen after the snackbar is closed
            } else {
                console.error('Failed to create deposit:', result.message);
                setSnackbarMessage('Failed to create deposit. Please try again.');
                setSnackbarSeverity('error');
                setOpenConfirmSnackbar(true);
            }
        } catch (error) {
            console.error('Error creating deposit:', error);
            setSnackbarMessage('An error occurred. Please try again.');
            setSnackbarSeverity('error');
            setOpenConfirmSnackbar(true);
        }
    };

    const handleCloseConfirmSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenConfirmSnackbar(false);
        if (snackbarSeverity === 'success') {
            setShowTransferScreen(false);
            setAmount(1000); // Reset amount to default
            setPaymentMethod(''); // Reset payment method
        }
    };

    const fetchUserBalance = async () => {
        if (userId) {
            const userBalance = await getUserBalance(userId);
            setBalance(userBalance);
        }
    };

    const fetchPendingDeposits = async () => {
        if (userId) {
            const deposits = await getPendingDeposits(userId);
            setPendingDeposits(deposits);
        }
    };

    const handleDeposit = async (e) => {
        e.preventDefault();
        const result = await createDeposit(userId, parseFloat(amount));
        setMessage(result.message);
        if (result.success) {
            setAmount('');
            fetchPendingDeposits();
        }
    };

    const renderTransferScreen = () => (
        <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
                Confirm Your Deposit
            </Typography>
            <Typography variant="h6" gutterBottom>
                {paymentMethod} Deposit:
            </Typography>
            <Typography paragraph>
                Amount in USD: ${amount}
            </Typography>
            <Typography paragraph>
                Pay to {paymentMethod} address:
            </Typography>
            <Typography 
                paragraph 
                fontWeight="bold" 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    wordBreak: 'break-all'
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
                        style={{ margin: '20px 0' }}
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
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Address copied to clipboard"
            />
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={openConfirmSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseConfirmSnackbar}
            >
                <Alert onClose={handleCloseConfirmSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Paper>
    );

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                    <Typography variant="h5" gutterBottom>
                        Instructions on how to make a deposit
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        STEP 1
                    </Typography>
                    <Typography paragraph>
                        Enter the amount you want to deposit in the form. A minimum amount of $1000 USD worth in Bitcoin is allowed. There is no maximum amount to deposit.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        STEP 2
                    </Typography>
                    <Typography paragraph>
                        Click on show QR code button at the bottom of the form, a QR code will be displayed for you to scan. Scan QR code and make payment to the QR code's wallet address.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        STEP 3
                    </Typography>
                    <Typography paragraph>
                        After payment has been made, click deposit button to submit form.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        STEP 4
                    </Typography>
                    <Typography paragraph>
                        Once payment is received, your available balance will be funded with deposited amount.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                {showTransferScreen ? (
                    
                    renderTransferScreen()
                ) : (
                    <Paper sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h5" gutterBottom>
                            Make Deposit
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="payment-method-label">Select Payment Method</InputLabel>
                                <Select
                                    labelId="payment-method-label"
                                    value={paymentMethod}
                                    onChange={handlePaymentMethodChange}
                                    label="Select Payment Method"
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
            </Grid>
        </Grid>
    );
};

export default DepositScreen;
