import React, { useState, useEffect } from 'react';
import { MDBIcon } from 'mdbreact';
import './MyStyle.scss';

const MAXIMUM_TABS_TO_SHOW = 9;

function CategoryList({ items }) {
  const [activeBubble, setActiveBubble] = useState(0);
  const [category, setCategory] = useState('');
  const [newItems, setNewItems] = useState([]);

  

  //light the bubble by pink color
  const isActive = (index) => {
    if (activeBubble === index) {
      return 'textPink';
    }
  };

  useEffect(() => {
    if (items.length < MAXIMUM_TABS_TO_SHOW) {
      const emptyItemsToAdd = MAXIMUM_TABS_TO_SHOW - items.length;
      const emptyItems = Array(emptyItemsToAdd).fill({ name: false });
      setNewItems([...items, ...emptyItems]);
    } else {
      setNewItems(items);
    }
  }, [items]);

  return (
    <>
      {newItems.map((item, index) =>
        item.name ? (
          <div
            className="text-left lightBlack h-10 mb-1"
            key={index}
            data-value={item.name}
            onClick={(e) => {
              setActiveBubble(index);
              setCategory(e.target.dataset.value);
            }}
          >
            {/* //turn the light to pink for the item that choose and the other to inactive */}
            <MDBIcon
              icon="circle"
              className={`p-3 sizeBubble ${isActive(index)}`}
            />
            <p
              className="parg1 d-inline hoverCursor"
              data-value={item.name}
              onClick={(e) => {
                setActiveBubble(index);

                setCategory(e.target.dataset.value);
              }}
            >
              {item.name}
            </p>
          </div>
        ) : (
          <div md="12" className="lightBlack h-10 mb-1"></div>
        )
      )}
    </>
  );
}
export default CategoryList;
