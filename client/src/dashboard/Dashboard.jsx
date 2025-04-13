import React from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import AppTheme from "../../shared-theme/AppTheme.jsx";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';
export default function Dashboard() {
  const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
  };
  return (
    <>
      <AppTheme {...props} themeComponents={xThemeComponents}>
        <AppNavbar />
        <h1>Dashboard Route Loaded</h1>
        <p>This confirms the route is working!</p>
      </AppTheme>
    </>
  );
}
