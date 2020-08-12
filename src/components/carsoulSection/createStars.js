import React from 'react';
import PropTypes from 'prop-types';
import { round } from 'mathjs';
function CreateStars({ rate }) {
  const stars = [];
  rate = round(rate, 1);
  const firstDigit = round(rate - parseInt(rate), 1);
  let secondDigit = firstDigit.toString().split('.')[1];

  let createStars = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<icon className="fa fa-star text-yellow-300 mr-1" key={i}></icon>);
      } else {
        if (secondDigit >= 5 && secondDigit <= 7) {
          secondDigit = 0;
          stars.push(
            <icon className="fas fa-star-half-alt text-yellow-300 mr-1" key={i}></icon>
          );
        } else {
          stars.push(
            <icon className="fa fa-star text-yellow-300 mr-1 font-light" key={i}></icon>
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
