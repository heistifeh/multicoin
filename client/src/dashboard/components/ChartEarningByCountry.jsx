import * as React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import {
  IndiaFlag,
  UsaFlag,
  BrazilFlag,
  GlobeFlag,
} from '../internals/components/CustomIcons.jsx';

const data = [
    { label: 'USA', value: 900000 },
    { label: 'Brazil', value: 700000 },
  { label: 'India', value: 650000 },
  { label: 'Other', value: 350000 },
];

const countries = [
  {
    name: 'USA',
    value: 90,
    price:396,
    flag:<UsaFlag /> ,
    color: '#FF6384',
  },
  {
    name: 'Brazil',
    value: 70,
    price:220,
    flag: <BrazilFlag />,
    color: '#FFCE56',
  },
  {
    name: 'India',
    value: 65,
    price:160,
    flag: <IndiaFlag />,
    color: '#36A2EB',
  },
  
  {
    name: 'Other',
    value: 35,
    price:90,
    flag: <GlobeFlag />,
    color: '#4BC0C0',
  },
];

// ... (StyledText component remains unchanged)

function PieCenterLabel({ primaryText, secondaryText }) {
  // ... (remains unchanged)
}

PieCenterLabel.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

export default function ChartEarningByCountry() {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2">
          Earnings by country
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80,
            }}
            series={[
              {
                data,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 2,
                highlightScope: { faded: 'global', highlighted: 'item' },
              },
            ]}
            height={260}
            width={260}
            slotProps={{
              legend: { hidden: true },
            }}
          >
            <PieCenterLabel primaryText="$1M" secondaryText="Total" />
          </PieChart>
        </Box>
        {countries.map((country, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{ alignItems: 'center', gap: 2, pb: 2 }}
          >
            {country.flag}
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: '500' }}>
                  {country.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  ${(country.price / 100 * 1000000).toLocaleString()}
                </Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                aria-label="Earnings by country"
                value={country.value}
                sx={{
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: country.color,
                  },
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
}
