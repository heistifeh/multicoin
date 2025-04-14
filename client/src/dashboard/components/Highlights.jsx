import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Optimized Performance',
    description:
      'Our mining software adapts to your hardware, maximizing efficiency and boosting your crypto earnings.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Robust Architecture',
    description:
      'Built on a solid foundation, our app ensures stable and continuous mining operations.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'User-Friendly Interface',
    description:
      'Easily manage your mining operations with our intuitive dashboard, suitable for both beginners and experts.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Advanced Algorithms',
    description:
      'Stay ahead with our cutting-edge mining algorithms, designed to maximize your returns across various cryptocurrencies.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: '24/7 Support',
    description:
      'Our dedicated team is always available to assist you with any mining-related issues or questions.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Detailed Analytics',
    description:
      'Track your mining performance with precision through our comprehensive analytics and reporting tools.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'text.primary',
        bgcolor: 'background.paper',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Key Features
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Discover why our crypto mining app stands out: optimized performance,
            robust architecture, user-friendly design, and advanced algorithms.
            Enjoy round-the-clock support and detailed analytics for your mining operations.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.default',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
