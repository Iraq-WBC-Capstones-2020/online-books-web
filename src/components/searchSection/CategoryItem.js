import React from 'react';
import { MDBIcon } from 'mdbreact';
import './searchSectionStyle.scss';

function CategoryItem({ item, isActive, setActiveBubble }) {
  return (
    <div
      className="text-left lightBlack h-10 mb-1"
      data-value={item.name}
      onClick={(e) => {
        setActiveBubble();
      }}
    >
      {/* //turn the light to pink for the item that choose and the other to inactive */}
      <MDBIcon
        icon="circle"
        className={`p-3 sizeBubble ${isActive ? 'textPink' : 'lightBlackText'}`}
      />

      <p
        className="parg1 d-inline hoverCursor"
        data-value={item.name}
        onClick={(e) => {
          setActiveBubble();
        }}
      >
        {item.name}
      </p>
    </div>
  );
}

export default CategoryItem;
