import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, time, teacher, subject) {
  return { id, date, name, time, teacher, subject };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    '12h-13h',
    'XXXX',
    'Algo',
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    '8h-9h',
    'XXXX',
    'Math',
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '11h-12h', 'XXXX', 'React'),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'XXXX',
    'Mechanics',
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'XXXX',
    'Electronics',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Absence</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell align="right">Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{`Mr./Ms. ${row.teacher}`}</TableCell>
              <TableCell align="right">{`${row.subject}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See More
      </Link>
    </React.Fragment>
  );
}