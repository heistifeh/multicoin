import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const countries = [
  'USA', 'China', 'Japan', 'Germany', 'UK', 'India', 'France', 'Italy', 'Canada', 'South Korea',
  'Russia', 'Brazil', 'Australia', 'Spain', 'Mexico', 'Indonesia', 'Netherlands', 'Saudi Arabia',
  'Turkey', 'Switzerland', 'Poland', 'Sweden', 'Belgium', 'Thailand', 'Ireland', 'Argentina',
  'Norway', 'Israel', 'Singapore', 'Austria'
];

function getRandomCountry() {
  return countries[Math.floor(Math.random() * countries.length)];
}

function getRandomPrice() {
  // Generate a random price between $10,000 and $200,000
  const price = Math.random() * 190000 + 10000;
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export default function Toast() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const country = getRandomCountry();
      const price = getRandomPrice();
      setMessage(`Someone from ${country} just made ${price}`);
      setOpen(true);
    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
