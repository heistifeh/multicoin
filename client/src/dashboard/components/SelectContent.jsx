import * as React from "react";
import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import Select, { selectClasses } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import { Box } from "@mui/material";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: 6, 
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `0.5px solid ${(theme.vars || theme).palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

export default function SelectContent() {
  const [company, setCompany] = React.useState("");

  const handleChange = (event) => {
    console.log(event, " event");
    setCompany(event.target.value);
  };

  return (
    <Box
      sx={{
        maxHeight: 56,
        width: 215,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e0e0e0",
        // borderRadius: 1,
        overflow: "hidden",
        fontSize: "14px",
        backgroundColor: "background.paper",
      }}
    >
      {/* <ListSubheader sx={{ pt: 1, pb: 1 }}>Production</ListSubheader> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 1.5,
          py: 1,
        }}
      >
        <ListItemAvatar>
          <Avatar alt="multicoin">
            <img src="/logo1.jpg" alt="multicoin" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Multicoin Capital" />
      </Box>
    </Box>
  );
}
