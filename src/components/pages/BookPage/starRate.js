import React from 'react';
import PropTypes from 'prop-types';
function CreateStars({ rate }) {
  let stars = [];
  let firstDigit = rate - parseInt(rate);
  let secondDigit = firstDigit.toString().split('.')[1];
  let createStars = () => {
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<icon className="fa fa-star text-yellow-300 mr-1 "></icon>);
      } else {
        if (secondDigit === 5) {
          secondDigit = 0;
          stars.push(
            <icon className="fas fa-star-half-alt text-yellow-300 mr-1 "></icon>
          );
        } else {
          stars.push(
            <icon className="fa fa-star text-yellow-300 mr-1 font-light "></icon>
          );
        }
      }
    }
    return stars;
  };
  return <>{createStars()}</>;
}
CreateStars.propTypes = {
  rate: PropTypes.string,
};
export default CreateStars;
