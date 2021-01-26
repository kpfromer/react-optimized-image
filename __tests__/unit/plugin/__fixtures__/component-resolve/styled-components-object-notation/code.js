import React from 'react';
import { Svg } from 'kpfromer-react-optimized-image';
import styled from 'styled-components';
import Image from './image.svg';

const styles = {};

styles.StyledSvg = styled(Svg)`
  background-color: red;
`;

export default () => (
  <div>
    <styles.StyledSvg src={Image} />
  </div>
);
