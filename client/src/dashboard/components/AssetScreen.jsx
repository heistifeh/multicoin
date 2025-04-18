import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import Cookies from "js-cookie";
import DepositPage from "./DepositPage";

const AssetCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const CryptoIcon = styled("img")({
  width: 50,
  height: 50,
  marginBottom: 15,
});

const PriceChange = styled(Typography)(({ theme, isPositive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  color: isPositive ? theme.palette.success.main : theme.palette.error.main,
}));

const AssetScreen = ({ handleSelect }) => {
  const [assetType, setAssetType] = useState("crypto"); // Default asset type is 'crypto'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const urlCrypto =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const urlStocks = "/api/stocks"; // Placeholder for stock API
  const urlRealEstate = "/api/real-estate"; // Placeholder for real estate data
  const urlMutualFunds = "/api/mutual-funds"; // Placeholder for mutual funds data
  const urlETFs = "/api/etfs"; // Placeholder for ETF data

  // Asset data fetching logic
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const cachedData = Cookies.get(`${assetType}Data`);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        let url;
        if (assetType === "crypto") {
          url = urlCrypto;
        } else if (assetType === "stocks") {
          url = urlStocks;
        } else if (assetType === "realEstate") {
          url = urlRealEstate;
        } else if (assetType === "mutualFunds") {
          url = urlMutualFunds;
        } else if (assetType === "etfs") {
          url = urlETFs;
        }

        try {
          const response = await axios.get(url);
          setData(response.data);
          Cookies.set(`${assetType}Data`, JSON.stringify(response.data), {
            expires: 1 / 24,
          }); // expires in 1 hour
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [assetType]);

  const handleAssetChange = (type) => {
    setAssetType(type); // Update the selected asset type
  };

  if (loading) return <CircularProgress />;
  if (!data) return <Typography>No data available</Typography>;

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {assetType.charAt(0).toUpperCase() + assetType.slice(1)} Assets
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Choose any of the assets below that you want to invest in. Select your
          preferred asset to start your investment journey today!
        </Typography>

        {/* Buttons for Asset Type Selection */}
        <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
          <Button
            variant={assetType === "crypto" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAssetChange("crypto")}
          >
            Cryptocurrencies
          </Button>
          <Button
            variant={assetType === "stocks" ? "contained" : "outlined"}
            color="primary"
            onClick={handleSelect}
          >
            Stocks
          </Button>
          <Button
            variant={assetType === "realEstate" ? "contained" : "outlined"}
            color="primary"
            onClick={handleSelect}
          >
            Real Estate
          </Button>
          <Button
            variant={assetType === "mutualFunds" ? "contained" : "outlined"}
            color="primary"
            onClick={handleSelect}
          >
            Mutual Funds
          </Button>
          <Button
            variant={assetType === "etfs" ? "contained" : "outlined"}
            color="primary"
            onClick={handleSelect}
          >
            ETFs
          </Button>
        </Box>
      </Grid>

      <Grid container spacing={3}>
        {/* Map and render data for assets */}
        {data
          .filter((asset) =>
            ["BTC", "ETH", "USDT", "BNB", "SOL"].includes(
              asset.symbol?.toUpperCase()
            )
          )
          .map((asset) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={asset.id}>
              <AssetCard elevation={3}>
                <CryptoIcon src={asset.image} alt={asset.name} />
                <Typography variant="h6" gutterBottom>
                  {asset.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  $
                  {asset.current_price
                    ? asset.current_price.toLocaleString()
                    : asset.price}
                </Typography>
                <PriceChange
                  variant="body2"
                  isPositive={asset.price_change_percentage_24h > 0}
                >
                  {asset.price_change_percentage_24h > 0 ? (
                    <FiArrowUpRight />
                  ) : (
                    <FiArrowDown />
                  )}
                  {Math.abs(asset.price_change_percentage_24h).toFixed(2)}%
                </PriceChange>
                <TextField
                  type="number"
                  label=" "
                  variant="filled"
                  fullWidth
                  margin="normal"
                  disabled
                />
                <Button
                  onClick={handleSelect}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Buy
                </Button>
              </AssetCard>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default AssetScreen;
