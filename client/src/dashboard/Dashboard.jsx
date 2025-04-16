import * as React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./components/AppNavbar";
import Header from "./components/Header";
import MainGrid from "./components/MainGrid";
import SideMenu from "./components/SideMenu";
import AssetScreen from "./components/AssetScreen";
import AppTheme from "../shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "./theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};
import { useDispatch, useSelector } from "react-redux";
import DepositScreen from "./components/DepositScreen";
import WithdrawalScreen from "./components/WithdrawalScreen";
import Analytics from "./components/Analytics";

export default function Dashboard(props) {
  const { loading, error } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  //cehck if the user ID is verified
  const isIdVerified = currentUser.isIdVerified;
  console.log(currentUser.email);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
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
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {!isIdVerified && (
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  bgcolor: "warning.light",
                  border: "1px solid",
                  borderColor: "warning.main",
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Box component="span" sx={{ mr: 1 }}>
                  Your account is not verified yet.
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                  onClick={() => navigate("/verify")}
                >
                  Click here to verify your account.
                </Box>
              </Box>
            )}

            <Header />
            <Routes key={location.pathname}>
              <Route index element={<MainGrid />} />
              <Route path="deposit" element={<DepositScreen />} />
              <Route path="withdraw" element={<WithdrawalScreen />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="assets" element={<AssetScreen />} />
            </Routes>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
