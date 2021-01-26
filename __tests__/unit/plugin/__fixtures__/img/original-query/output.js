import React from 'react';
import Img from 'kpfromer-react-optimized-image';
import Image from './image.png';
export default () => (
  <div>
    <Img
      src={require('./image.png?original')}
      original
      sizes={[400, 800]}
      rawSrc={{
        fallback: {
          400: {
            1: require('./image.png?original&url&width=400'),
          },
          800: {
            1: require('./image.png?original&url&width=800'),
          },
        },
      }}
    />
  </div>
);
