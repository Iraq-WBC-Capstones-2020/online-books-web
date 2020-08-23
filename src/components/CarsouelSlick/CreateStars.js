import React from 'react';
import PropTypes from 'prop-types';
import { round } from 'mathjs';
function CreateStars({ rate, starSize }) {
  const stars = [];
  rate = round(rate, 1);
  const firstDigit = round(rate - parseInt(rate), 1);
  let secondDigit = firstDigit.toString().split('.')[1];
  const Size =
    starSize === 'small'
      ? 'fa-sm lightBlue mrSmallStars'
      : 'fa-md mr-1 text-yellow-300';

  let createStars = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<icon className={`fa fa-star ${Size}`} key={i}></icon>);
      } else {
        if (secondDigit >= 5) {
          secondDigit = 0;
          stars.push(
            <icon className={`fas fa-star-half-alt ${Size}`} key={i}></icon>
          );
        } else {
          stars.push(
            <icon className={` fa fa-star font-light ${Size}`} key={i}></icon>
          );
        }
      }
    }
    return stars;
  };
  return <>{createStars()}</>;
}
CreateStars.propTypes = {
  rate: PropTypes.number,
};
export default CreateStars;
