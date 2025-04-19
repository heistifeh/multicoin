import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/dashboard" },
  {
    text: "Deposit",
    icon: <AssignmentRoundedIcon />,
    path: "/dashboard/deposit",
  },
  {
    text: "Withdraw",
    icon: <AssignmentRoundedIcon />,
    path: "/dashboard/withdraw",
  },
  {
    text: "Analytics",
    icon: <AnalyticsRoundedIcon />,
    path: "/dashboard/analytics",
  },
  {
    text: "Transactions",
    icon: <AssignmentRoundedIcon />,
    path: "/dashboard/transactions",
  },
];

const secondaryListItems = [
  // { text: "Settings", icon: <SettingsRoundedIcon /> },
  {
    text: "About",
    icon: <InfoRoundedIcon />,
    path: "https://multicoin.capital/about/",
    action: "",
  },
  {
    text: "Feedback",
    icon: <HelpRoundedIcon />,
    path: "",
    action: "openChat",
  },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = React.useCallback(
    (path, action) => {
      if (path === "") {
        if (window.Tawk_API && window.Tawk_API.maximize) {
          window.Tawk_API.maximize();
          // Set up listener for when chat is closed/minimized
          window.Tawk_API.onChatMinimized = function () {
            navigate("/dashboard");
          };
        } else {
          console.warn("Tawk is not ready yet");
        }
      }

      const isExternal =
        path.startsWith("http://") || path.startsWith("https://");
      if (isExternal) {
        window.open(path, "_blank"); // opens in a new tab, or use `window.location.href = path` for same tab
      } else {
        navigate(path); // internal navigation
      }
    },
    [navigate]
  );
  useEffect(() => {
    return () => {
      if (window.Tawk_API) {
        window.Tawk_API.onChatMinimized = null;
      }
    };
  }, []);
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={`main-${item.path}`} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path, item.action)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item) => (
          <ListItem key={`secondary-${item.path}`} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
