import React from 'react';
import { CardItem } from '../CardItem/CardItem';

import './CardGroup.css';

export const CardGroup = ({ weatherData }) => {
  return (
    <div className='card-group'>
      {weatherData?.map((data, id) => (
        <CardItem data={data} key={id} />
      ))}
    </div>
  );
};
