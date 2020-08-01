import React from 'react';

function HighLight(props) {
  return (
    <div className="buttomText mycolorPink  text-black font-bold py-3/4 text-center  leading-loose font-black-300 highlight ">
     {props.text}
    </div>
  );
}
export default HighLight;
