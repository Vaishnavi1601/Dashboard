import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, IconButton
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';

const rows = [
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'cleared', report: true },
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'open', report: false },
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'cleared', report: true },
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'open', report: false },
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'cleared', report: true },
  { assets:"Ge ECG Machine",code: 'AG-7645698', department: 'Blood Center', dateTime: '03/04/2023 @ 12.30', downTime: '10 hr : 24 m : 32 s', status: 'open', report: false },
];

const CustomButton = styled(Button)(({ status }) => ({
  backgroundColor: status === 'cleared' ? 'transparent' : "#FF6B00",
  color: status === 'cleared' ? 'blue' : 'white',
  fontWeight: 600,
  fontSize: '15px',
  '&:hover': {
    backgroundColor: status === 'cleared' ? 'transparent' : 'darkorange',
  },
  borderRadius: "50px",
}));

const ClearedText = styled('span')({
  color: '#4690FF',
  fontWeight: 600,
  fontSize: '15px',
  textTransform: "capitalize"
});

const StatusButton = ({ status }) => (
  status === 'cleared' ? (
    <ClearedText>{status}</ClearedText>
  ) : (
    <CustomButton status={status} variant="contained">
      {status}
    </CustomButton>
  )
);

const ReportIcon = ({ report }) => (
  report ? <IconButton><DownloadIcon /></IconButton> : null
);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2), 
}));

const HeaderTableCell = styled(StyledTableCell)({
  fontWeight: 'bold', 
});

export default function CustomTable() {
  return (
    <TableContainer component={Paper} style={{marginTop: "30px", position:"relative", left:"40px", width:"1012px", marginBottom:"10px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <HeaderTableCell>Assets</HeaderTableCell>
            <HeaderTableCell>Code</HeaderTableCell>
            <HeaderTableCell>Department</HeaderTableCell>
            <HeaderTableCell>Date & Time</HeaderTableCell>
            <HeaderTableCell>DownTime</HeaderTableCell>
            <HeaderTableCell>Status</HeaderTableCell>
            <HeaderTableCell>Report</HeaderTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell>{row.assets}</StyledTableCell>
              <StyledTableCell>{row.code}</StyledTableCell>
              <StyledTableCell>{row.department}</StyledTableCell>
              <StyledTableCell>{row.dateTime}</StyledTableCell>
              <StyledTableCell>{row.downTime}</StyledTableCell>
              <StyledTableCell><StatusButton status={row.status} /></StyledTableCell>
              <StyledTableCell><ReportIcon report={row.report} /></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
