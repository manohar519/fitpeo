import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import message from "../assests/ic_glass_message.png";
import glass from "../assests/ic_glass_bag.png";
import user from "../assests/ic_glass_users.png";
import buy from "../assests/ic_glass_buy.png";
import "./grid1.css";

const cardData = [
  {
    icon: glass,
    alt: "Total Orders",
    title: "Total Orders",
    count: "75",
    percentage: "3%",
    trend: "up",
    iconColor: "green",
  },
  {
    icon: user,
    alt: "Total Delivered",
    title: "Total Delivered",
    count: "70",
    percentage: "3%",
    trend: "down",
    iconColor: "blue",
  },
  {
    icon: buy,
    alt: "Total Cancelled",
    title: "Total Cancelled",
    count: "05",
    percentage: "3%",
    trend: "up",
    iconColor: "orange",
  },
  {
    icon: message,
    alt: "Total Revenue",
    title: "Total Revenue",
    count: "$12k",
    percentage: "3%",
    trend: "down",
    iconColor: "red",
  },
];

const Cards = () => {
  return (
    <Box className="dashboard-container" sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              className="card"
              sx={{
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                maxWidth: 300,
              }}
            >
              <Box
                className="card-content"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.alt}
                  className={`icon ${card.iconColor}`}
                  sx={{ height: 40, width: 40, borderRadius: 1, mb: 1 }}
                />
                <Typography variant="body2">{card.title}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="h4">{card.count}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: card.trend === "up" ? "green" : "red",
                    }}
                  >
                    {card.trend === "up" ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
                    <Typography variant="body2">{card.percentage}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
