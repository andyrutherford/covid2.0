import React from 'react';

export const LogoIcon = ({ size }) => (
  <svg
    id='Layer_3'
    enableBackground='new 0 0 64 64'
    viewBox='0 0 64 64'
    width={size}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g>
      <path
        d='m59 29c-.841 0-1.598.348-2.143.905l-6.055-.505c-.461-3.363-1.797-6.44-3.778-9.002l4.976-6.398c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2l-6.398 4.977c-2.562-1.981-5.639-3.317-9.002-3.778l-.505-6.055c.557-.546.905-1.303.905-2.144 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 .841.348 1.598.905 2.143l-.505 6.055c-3.363.461-6.44 1.797-9.002 3.778l-6.398-4.976c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2l4.977 6.398c-1.981 2.562-3.317 5.639-3.778 9.002l-6.055.505c-.546-.557-1.303-.905-2.144-.905-1.657 0-3 1.343-3 3s1.343 3 3 3c.841 0 1.598-.348 2.143-.905l6.055.505c.461 3.363 1.797 6.44 3.778 9.002l-4.976 6.398c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2l6.398-4.977c2.562 1.981 5.639 3.317 9.002 3.778l.505 6.055c-.557.546-.905 1.303-.905 2.144 0 1.657 1.343 3 3 3s3-1.343 3-3c0-.841-.348-1.598-.905-2.143l.505-6.055c3.363-.461 6.44-1.797 9.002-3.778l6.398 4.976c0 1.105.895 2 2 2s2-.895 2-2-.895-2-2-2l-4.977-6.398c1.981-2.562 3.317-5.639 3.778-9.002l6.055-.505c.546.557 1.303.905 2.144.905 1.657 0 3-1.343 3-3s-1.343-3-3-3z'
        fill='#3b5892'
      />
      <g fill='#4c6cb5'>
        <circle cx='22' cy='31' r='3' />
        <circle cx='36' cy='41' r='4' />
        <circle cx='37' cy='24' r='2' />
      </g>
      <g>
        <path
          d='m26 22h-2v-1c0-1.103.897-2 2-2v-1h2v1c0 1.103-.897 2-2 2z'
          fill='#4c6cb5'
        />
      </g>
      <g>
        <path
          d='m26 43h-2v-1c0-1.103.897-2 2-2v-1h2v1c0 1.103-.897 2-2 2z'
          fill='#4c6cb5'
        />
      </g>
      <g>
        <path
          d='m44 34h-2v-1c0-1.103.897-2 2-2v-1h2v1c0 1.103-.897 2-2 2z'
          fill='#4c6cb5'
        />
      </g>
    </g>
  </svg>
);

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

export const BarChartIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-chart-bar'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <rect x='3' y='12' width='6' height='8' rx='1' />
    <rect x='9' y='8' width='6' height='12' rx='1' />
    <rect x='15' y='4' width='6' height='16' rx='1' />
    <line x1='4' y1='20' x2='18' y2='20' />
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

