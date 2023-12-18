import React from 'react';
import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Table Data
function createData(id, Day, Sub1, Sub2, Sub3, Sub4) {
  return { id, Day, Sub1, Sub2, Sub3, Sub4 };
}

const tablechild1 = [
  createData(
    0,
    'Monday',
    'Algorythm',
    'Maths',
    'Physics',
    'Algo',
  ),
  createData(
    1,
    'Tuesday',
    'Physics',
    'Maths',
    'Science',
    'Math',
  ),
  createData(2, 'Wednesday',
  'Sport',
  'Maths',
  'Science',
  'Electronics',),
  createData(
    3,
    'Thursday',
    'Sport',
    'Islam',
    'History',
    'Science',
  ),
  createData(
    4,
    'Friday',
    'Sport',
    'Maths',
    '///',
    '///',
  ),
  createData(2, 'Saturday',
  'Sport',
  'Maths',
  '///',
  '///',),
];

const tablechild2 = [
  createData(
    0,
    'Monday',
    'English',
    'Science',
    'History',
    'Art',
  ),
  createData(
    1,
    'Tuesday',
    'Science',
    'History',
    'English',
    'Geography',
  ),
  createData(
    2,
    'Wednesday',
    'Maths',
    'Geography',
    'Art',
    'Music',
  ),
  createData(
    3,
    'Thursday',
    'Maths',
    'Art',
    'Science',
    'Music',
  ),
  createData(
    4,
    'Friday',
    'Science',
    'Art',
    '///',
    '///',
  ),
  createData(
    2,
    'Saturday',
    'Maths',
    'Art',
    '///',
    '///',
  ),
];
const tablechild3 = [
  createData(
    0,
    'Monday',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
  ),
  createData(
    1,
    'Tuesday',
    'Chemistry',
    'Biology',
    'Physics',
    'Environmental Science',
  ),
  createData(
    2,
    'Wednesday',
    'Biology',
    'Environmental Science',
    'Physics',
    'Computer Science',
  ),
  createData(
    3,
    'Thursday',
    'Biology',
    'Environmental Science',
    'Chemistry',
    'Computer Science',
  ),
  createData(
    4,
    'Friday',
    'Biology',
    'Environmental Science',
    '///',
    '///',
  ),
  createData(
    2,
    'Saturday',
    'Biology',
    'Environmental Science',
    '///',
    '///',
  ),
];

export default function Charts() {
  const location = useLocation();
  const pathname = location.pathname;

  const rowBychild = function(pathname) {
    if (pathname === '/child1') {
      return tablechild1;
    } else if (pathname === '/child2') {
      return tablechild2;
    } else if (pathname === '/child3') {
      return tablechild3;
    }
    else {return tablechild1;}
  }

  return (
    <React.Fragment>
      <Title>Time Table</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>8h-10h</TableCell>
            <TableCell>10h-12h</TableCell>
            <TableCell>14h-16h</TableCell>
            <TableCell>16h-18h</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowBychild(pathname).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Day}</TableCell>
              <TableCell>{row.Sub1}</TableCell>
              <TableCell>{row.Sub2}</TableCell>
              <TableCell>{row.Sub3}</TableCell>
              <TableCell>{row.Sub4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}