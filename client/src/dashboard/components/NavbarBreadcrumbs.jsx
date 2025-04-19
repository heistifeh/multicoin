import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { useLocation } from "react-router-dom";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation(); // Get the current location (route)

  // Get the current path (e.g., "/home" or "/dashboard")
  const currentPath =
    location.pathname.split("/dashboard")[1].replace("/", "") || "Home"; // Default to "Home" if the path is empty

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">Dashboard</Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.primary", fontWeight: 600 }}
      >
        {currentPath.charAt(0).toUpperCase() + currentPath.slice(1)} 
      </Typography>
    </StyledBreadcrumbs>
  );
}
