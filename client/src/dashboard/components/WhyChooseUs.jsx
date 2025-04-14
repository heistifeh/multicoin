import * as React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(45deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`
    : `linear-gradient(45deg, ${theme.palette.grey[100]} 0%, ${theme.palette.common.white} 100%)`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    : '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(255, 255, 255, 0.18)'
    : '1px solid rgba(255, 255, 255, 0.5)',
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(135deg, ${theme.palette.grey[800]} 0%, ${theme.palette.grey[900]} 100%)`
    : `linear-gradient(135deg, ${theme.palette.common.white} 0%, ${theme.palette.grey[100]} 100%)`,
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 10px 20px rgba(0, 0, 0, 0.4)'
      : '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& > svg': {
    fontSize: 48,
    color: theme.palette.primary.main,
    filter: `drop-shadow(0 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'})`,
  },
}));

const reasons = [
  {
    title: 'AI-Powered Insights',
    description: 'Our advanced AI algorithms analyze market trends to provide you with data-driven trading decisions.',
    icon: <AutoGraphIcon />,
  },
  {
    title: 'Real-Time Execution',
    description: 'Lightning-fast trade execution to capitalize on market opportunities as they arise.',
    icon: <SpeedIcon />,
  },
  {
    title: 'Risk Management',
    description: 'Sophisticated risk assessment tools to protect your investments and optimize your portfolio.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Performance Tracking',
    description: 'Comprehensive analytics and reporting to monitor your trading performance and strategy effectiveness.',
    icon: <TrendingUpIcon />,
  },
];

export default function WhyChooseUs({ id }) {
  const theme = useTheme();

  return (
    <StyledBox
      id={id}
      sx={{
        py: 8,
        px: 4,
        my: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textShadow: theme.palette.mode === 'dark'
              ? '2px 2px 4px rgba(0,0,0,0.5)'
              : '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Why Choose Our AI Trading Platform
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary" 
          paragraph
          sx={{ mb: 6 }}
        >
          Harness the power of AI to revolutionize your trading strategy and maximize your returns.
        </Typography>
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Item elevation={3}>
                <IconWrapper>{reason.icon}</IconWrapper>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {reason.title}
                </Typography>
                <Typography>{reason.description}</Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledBox>
  );
}
