import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChartUserByCountry from "./ChartUserByCountry";
import HighlightedCard from "./HighlightedCard.jsx";
import PageViewsBarChart from "./PageViewsBarChart.jsx";
import SessionsChart from "./SessionsChart.jsx";
import StatCard from "./StatCard.jsx";
import CustomTraderView from "./CustomTraderView.jsx";
import CustomTradeScroller from "./CustomTradeScroller.jsx";
import ChartEarningByCountry from "./ChartEarningByCountry.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import {
  getUserBalance,
  getPendingDeposits,
  increaseBalance,
  getLastLoadTime,
  updateLastLoadTime,
} from "../utils/database.jsx";

const fallbackData = [
  {
    title: "Total Deposit",
    value: "$0.00",
    interval: "All time",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Total Profit",
    value: "$0.00",
    interval: "All time",
    trend: "up",
    data: [
      220, 280, 250, 310, 290, 350, 330, 400, 380, 450, 420, 500, 480, 550, 530,
      600, 580, 650, 700, 680, 750, 730, 800, 780, 850, 900, 880, 950, 1000,
      980,
    ],
  },
  {
    title: "Total Balance",
    value: "$0.00",
    interval: "Current",
    trend: "up",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 820, 510, 730, 720, 810,
    ],
  },
];

export default function MainGrid() {
  const [userStats, setUserStats] = React.useState(null);
  // const { user } = useAuth();
  const user = {
    id: 1,
    name: "John Doe",
  };
  const loadUserStats = React.useCallback(async () => {
    if (user) {
      try {
        const balance = await getUserBalance(user.id);
        const pendingDeposits = await getPendingDeposits(user.id);
        const totalPendingDeposits = pendingDeposits.reduce(
          (sum, deposit) => sum + deposit.amount,
          0
        );

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
  }, [user]);

  React.useEffect(() => {
    // const FIVE_SECONDS_MS = 5 * 1000; // 5 seconds in milliseconds
    const FIVE_SECONDS_MS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

    const updateBalanceAndStats = async () => {
      if (user) {
        try {
          const lastLoadTime = await getLastLoadTime(user.id);
          const currentTime = Date.now();
          const timeDiff = currentTime - lastLoadTime;
          const missedIntervals = Math.floor(timeDiff / FIVE_SECONDS_MS);

          if (missedIntervals > 0) {
            await increaseBalance(user.id, missedIntervals);
          }

          await updateLastLoadTime(user.id, currentTime);
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
  }, [user, loadUserStats]);

  const displayData = userStats || fallbackData;

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={2} sx={{ mb: (theme) => theme.spacing(2) }}>
        {displayData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} lg={3}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} lg={3}>
          <HighlightedCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <SessionsChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PageViewsBarChart />
        </Grid>
      </Grid>

      <Grid>
        <Typography component="h2" variant="h6" sx={{ my: 2 }}>
          Market Overview
        </Typography>
        {/* <CustomizedDataGrid /> */}
        <CustomTradeScroller />
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Market Overview
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomTraderView />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <ChartEarningByCountry />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>

      {/* <Copyright sx={{ my: 4 }} /> */}
    </Box>
  );
}
