import React, { useState } from 'react';
import { MDBIcon } from 'mdbreact';
import './myStyle.scss';

function CatergrayList({ items }) {
  let itemsTags = [];
  let numberOfItems = items.length;
  let [ActiveBubble, setActiveBubble] = useState(0);
  let [setCatogray] = useState('');

  //light the bubble by pink color
  const handelBubble = (index) => {
    if (ActiveBubble === index) {
      return 'textPink';
    }
  };

  const emptyItems = () => {
    for (let i = 1; i <= 9 - numberOfItems; i++) {
      itemsTags.push(<div md="12" className="lightBlack h-10 mb-1"></div>);
    }
  };
  const getItemList = (e) => {
    if (e.target !== undefined) {
      setCatogray(e.target.children[1].innerHTML);
    }
  };

  const typeItems = () => {
    itemsTags = items.map((item, index) => {
      return (
        <div
          className="text-left lightBlack h-10 mb-1 "
          key={index}
          //turn the light to pink for the item that choose and the other to unactive
          onClick={(e) => {
            setActiveBubble(index);
            getItemList(e);
          }}
        >
          <MDBIcon
            icon="circle"
            className={`p-3 sizeBubble ${handelBubble(index)}`}
          />
          <p className="parg1 d-inline hoverCursor">{item.name}</p>
        </div>
      );
    });
  };

  typeItems();
  emptyItems();
  return itemsTags;
}
export default CatergrayList;
