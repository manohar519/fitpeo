import React from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/material";

export const data = [
  ["Year", "Activity"],
  ["5", "5k"],
  ["5", "10k"],
  ["9", "5k"],
  ["9", "15k"],
  ["11", "10k"],
  ["11", "5k"],
  ["13", "15k"],
  ["15", "5k"],
  ["15", "15k"],
  ["17", "5k"],
  ["19", "15k"],
];

export const options = {
  chart: {
    title: "Activity",
    subtitle: "Weekly",
  },
};

export default function Barchart() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 6px 8px #bbb9b9ec",
        borderRadius: 2,
        margin: "10px 0px",
        padding: 1,
        width: "100%",
      }}
    >
      <Chart
        chartType="Bar"
        width="100%"
        height="250px"
        data={data}
        options={options}
      />
    </Box>
  );
}
