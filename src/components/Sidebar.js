
import "../App.css";
import { AiFillProduct } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import React from "react";
import { Drawer, Divider, Toolbar } from "@mui/material";

const drawerWidth = 50;

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AiFillHome />,
    },
    {
      path: "/add",
      name: "AddProduct",
      icon: <BiBarChartSquare />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <AiFillProduct />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <CiWallet />,
    },
  ];
  const drawer = (
    <div >
      <Divider />
      <Toolbar />

      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeclassName="active"
        >
          <div className="icon">{item.icon}</div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
