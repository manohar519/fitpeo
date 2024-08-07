
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor: 'white', color: 'black' ,boxShadow:'0 2px 6px hsla(0, 0%, 88%, 0.954)'}}
    >
      <Toolbar>
        <IconButton style={{marginLeft:-15}}>
          <GridViewRoundedIcon
            color="secondary"
            style={{ height: 30, width: 30 }}
          />
        </IconButton>
        <div style={{ position: "relative", marginRight: "16px", flexGrow: 1 }}>
          <SearchBox/>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCHhDx5XpLGqOyxakJnFqBpAu-T4qs-mv4A&s"
            style={{height:30,width:30,borderRadius:30}}
            alt="logo"
          />{" "}
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
