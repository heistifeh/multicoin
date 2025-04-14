import React from "react";
import AppTheme from "../../shared-theme/AppTheme.jsx";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './components/Header.jsx';
import AppNavbar from "./components/AppNavbar.jsx";
import SideMenu from './components/SideMenu.jsx';

import MainGrid from './components/MainGrid.jsx';
import Toast from './components/Toast';

import {
  chartsCustomizations,
  dataGridCustomizations,
  // datePickersCustomizations,
  treeViewCustomizations,
} from '../theme/customizations';
export default function Dashboard() {
  const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    // ...datePickersCustomizations,
    ...treeViewCustomizations,
  };
  return (
    <>
      {/* <AppTheme {...props} themeComponents={xThemeComponents}> */}
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <Routes key={location.pathname}>
              <Route index element={<MainGrid />} />
              {/* <Route path="deposit" element={<DepositScreen />} />
              <Route path="withdraw" element={<WithdrawalScreen />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="assets" element={<AssetScreen />} /> */}
              {/* Add routes for Settings, About, and Feedback if needed */}
            </Routes>
          </Stack>
        </Box>
      </Box>
      <Toast />
       
      {/* </AppTheme> */}
    </>
  );
}
