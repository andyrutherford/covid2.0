import React from 'react';
import styled from 'styled-components';

import { Chart } from 'react-google-charts';

import Card from '../components/UI/Card';

const CountryListWrapper = styled.div`
  .bold-green-font {
    font-weight: bold;
    color: green;
    padding: 10px 0;
    margin: 10px 0;
  }

  .bold-font {
    font-weight: bold;
    padding: 10px 0;
    margin: 10px 0;
  }

  .right-text {
    text-align: right;
    padding: 10px 0;
    margin: 10px 0;
  }

  .header-row {
    font-size: 18px;
    padding: 10px 0;
    margin: 10px 0;
  }

  .italic-darkblue-font {
    font-style: italic;
    color: darkblue;
    padding: 10px 0;
    margin: 10px 0;
  }

  .italic-purple-font {
    font-style: italic;
    color: purple;
    padding: 10px 0;
    margin: 10px 0;
  }

  .cell {
    padding: 20px 0;
  }

  .gold-border {
    border: 3px solid gold;
  }
`;

const CountryList = ({ list }) => {
  console.log(list);
  return (
    <Card>
      <CountryListWrapper>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType='Table'
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'string', label: 'Country' },
              { type: 'number', label: 'Cases' },
              { type: 'number', label: 'Deaths' },
              { type: 'number', label: 'Recovered' },
              { type: 'number', label: 'New Cases' },
              { type: 'number', label: 'New Deaths' },
              { type: 'number', label: 'New Recovered' },
            ],
            ...list,
          ]}
          options={{
            showRowNumber: true,
            cssClassNames: {
              headerRow: 'header-row',
              tableRow: '',
              selectedTableRow: 'orange-background large-font',
              hoverTableRow: '',
              headerCell: '',
              tableCell: '',
              rowNumberCell: 'cell',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </CountryListWrapper>
    </Card>
  );
};

export default CountryList;
