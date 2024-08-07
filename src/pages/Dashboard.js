import React from 'react';
import Grid1 from '../components/Cards';
import Grid2 from '../components/GoalChart';
import Grid4 from '../components/Dishes';
import Barchart from '../components/Barchart';
import TableCard from '../components/Table';
import Feedback from '../components/Feedback';
import './dashboard.css'; 
import { Box, Grid, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 1 }}>
      <Typography variant='h5' fontWeight='bold'>Dashboard</Typography>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={8} md={8}>
        <Grid1 />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Grid2 />
      </Grid>
    </Grid>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={8}>
        <Barchart/>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={4}>
        <Grid4/>
      </Grid>
    </Grid>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={8}>
        <TableCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={4}>
        <Feedback/>
      </Grid>
    </Grid>
  </Box>

  );
};

export default Dashboard;
