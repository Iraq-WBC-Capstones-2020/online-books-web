import React from 'react';

function HighLight(props) {
  return (
    <div className="buttomText bg-black lg:w-64 pt-2 text-white font-bold text-center  highlight ">
     {props.text}
    </div>
  );
}
export default HighLight;
