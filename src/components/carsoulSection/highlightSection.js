import React from 'react';
import PropTypes from 'prop-types';

function HighLight(props) {
  return (
    <div className="buttomText bg-black  pt-1 pt-md-2 text-white font-bold text-center  highlight ">
      {props.text}
    </div>
  );
}
HighLight.propTypes = {
  text: PropTypes.string,
};
export default HighLight;
