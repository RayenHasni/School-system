import * as React from 'react';
import { useLocation } from 'react-router-dom';
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

const abschild1 = [
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
const abschild2 = [
  createData(
    0,
    '17 Mar, 2019',
    'John Lennon',
    '14h-15h',
    'XXXX',
    'Physics',
  ),
  createData(
    1,
    '17 Mar, 2019',
    'Ringo Starr',
    '9h-10h',
    'XXXX',
    'Biology',
  ),
  createData(2, '17 Mar, 2019', 'George Harrison', '13h-14h', 'XXXX', 'Chemistry'),
  createData(
    3,
    '17 Mar, 2019',
    'Paul McCartney',
    '15h-16h',
    'XXXX',
    'Computer Science',
  ),
  createData(
    4,
    '16 Mar, 2019',
    'Bruce Springsteen',
    '16h-17h',
    'XXXX',
    'Music',
  ),
 ];
 const abschild3 = [
  createData(
    0,
    '18 Mar, 2019',
    'Elvis Presley',
    '10h-11h',
    'XXXX',
    'Mathematics',
  ),
  createData(
    1,
    '18 Mar, 2019',
    'Paul McCartney',
    '11h-12h',
    'XXXX',
    'Art',
  ),
  createData(2, '18 Mar, 2019', 'Tom Scholz', '12h-13h', 'XXXX', 'History'),
  createData(
    3,
    '18 Mar, 2019',
    'Michael Jackson',
    '13h-14h',
    'XXXX',
    'English',
  ),
  createData(
    4,
    '17 Mar, 2019',
    'Bruce Springsteen',
    '14h-15h',
    'XXXX',
    'Geography',
  ),
 ];
 


export default function Orders() {
  const location = useLocation();
  const pathname = location.pathname;

  const absBychild = function(pathname) {
    if (pathname === '/child1') {
      return abschild1;
    } else if (pathname === '/child2') {
      return abschild2;
    } else if (pathname === '/child3') {
      return abschild3;
    }
    else {return abschild1;}
  }
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
          {absBychild(pathname).map((row) => (
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
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See More
      </Link>
    </React.Fragment>
  );
}