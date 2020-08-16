import React from 'react';
import styled from 'styled-components';

import { Chart } from 'react-google-charts';

import Card from '../components/UI/Card';

const CountryListWrapper = styled.div`
  a {
    color: #3b5892;
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

  .table-row {
    display: flex;
    justify-content: space-between;
  }
  .cell {
    padding: 20px 0;
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
            allowHtml: true,
            showRowNumber: true,
            cssClassNames: {
              headerRow: 'header-row',
              tableRow: '',
              selectedTableRow: 'large-font',
              hoverTableRow: '',
              headerCell: '',
              tableCell: '',
              rowNumberCell: 'cell',
            },
            chartArea: {
              width: '200%',
              left: '20',
              top: '20',
              height: '110',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </CountryListWrapper>
    </Card>
  );
};

export default CountryList;
