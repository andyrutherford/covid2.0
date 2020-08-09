import React from 'react';

export const ChartIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-chart-line'
    width={props.size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <line x1='4' y1='19' x2='20' y2='19' />
    <polyline points='4 15 8 9 12 11 16 6 20 10' />
  </svg>
);

export const WorldIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-world'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='9' />
    <line x1='3.6' y1='9' x2='20.4' y2='9' />
    <line x1='3.6' y1='15' x2='20.4' y2='15' />
    <path d='M11.5 3a17 17 0 0 0 0 18' />
    <path d='M12.5 3a17 17 0 0 1 0 18' />
  </svg>
);

export const FlagIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-flag'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <line x1='5' y1='5' x2='5' y2='21' />
    <line x1='19' y1='5' x2='19' y2='14' />
    <path d='M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0' />
    <path d='M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0' />
  </svg>
);

export const MapIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-map-pin'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='11' r='3' />
    <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z' />
  </svg>
);
