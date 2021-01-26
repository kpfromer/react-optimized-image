import React from 'react';
import { Svg } from 'kpfromer-react-optimized-image';
import styled from 'styled-components';
import Image from './image.svg';

const styles = { imgs: {} };

styles.imgs.StyledSvg = styled(Svg)`
  background-color: red;
`;

export default () => (
  <div>
    <styles.imgs.StyledSvg src={Image} />
  </div>
);
