import React from 'react';

const { Svg, Img } = require('kpfromer-react-optimized-image');

export default () => (
  <div>
    <Svg src={require('./image.svg')} />
    <Img src={require('./image.jpg')} webp />
  </div>
);
