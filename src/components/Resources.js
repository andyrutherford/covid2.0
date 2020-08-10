import React from 'react';
import styled from 'styled-components';

import Card from '../components/UI/Card';

const ResourcesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Resources = () => {
  return (
    <Card>
      <ResourcesWrapper>
        <h3>Helpful Links</h3>
        <ul>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
        </ul>
      </ResourcesWrapper>
    </Card>
  );
};

export default Resources;
