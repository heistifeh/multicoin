import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StatCard from './StatCard.jsx';
import SessionsChart from './SessionsChart.jsx';
import PageViewsBarChart from './PageViewsBarChart.jsx';
import CustomTraderView from './CustomTraderView.jsx';
import CustomTradeScroller from './CustomTradeScroller.jsx';
import ChartEarningByCountry from './ChartEarningByCountry.jsx';
import ChartUserByCountry from './ChartUserByCountry.jsx';

const data = [
  {
    title: 'Active Users',
    value: '125k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 240, 220, 260, 240, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460,
      480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760,
    ],
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      2.8, 2.9, 3.0, 3.1, 3.0, 3.2, 3.1, 3.3, 3.2, 3.4, 3.3, 3.5, 3.4, 3.6, 3.5,
      3.7, 3.6, 3.8, 3.7, 3.9, 3.8, 4.0, 3.9, 4.1, 4.0, 4.2, 4.1, 4.3, 4.2, 4.4,
    ],
  },
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      300, 290, 310, 300, 320, 310, 330, 320, 340, 330, 350, 340, 360, 350, 370,
      360, 380, 370, 390, 380, 400, 390, 410, 400, 420, 410, 430, 420, 440, 430,
    ],
  },
];

export default function Analytics() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Key Metrics
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      
      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        User Engagement
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>

      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Market Overview
      </Typography>
      <Grid>
        <CustomTradeScroller />
      </Grid>

      <Typography component="h2" variant="h6" sx={{ my: 2 }}>
        Detailed Analysis
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomTraderView />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <ChartEarningByCountry />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
