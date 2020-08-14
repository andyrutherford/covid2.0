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

export const RightArrowIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-arrow-right'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <line x1='5' y1='12' x2='19' y2='12' />
    <line x1='13' y1='18' x2='19' y2='12' />
    <line x1='13' y1='6' x2='19' y2='12' />
  </svg>
);

export const BookmarkIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-bookmark'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
  </svg>
);

export const PlusIcon = ({ size, stroke = '#000000' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-circle-plus'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke={stroke}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='9' />
    <line x1='9' y1='12' x2='15' y2='12' />
    <line x1='12' y1='9' x2='12' y2='15' />
  </svg>
);

export const PercentIcon = ({ size }) => (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 512 512'
    width={size}
  >
    <g>
      <g>
        <g>
          <path
            d='M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
				s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512c46.813,0,92.617-12.758,132.462-36.893
				c9.447-5.724,12.467-18.022,6.744-27.469c-5.724-9.449-18.021-12.467-27.469-6.744C334.144,461.244,295.505,472,256,472
				c-119.103,0-216-96.897-216-216S136.897,40,256,40s216,96.897,216,216c0,42.589-12.665,84.044-36.626,119.884
				c-6.139,9.182-3.672,21.603,5.51,27.742c9.184,6.141,21.604,3.672,27.742-5.51C497.002,355.674,512,306.53,512,256
				C512,187.62,485.371,123.333,437.02,74.98z'
          />
          <path
            d='M194.3,373.594c3.024,1.635,6.281,2.41,9.493,2.41c7.109,0,13.994-3.801,17.611-10.493l108.108-200
				c5.253-9.718,1.634-21.853-8.083-27.104c-9.719-5.253-21.854-1.633-27.104,8.083l-108.108,200
				C180.964,356.207,184.583,368.342,194.3,373.594z'
          />
          <path
            d='M223,186c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S223,213.57,223,186z M173,196c-5.514,0-10-4.486-10-10
				c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10C183,191.514,178.514,196,173,196z'
          />
          <path
            d='M338,376c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S310.43,376,338,376z M338,316c5.514,0,10,4.486,10,10
				c0,5.514-4.486,10-10,10c-5.514,0-10-4.486-10-10C328,320.486,332.486,316,338,316z'
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
