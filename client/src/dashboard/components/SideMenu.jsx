import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectContent";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import OptionsMenu from "./OptionsMenu";
import CheckIcon from "@mui/icons-material/Check";

import { useDispatch, useSelector } from "react-redux";
const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu({ verifiedState }) {
  const { loading, error } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
        {/* <CardAlert /> */}
        {/* {currentUser && !loading && (
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Balance: ${currentUser?.total_balance.toFixed(2)}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Profit: ${currentUser?.total_profit.toFixed(2)}
            </Typography>
          </Box>
        )} */}
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt={currentUser?.username || "Guest"}
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", mr: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: "16px", mr: 1 }}
            >
              {currentUser?.username || "Guest"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.5,
                borderRadius: 20,
                backgroundColor: verifiedState ? "success.main" : "error.main",
                color: "white",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              {verifiedState ? (
                <>
                  <CheckIcon sx={{ mr: 0.5 }} /> Verified
                </>
              ) : (
                "Not Verified"
              )}
            </Box>
          </Box>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {currentUser?.email || "Not signed in"}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
