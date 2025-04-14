import React from 'react';
import { Container, Typography, Box, Paper, Grid, useTheme } from '@mui/material';
import { FaBitcoin } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const CurrencyCard = ({ Icon, name, color }) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: 'center',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: theme.palette.background.paper,
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: theme.shadows[10],
          },
        }}
      >
        <Box
          sx={{
            animation: `${pulse} 2s infinite ease-in-out`,
            mb: 2,
          }}
        >
          <Icon size={80} color={color} />
        </Box>
        <Typography variant="h5" fontWeight="bold">
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};

const SupportedCurrencies = ({ id }) => {
  const theme = useTheme();
  return (
    <Box
      id={id}
      sx={{
        py: 10,
        
    }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 6,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(45deg, #1a237e 30%, #4a148c 90%)'
              : 'linear-gradient(45deg, #7986cb 30%, #ba68c8 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Currencies We Support
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <CurrencyCard Icon={FaBitcoin} name="Bitcoin" color="#f7931a" />
          <CurrencyCard Icon={SiEthereum} name="Ethereum" color="#3c3c3d" />
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportedCurrencies;
