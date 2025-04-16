import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import ChartUserByCountry from "./ChartUserByCountry";
import CustomizedTreeView from "./CustomizedTreeView";
import CustomizedDataGrid from "./CustomizedDataGrid";
import HighlightedCard from "./HighlightedCard";
import PageViewsBarChart from "./PageViewsBarChart";
import SessionsChart from "./SessionsChart";
import StatCard from "./StatCard";
import { useState, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
const fallbackData = [
  {
    title: 'Total Deposit',
    value: '$200.00',
    interval: 'All time',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
      
    ],
  },
  {
    title: 'Total Profit',
    value: '$0.00',
    interval: 'All time',
    trend: 'up',
    data: [
      220, 280, 250, 310, 290, 350, 330, 400, 380, 450, 420, 500, 480, 550, 530,
      600, 580, 650, 700, 680, 750, 730, 800, 780, 850, 900, 880, 950, 1000, 980,
    ],
  },
  {
    title: 'Total Balance',
    value: '$0.00',
    interval: 'Current',
    trend: 'up',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 820, 510, 730, 720, 810,
    ],
  },
];

export default function MainGrid() {
  const [userStats, setUserStats] = React.useState(null);
  const { currentUser } = useSelector((state) => state.user);

  // const loadUserStats = React.useCallback(async () => {
  //   if (currentUser) {
  //     try {
  //       const balance = await getUserBalance(currentUser.id);
  //       const pendingDeposits = await getPendingDeposits(currentUser.id);
  //       const totalPendingDeposits = pendingDeposits.reduce((sum, deposit) => sum + deposit.amount, 0);

  //       setUserStats([
  //         {
  //           title: 'Total Deposit',
  //           value: `$${balance.deposit.toFixed(2)}`,
  //           interval: 'All time',
  //           trend: 'up',
  //           data: fallbackData[0].data,
  //         },
  //         {
  //           title: 'Total Balance',
  //           value: `$${balance.total_balance.toFixed(2)}`,
  //           interval: 'Current',
  //           trend: 'up',
  //           data: fallbackData[2].data,
  //         },
  //         {
  //           title: 'Pending Deposits',
  //           value: `$${totalPendingDeposits.toFixed(2)}`,
  //           interval: 'Current',
  //           trend: 'up',
  //           data: fallbackData[2].data,
  //         },
  //       ]);
  //     } catch (error) {
  //       console.error('Failed to fetch user stats:', error);
  //       setUserStats(null);
  //     }
  //   }
  // }, [user]);

  const loadUserStats = React.useCallback(async () => {
    if (currentUser) {
      try {
        // Get the JWT token from your auth context or localStorage (depending on your setup)

        // Fetch user balance
        const balanceResponse = await fetch(
          `api/user/${currentUser._id}/balance`
        );
        const balance = await balanceResponse.json();
        console.log(balance);

        // Fetch pending deposits
        const pendingDepositsResponse = await fetch(
          `api/transactions/pending/${currentUser._id}`
        );
        const pendingDeposits = await pendingDepositsResponse.json();
        console.log(pendingDeposits);

        // Calculate total pending deposits
        const totalPendingDeposits = pendingDeposits.reduce(
          (sum, deposit) => sum + deposit.amount,
          0
        );

        // Update user stats state
        setUserStats([
          {
            title: "Total Deposit",
            value: `$${balance.deposit.toFixed(2)}`,
            interval: "All time",
            trend: "up",
            data: fallbackData[0].data,
          },
          {
            title: "Total Balance",
            value: `$${balance.total_balance.toFixed(2)}`,
            interval: "Current",
            trend: "up",
            data: fallbackData[2].data,
          },
          {
            title: "Pending Deposits",
            value: `$${totalPendingDeposits.toFixed(2)}`,
            interval: "Current",
            trend: "up",
            data: fallbackData[2].data,
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch user stats:", error);
        setUserStats(null);
      }
    }
  }, [currentUser]);
  React.useEffect(() => {
    // const FIVE_SECONDS_MS = 5 * 1000; // 5 seconds in milliseconds
    const FIVE_SECONDS_MS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

    const updateBalanceAndStats = async () => {
      if (currentUser) {
        try {
          // Fetch last load time from the server

          const lastLoadTimeResponse = await fetch(
            `api/user/${currentUser._id}/last-load-time`
          );
          const lastLoadTime = await lastLoadTimeResponse.json();
          console.log(lastLoadTime, "lastLoadTime");

          const currentTime = Date.now();
          const timeDiff = currentTime - lastLoadTime;
          const missedIntervals = Math.floor(timeDiff / FIVE_SECONDS_MS);

          if (missedIntervals > 0) {
            try {
              const response = await fetch(
                `api/user/${currentUser._id}/increase-balance`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    missedIntervals: missedIntervals, // Send the missedIntervals in the body
                  }),
                }
              );

              const data = await response.json(); // Parse the response JSON

              if (response.ok) {
                console.log("Balance increased:", data);
              } else {
                console.error("Error increasing balance:", data.message);
              }
            } catch (error) {
              console.error("Error sending request:", error);
            }
          }

          await fetch(`api/user/${currentUser._id}/last-load-time`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ timestamp: currentTime }),
          });
          console.log("Last load time updated successfully");

          // Fetch user stats after updating the last load time
          await loadUserStats();
        } catch (error) {
          console.error("Failed to update balance and stats:", error);
        }
      }
    };

    updateBalanceAndStats();

    // Set up interval to increase balance and update stats every 5 seconds
    const intervalId = setInterval(updateBalanceAndStats, FIVE_SECONDS_MS);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentUser, loadUserStats]);

  console.log(userStats, "userStats");
  
  const displayData = userStats || fallbackData;

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {displayData.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
