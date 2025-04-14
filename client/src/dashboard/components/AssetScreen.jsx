import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Paper, TextField, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import Cookies from 'js-cookie';

const AssetCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CryptoIcon = styled('img')({
  width: 50,
  height: 50,
  marginBottom: 15,
});

const PriceChange = styled(Typography)(({ theme, isPositive }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  color: isPositive ? theme.palette.success.main : theme.palette.error.main,
}));

const AssetScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const cachedData = Cookies.get('cryptoData');
      
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(url);
          setData(response.data);
          Cookies.set('cryptoData', JSON.stringify(response.data), { expires: 1/24 }); // expires in 1 hour
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (!data) return <Typography>No data available</Typography>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Cryptocurrency Assets
        </Typography>
      </Grid>
      {data.map((crypto) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={crypto.id}>
          <AssetCard elevation={3}>
            <CryptoIcon src={crypto.image} alt={crypto.name} />
            <Typography variant="h6" gutterBottom>
              {crypto.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ${crypto.current_price.toLocaleString()}
            </Typography>
            <PriceChange variant="body2" isPositive={crypto.price_change_percentage_24h > 0}>
              {crypto.price_change_percentage_24h > 0 ? (
                <FiArrowUpRight />
              ) : (
                <FiArrowDown />
              )}
              {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </PriceChange>
            <TextField
              type="number"
              label="Enter amount"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Buy
            </Button>
          </AssetCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default AssetScreen;
