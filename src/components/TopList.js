import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

import Card from '../components/UI/Card';
import {
  PlusIcon,
  DeathIcon,
  VirusIcon,
  HeartIcon,
} from '../components/UI/Icons';

const TopListWrapper = styled.div`


  li {
    border-top: 0.5px solid lightgrey;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li:first-child {
      border: none;
  }

  .list-header {
    display: flex;
    align-items: center;
    padding-left: 6px;
  }

  ${(props) =>
    props.type &&
    props.type === 'confirmed' &&
    css`
      svg {
        stroke: ${(props) => props.theme.colors.casesColor};
        fill: ${(props) => props.theme.colors.casesColor};
      }
    `}
    ${(props) =>
      props.type &&
      props.type === 'deaths' &&
      css`
        svg {
          stroke: ${(props) => props.theme.colors.deathsColor};
          fill: ${(props) => props.theme.colors.deathsColor};
        }
      `}
        ${(props) =>
          props.type &&
          props.type === 'recovered' &&
          css`
            svg {
              stroke: ${(props) => props.theme.colors.recoveredColor};
              fill: ${(props) => props.theme.colors.recoveredColor};
            }
          `}
          ${(props) =>
            props.type &&
            props.type === 'newCases' &&
            css`
              svg {
                stroke: ${(props) => props.theme.colors.casesColor};
              }
            `}
            ${(props) =>
              props.type &&
              props.type === 'newDeaths' &&
              css`
                svg {
                  stroke: ${(props) => props.theme.colors.deathsColor};
                }
              `}
                ${(props) =>
                  props.type &&
                  props.type === 'newRecovered' &&
                  css`
                    svg {
                      stroke: ${(props) => props.theme.colors.recoveredColor};
                    }
                  `}
`;

const TopList = ({ countryList, type, title }) => {
  return (
    <Card>
      <TopListWrapper type={type}>
        <div className='list-header'>
          {type === 'confirmed' && <VirusIcon size={32} />}
          {type === 'deaths' && <DeathIcon size={32} />}
          {type === 'recovered' && <HeartIcon size={32} />}
          {type === 'newCases' && <PlusIcon size={32} />}
          {type === 'newDeaths' && <PlusIcon size={32} />}
          {type === 'newRecovered' && <PlusIcon size={32} />}
          <h3>&nbsp;{title}</h3>
        </div>
        <div className='list'>
          <ul>
            {countryList.map((c, i) => {
              return (
                <li key={i}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <ReactCountryFlag
                      countryCode={c.countryCode}
                      svg
                      style={{
                        fontSize: '1.5em',
                        lineHeight: '1.5em',
                        marginRight: '0.5em',
                        objectFit: 'cover',
                        borderRadius: '100px',
                      }}
                    />
                    <Link to={`/country/${c.slug}`}>{c.country}</Link>
                  </span>
                  <span>{c[type].toLocaleString()}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </TopListWrapper>
    </Card>
  );
};

export default TopList;
