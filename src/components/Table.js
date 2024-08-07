import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar, Chip } from '@mui/material';
import './table.css';
import avatar1 from '../assests/images.jpg'; 
import avatar2 from '../assests/image.png';
import avatar3 from '../assests/boy.png';
import avatar4 from '../assests/girl.png';
import avatar5 from '../assests/ph.png';
import avatar6 from '../assests/boyph.png';

const data = [
  { name: 'Wade Warren', company:12322, amount:344,  status: 'Delivered', avatar: avatar1 },
  { name: 'Jane Cooper', company: 34343, amount:342,  status: 'Delivered', avatar: avatar2 },
  { name: 'Guy hawkins', company: 343332, amount:144,  status: 'Cancelled', avatar: avatar3 },
  { name: 'Kriston Watson', company: 345434,amount:122, status: 'Cancelled', avatar: avatar4 },
  { name: 'Cody Fisher', company: 343333, amount:344,  status: 'Delivered', avatar: avatar5 },
  { name: 'Savannah Nguyen', company: 343333, amount:344,  status: 'Delivered', avatar: avatar6 },
];

const getStatusChip = (status) => {
  if (status === 'Delivered') {
    return <Chip label="Delivered" style={{ backgroundColor: '#e0f7fa', color: '#00796b' }} />;
  } else {
    return <Chip label="Cancelled" style={{ backgroundColor: '#ffebee', color: '#c62828' }} />;
  }
};

const TableCard = () => {
  return (
    <TableContainer component={Paper} className="table-card" style={{  alignContent: "center",
      boxShadow: "0 6px 8px #bbb9b9ec",
      borderRadius: 10,
      margin:'10px 0px 0px 0px',
      padding:5}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="name-cell">
                  <Avatar alt={row.name} src={row.avatar} className="avatar" />
                  <Typography>{row.name}</Typography>
                </div>
              </TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>${row.amount}</TableCell>
              <TableCell>{getStatusChip(row.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableCard