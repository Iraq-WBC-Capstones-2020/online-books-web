import React from 'react';

function HighLight(props) {
  return (
    <div className="buttomText bg-black  pt-1 pt-md-2 text-white font-bold text-center  highlight ">
      {props.text}
    </div>
  );
}

export default HighLight;
