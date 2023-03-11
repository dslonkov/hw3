import React from 'react';
import Star from './Star'

const Stars = ({ count }) => {

  const arr = [...Array(count).keys()];

  return  (
    <ul className="card-body-stars u-clearfix">
      {
        arr.map((item) => (
          <li key={item}>
            <Star />
          </li>
        ))
      }
    </ul>
  )
};

export default Stars;
