
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Chart from 'react-apexcharts';


const GoalChart = () => {
  const data = {
    options: {
      chart: {},
      plotOptions: {
        radialBar: {
          track: {
            background: '#f2f2f2',
            strokeWidth: '97%',
          },
          dataLabels: {
            show: true,
            value: {
              show: true,
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Goal',
              color: '#373d3f',
            },
          },
        },
      },
    },
    series: [70],
  };

  return (
    <Card
      className="grid-item"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: 0,
        width: '100%',
        maxWidth: '300px',
        boxSizing: 'border-box',
        // margin: '20px auto',
        marginTop:5
      }}
      elevation={2}
    >
      <Box>
        <CardContent sx={{ p: '10px' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="subtitle2">Net Profit</Typography>
            </Box>
          </Stack>
          <div>
            <Typography variant="h5" fontWeight="700">
              $6759.29
            </Typography>
            <Stack direction="row" alignItems="center">
              <IconButton>
                <ArrowDropUpIcon style={{ color: 'green' }} />
              </IconButton>
              <Typography variant="subtitle2" fontWeight="600" color="green">
                3%
              </Typography>
            </Stack>
          </div>
        </CardContent>
      </Box>
      <Box>
        <Chart options={data.options} series={data.series} type="radialBar" width="200" />
      </Box>
    </Card>
  );
};

export default GoalChart;

