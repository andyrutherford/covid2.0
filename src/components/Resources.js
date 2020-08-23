import React from 'react';
import styled from 'styled-components';

import Card from '../components/UI/Card';

import { BookmarkIcon, RightArrowIcon } from './UI/Icons';
import { resources } from '../utils/resources';

const ResourcesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }

  a:hover {
    text-decoration: underline;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const Resources = () => {
  return (
    <Card border='none'>
      <ResourcesWrapper>
        <div className='header'>
          <BookmarkIcon size={40} />
          <h3>Helpful Links</h3>
        </div>

        <ul>
          {resources.map((r, i) => (
            <li key={i}>
              <a href={r.url} target='_blank' rel='noopener noreferrer'>
                {r.text}
              </a>
              <RightArrowIcon size={20} />
            </li>
          ))}
        </ul>
      </ResourcesWrapper>
    </Card>
  );
};

export default Resources;
