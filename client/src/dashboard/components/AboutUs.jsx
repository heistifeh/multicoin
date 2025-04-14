import * as React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
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

export default function AboutUs({ id }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: theme.palette.mode === 'dark'
                  ? '2px 2px 4px rgba(0,0,0,0.5)'
                  : '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              About Our AI Trading Platform
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              We're a team of passionate developers, data scientists, and financial experts dedicated to revolutionizing the world of trading through artificial intelligence.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Our platform combines cutting-edge machine learning algorithms with real-time market data to provide you with unparalleled insights and trading opportunities. We believe in empowering traders of all levels with the tools they need to succeed in today's fast-paced markets.
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              sx={{
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: `0 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'}`,
                '&:hover': {
                  boxShadow: `0 6px 8px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.2)'}`,
                },
              }}
              onClick={handleSignUp}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="AI Trading Platform"
              image="https://i.postimg.cc/3r1s6kwb/big.png"
              sx={{
                aspectRatio: '16 / 9',
                borderRadius: theme.shape.borderRadius,
                boxShadow: `0 10px 20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'}`,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}
