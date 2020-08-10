import React, { useState } from 'react';
import { MDBIcon } from 'mdbreact';
import './MyStyle.scss';

function CatergrayList({ items }) {
  let itemsTags = [];
  let CatogryItem;
  const numberOfItems = items.length;
  const [ActiveBubble, setActiveBubble] = useState(0);
  const [Catogray, setCatogray] = useState('');

  console.log(Catogray);

  //light the bubble by pink color
  const isActive = (index) => {
    if (ActiveBubble === index) {
      return 'textPink';
    }
  };

  const emptyItems = () => {
    for (let i = 1; i <= 9 - numberOfItems; i++) {
      itemsTags.push(<div md="12" className="lightBlack h-10 mb-1"></div>);
    }
  };

  const typeItems = () => {
    itemsTags = items.map((item, index) => {
      return (
        <div
          className="text-left lightBlack h-10 mb-1"
          key={index}
          //turn the light to pink for the item that choose and the other to unactive
        >
          <MDBIcon
            icon="circle"
            className={`p-3 sizeBubble ${isActive(index)}`}
          />
          <p
            className="parg1 d-inline hoverCursor"
            onClick={(e) => {
              setActiveBubble(index);
              CatogryItem = e.target;
              setCatogray(CatogryItem.innerHTML);
            }}
          >
            {item.name}
          </p>
        </div>
      );
    });
  };

  typeItems();
  emptyItems();
  return itemsTags;
}
export default CatergrayList;
