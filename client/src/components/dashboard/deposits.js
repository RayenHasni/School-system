import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './title';

const child1 = [
  {
    id: 0,
    name: 'XXXX XXXXX',
    bac: 'Bac Technique',
  },
];
const child2 = [
  {
    id: 0,
    name: 'XXXX XXXXX',
    bac: 'Bac Science',
  },
];
const child3 = [
  {
    id: 0,
    name: 'XXXX XXXXX',
    bac: '2eme Eco',
  },
];

export default function Deposits() {
  const location = useLocation();
  const pathname = location.pathname;

  const childInfo = function(pathname) {
    if (pathname === '/child1') {
      return child1;
    } else if (pathname === '/child2') {
      return child2;
    } else if (pathname === '/child3') {
      return child3;
    } else if (pathname === '/profile') {
      return [...child1, ...child2, ...child3];
    }
  }

  return (
    <React.Fragment>
      {childInfo(pathname).map((child) => (
        <React.Fragment key={child.id}>
          <Title>Student Name</Title>
          <Typography component="p" style={{ marginTop: '2vh' }} variant="h4">
            {child.name}
          </Typography>
          <Typography color="text.secondary" style={{ marginTop: '3vh' }} sx={{ flex: 1 }}>
            {child.bac}
          </Typography>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}