export const GlobeIcon = ({ size }) => (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 480.1 480.1'
    style={{ enableBackground: 'new 0 0 480.1 480.1' }}
    width={size}
  >
    <g>
      <g>
        <path
          d='M240.135,0.05C144.085,0.036,57.277,57.289,19.472,145.586l-2.992,0.992l1.16,3.48
			c-49.776,122.766,9.393,262.639,132.159,312.415c28.673,11.626,59.324,17.594,90.265,17.577
			c132.548,0.02,240.016-107.416,240.036-239.964S372.684,0.069,240.135,0.05z M428.388,361.054l-12.324-12.316V320.05
			c0.014-1.238-0.26-2.462-0.8-3.576l-31.2-62.312V224.05c0-2.674-1.335-5.172-3.56-6.656l-24-16
			c-1.881-1.256-4.206-1.657-6.4-1.104l-29.392,7.344l-49.368-21.184l-6.792-47.584l18.824-18.816h40.408l13.6,20.44
			c1.228,1.838,3.163,3.087,5.344,3.448l48,8c1.286,0.216,2.604,0.111,3.84-0.304l44.208-14.736
			C475.855,208.053,471.889,293.634,428.388,361.054z M395.392,78.882l-13.008,8.672l-36.264-7.256l-23.528-7.832
			c-1.44-0.489-2.99-0.551-4.464-0.176l-29.744,7.432l-13.04-4.344l9.664-19.328h27.056c1.241,0.001,2.465-0.286,3.576-0.84
			l27.68-13.84C362.382,51.32,379.918,63.952,395.392,78.882z M152.44,33.914l19.2,12.8c0.944,0.628,2.01,1.048,3.128,1.232
			l38.768,6.464l-3.784,11.32l-20.2,6.744c-1.809,0.602-3.344,1.83-4.328,3.464l-22.976,38.288l-36.904,22.144l-54.4,7.768
			c-3.943,0.557-6.875,3.93-6.88,7.912v24c0,2.122,0.844,4.156,2.344,5.656l13.656,13.656v13.744l-33.28-22.192l-12.072-36.216
			C57.68,98.218,99.777,56.458,152.44,33.914z M129.664,296.21l-36.16-7.24l-13.44-26.808v-18.8l29.808-29.808l11.032,22.072
			c1.355,2.712,4.128,4.425,7.16,4.424h51.472l21.672,36.12c1.446,2.407,4.048,3.879,6.856,3.88h22.24l-5.6,28.056l-30.288,30.288
			c-1.503,1.499-2.349,3.533-2.352,5.656v20l-28.8,21.6c-2.014,1.511-3.2,3.882-3.2,6.4v28.896l-9.952-3.296l-14.048-35.136V304.05
			C136.065,300.248,133.389,296.97,129.664,296.21z M105.616,419.191C30.187,362.602-1.712,264.826,25.832,174.642l6.648,19.936
			c0.56,1.687,1.666,3.14,3.144,4.128l39.88,26.584l-9.096,9.104c-1.5,1.5-2.344,3.534-2.344,5.656v24
			c-0.001,1.241,0.286,2.465,0.84,3.576l16,32c1.108,2.21,3.175,3.784,5.6,4.264l33.6,6.712v73.448
			c-0.001,1.016,0.192,2.024,0.568,2.968l16,40c0.876,2.185,2.67,3.874,4.904,4.616l24,8c0.802,0.272,1.642,0.412,2.488,0.416
			c4.418,0,8-3.582,8-8v-36l28.8-21.6c2.014-1.511,3.2-3.882,3.2-6.4v-20.688l29.656-29.656c1.115-1.117,1.875-2.54,2.184-4.088
			l8-40c0.866-4.333-1.944-8.547-6.277-9.413c-0.515-0.103-1.038-0.155-1.563-0.155h-27.472l-21.672-36.12
			c-1.446-2.407-4.048-3.879-6.856-3.88h-51.056l-13.744-27.576c-1.151-2.302-3.339-3.91-5.88-4.32
			c-2.54-0.439-5.133,0.399-6.936,2.24l-10.384,10.344V192.05c0-2.122-0.844-4.156-2.344-5.656l-13.656-13.656v-13.752l49.136-7.016
			c1.055-0.153,2.07-0.515,2.984-1.064l40-24c1.122-0.674,2.062-1.614,2.736-2.736l22.48-37.464l21.192-7.072
			c2.393-0.785,4.271-2.662,5.056-5.056l8-24c1.386-4.195-0.891-8.72-5.086-10.106c-0.387-0.128-0.784-0.226-1.186-0.294
			l-46.304-7.72l-8.136-5.424c50.343-16.386,104.869-14.358,153.856,5.72l-14.616,7.296h-30.112c-3.047-0.017-5.838,1.699-7.2,4.424
			l-16,32c-1.971,3.954-0.364,8.758,3.59,10.729c0.337,0.168,0.685,0.312,1.042,0.431l24,8c1.44,0.489,2.99,0.551,4.464,0.176
			l29.744-7.432l21.792,7.256c0.312,0.112,0.633,0.198,0.96,0.256l40,8c2.08,0.424,4.244-0.002,6.008-1.184l18.208-12.144
			c8.961,9.981,17.014,20.741,24.064,32.152l-39.36,13.12l-42.616-7.104l-14.08-21.12c-1.476-2.213-3.956-3.547-6.616-3.56h-48
			c-2.122,0-4.156,0.844-5.656,2.344l-24,24c-1.782,1.781-2.621,4.298-2.264,6.792l8,56c0.403,2.769,2.223,5.126,4.8,6.216l56,24
			c1.604,0.695,3.394,0.838,5.088,0.408l28.568-7.144l17.464,11.664v27.72c-0.014,1.238,0.26,2.462,0.8,3.576l31.2,62.312v30.112
			c0,2.122,0.844,4.156,2.344,5.656l16.736,16.744C344.921,473.383,204.549,493.415,105.616,419.191z'
        />
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

export const DeathIcon = ({ size }) => (
  <svg
    version='1.1'
    x='0px'
    y='0px'
    viewBox='0 0 100 100'
    style={{ enableBackground: 'new 0 0 100 100' }}
    width={size}
  >
    <switch>
      <foreignObject
        requiredExtensions='http://ns.adobe.com/AdobeIllustrator/10.0/'
        x='0'
        y='0'
        width='1'
        height='1'
      />
      <g i='self'>
        <g>
          <g>
            <path d='M92,60.8c-0.3-0.9-0.7-1.6-1.3-2.1c0.5-1.4,0.4-2.8-0.4-4.1c-1.2-1.7-3.4-3.3-7.6-0.6c-1.7,1.1-2.8,3-3.3,4.3      c-0.4,1-1.2,1.8-2.1,2.2L50,74.1L22.8,60.5c-1-0.5-1.7-1.3-2.1-2.2c-0.6-1.3-1.6-3.2-3.3-4.3c-4.2-2.7-6.4-1.2-7.6,0.6      c-0.8,1.2-1,2.7-0.4,4.1c-0.5,0.5-1,1.2-1.3,2.1c-0.5,1.3-0.4,2.6,0.1,3.6c0.5,1.1,1.6,2,3,2.4c1.1,0.4,2.7,0.3,4.6-0.2      c1.1-0.3,2.2-0.2,3.2,0.3l22.7,11.3l-10.1,5c-1,0.5-2.1,0.6-3.2,0.3c-1.3-0.4-3.3-0.6-5.2,0.1c-4.6,1.7-4.8,4.5-4.1,6.4      c0.5,1.4,1.6,2.4,3,2.8c0.1,0.8,0.4,1.5,0.9,2.3c0.8,1.1,1.8,1.9,3,2.1c0.3,0,0.5,0.1,0.8,0.1c1,0,2-0.3,3-1      c1-0.7,1.8-1.9,2.4-3.6c0.4-1.1,1.2-2.1,2.3-2.6L50,82.5l15.6,7.8c1,0.5,1.8,1.4,2.3,2.6c0.6,1.7,1.4,2.9,2.4,3.6c1,0.7,2,1,3,1      c0.3,0,0.5,0,0.8-0.1c1.2-0.2,2.2-1,3-2.1c0.5-0.8,0.8-1.5,0.9-2.3c1.4-0.4,2.5-1.4,3-2.8c0.7-2,0.6-4.7-4.1-6.4      c-1.9-0.7-3.9-0.4-5.3-0.1c-1.1,0.3-2.2,0.2-3.2-0.3l-10.1-5L81,67c1-0.5,2.2-0.6,3.2-0.3c1.9,0.5,3.5,0.6,4.6,0.2      c1.4-0.5,2.4-1.3,3-2.4C92.4,63.3,92.4,62.1,92,60.8z' />
          </g>
          <g>
            <path d='M32.5,49.9c1,0.8,1.7,1.8,1.8,3.1l0.4,3.8c0.2,2.3,1.9,4.3,4.1,4.9c7.3,1.9,15,1.9,22.3,0c2.3-0.6,3.9-2.5,4.1-4.9      l0.4-3.8c0.1-1.2,0.8-2.3,1.8-3.1c6-4.6,9.9-12.1,9.9-22.2C77.3,9.7,65.1,2.5,50,2.5S22.7,9.7,22.7,27.7      C22.7,37.8,26.5,45.3,32.5,49.9z M54.6,32.6c0.4-3.5,2.9-6.1,7.4-5.5c4.5,0.6,6.3,3.7,5.8,7.1c-0.4,3.5-2.3,6-7.4,5.5      C55.3,39.2,54.1,36.1,54.6,32.6z M45.7,48.8l2.9-6.8c0.5-1.2,2.3-1.2,2.8,0l2.9,6.8c0.6,1.4-0.4,3-2,3h-4.7      C46.1,51.7,45.1,50.2,45.7,48.8z M38,27.2c4.5-0.6,7,2,7.4,5.5c0.4,3.5-0.7,6.6-5.8,7.1c-5.1,0.5-7-2-7.4-5.5      C31.8,30.8,33.5,27.8,38,27.2z' />
          </g>
        </g>
      </g>
    </switch>
  </svg>
);

export const VirusIcon = ({ size }) => (
  <svg
    id='Layer_1'
    enableBackground='new 0 0 512 512'
    height={size}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m480 224c-11.82 0-22.16 6.44-27.7 16h-29.06c-3.26-34.338-16.889-65.697-37.727-90.886l20.612-20.612c10.603 2.854 22.516.104 30.894-8.261 12.48-12.48 12.48-32.78 0-45.26s-32.78-12.48-45.26 0c-8.349 8.359-11.109 20.226-8.261 30.894l-20.612 20.612c-25.189-20.838-56.548-34.467-90.886-37.727v-29.06c9.56-5.54 16-15.88 16-27.7 0-17.65-14.35-32-32-32s-32 14.35-32 32c0 11.82 6.44 22.16 16 27.7v29.06c-34.338 3.26-65.697 16.889-90.886 37.727l-20.612-20.612c2.848-10.669.087-22.536-8.261-30.894-12.48-12.48-32.78-12.48-45.26 0s-12.48 32.78 0 45.26c8.374 8.36 20.286 11.117 30.894 8.261l20.612 20.612c-20.838 25.189-34.467 56.548-37.727 90.886h-29.06c-5.54-9.56-15.88-16-27.7-16-17.65 0-32 14.35-32 32s14.35 32 32 32c11.82 0 22.16-6.44 27.7-16h29.06c3.26 34.338 16.889 65.697 37.727 90.886l-20.612 20.612c-10.668-2.848-22.536-.087-30.894 8.261-12.48 12.48-12.48 32.78 0 45.26 12.503 12.503 32.803 12.457 45.26 0 8.349-8.359 11.109-20.226 8.261-30.894l20.612-20.612c25.189 20.838 56.548 34.467 90.886 37.727v29.06c-9.56 5.54-16 15.88-16 27.7 0 17.65 14.35 32 32 32s32-14.35 32-32c0-11.82-6.44-22.16-16-27.7v-29.06c34.338-3.26 65.697-16.889 90.886-37.727l20.612 20.612c-2.848 10.668-.087 22.536 8.261 30.894 12.457 12.457 32.757 12.503 45.26 0 12.48-12.48 12.48-32.78 0-45.26-8.359-8.349-20.226-11.109-30.894-8.261l-20.612-20.612c20.838-25.189 34.467-56.548 37.727-90.886h29.06c5.54 9.56 15.88 16 27.7 16 17.65 0 32-14.35 32-32s-14.35-32-32-32zm-277 24c-15.44 0-28-12.56-28-28s12.56-28 28-28 28 12.56 28 28-12.56 28-28 28zm69 96c-17.65 0-32-14.35-32-32s14.35-32 32-32 32 14.35 32 32-14.35 32-32 32zm56-112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24z' />
  </svg>
);

export const HeartIcon = ({ size }) => (
  <svg
    version='1.1'
    x='0px'
    y='0px'
    viewBox='0 0 100 100'
    enableBackground='new 0 0 100 100'
    width={size}
  >
    <path d='M73.009,41.712c-11.569,0-20.953,9.379-20.953,20.95c0,11.572,9.384,20.953,20.953,20.953s20.954-9.381,20.954-20.953  C93.963,51.092,84.578,41.712,73.009,41.712z M86.522,67.543H77.89v8.635c0,1.105-0.897,2-2.003,2h-5.755  c-1.108,0-2.004-0.895-2.004-2v-8.635h-8.635c-1.104,0-2-0.895-2-2.002v-5.756c0-1.105,0.896-2.002,2-2.002h8.635V49.15  c0-1.106,0.896-2.004,2.004-2.004h5.755c1.105,0,2.003,0.897,2.003,2.004v8.633h8.633c1.104,0,2.003,0.896,2.003,2.002v5.756  C88.525,66.648,87.627,67.543,86.522,67.543z' />
    <path d='M47.853,62.664c0-13.893,11.264-25.157,25.157-25.157c2.733,0,5.362,0.442,7.826,1.248  c-0.268-12.404-9.349-22.369-20.521-22.369c-6.99,0-13.165,3.902-16.873,9.86c-3.709-5.958-9.883-9.86-16.873-9.86  c-11.34,0-20.533,10.266-20.533,22.93c0,5.005,1.437,9.636,3.873,13.407c0,0,11.721,19.332,33.533,29.141  c3.193-1.436,6.164-3.08,8.92-4.834C49.522,72.955,47.853,68.006,47.853,62.664z' />
  </svg>
);
