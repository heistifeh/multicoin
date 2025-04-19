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
import CustomizedDataGrid from "./CustomizedDataGrid";
import { useSelector } from "react-redux";

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
const { currentUser } = useSelector((state) => state.user);
  const urlCrypto =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const urlStocks = "/api/stocks"; // Placeholder for stock API
  const urlRealEstate = "/api/real-estate"; // Placeholder for real estate data
  const urlMutualFunds = "/api/mutual-funds"; // Placeholder for mutual funds data
  const urlETFs = "/api/etfs"; // Placeholder for ETF data

  // Asset data fetching logic
  useEffect(() => {
    const fetchData = async () => {
      const pendingDepositsResponse = await fetch(
        `https://multicoin-xdbp.onrender.com/api/transactions/pending/${currentUser._id}`,
        {
          method: "GET", // Use "PUT" if updating data
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
            "Content-Type": "application/json", // Required if you're sending/receiving JSON
          },
        }
      );
      const pendingDeposits = await pendingDepositsResponse.json();
      console.log(pendingDeposits);
    };
    fetchData();
  }, []);

  // const handleAssetChange = (type) => {
  //   setAssetType(type); // Update the selected asset type
  // };

  // if (loading) return <CircularProgress />;
  // if (!data) return <Typography>No data available</Typography>;

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
        <Grid item xs={12}>
          <CustomizedDataGrid />
        </Grid>
      </Box>
    </>
  );
};

export default AssetScreen;
