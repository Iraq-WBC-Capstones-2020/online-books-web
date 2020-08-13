import React from 'react';
import PropTypes from 'prop-types';

function HighlightedSectionLabel(props) {
  return (
    <div className="buttomText bg-black  pt-1 pt-md-2 text-white font-bold text-center  highlight ">
      {props.text}
    </div>
  );
}
HighlightedSectionLabel.propTypes = {
  text: PropTypes.string,
};
export default HighlightedSectionLabel;
