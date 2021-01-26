import React from 'react';
import Img, { Svg } from 'kpfromer-react-optimized-image';

export default () => (
  <div>
    <Svg src={require('./image.svg')} />
    <Img src={require('./image.png')} webp />
  </div>
);
