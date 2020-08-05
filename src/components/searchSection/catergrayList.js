import React, { useState, useRef, useEffect } from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import './myStyle.scss';
import { range } from 'mathjs';

function CatergrayList(props) {
  /*  let data = props.items;
  let itemsTags = [];
  let numberOfItems = data.length;
  let arrayOfIndex = range(0, numberOfItems)._data;
  let [ActiveBubble, setActiveBubble] = useState(0);
  let [, setCatogray] = useState('');
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  let emptyItems = () => {
    for (let i = 1; i <= 9 - numberOfItems; i++) {
      itemsTags.push(
        <MDBCol md="12" className=" text-left lightBlack h-10 mb-1 "></MDBCol>
      );
    }
  };
 
  //light the bubble for the popular in first time when open the webapp
  useEffect(() => lightBubble(), []);

  let lightBubble = () => {
    //turn the Bubble light for the active item (clicked)
    if (refs.current[ActiveBubble] !== undefined) {
      refs.current[ActiveBubble].classList.add('textPink');
    }
  };

  let turnOffBubbles = () => {
    //make the other Bubble items unactive
    const otherDomItems = arrayOfIndex.filter((item) => item !== ActiveBubble);
    otherDomItems.forEach((itemDom) => {
      if(refs.current[itemDom]!==undefined){
      const classItem = refs.current[itemDom].classList.value;
      if (classItem == 'textPink') {
        refs.current[itemDom].classList.remove('textPink');
      }}
    });
  };

  let handelBubble = () => {
    lightBubble();

    //get the catogray or author name for the active item to display the books related by that
    if (refs.current[ActiveBubble] !== undefined) {
      setCatogray(refs.current[ActiveBubble].children[1].innerHTML);
    }
    turnOffBubbles();
  };

  let typeItems = () => {
    itemsTags = data.map((item, index) => {
      return (
        <MDBCol md="12" className=" text-left lightBlack h-10 mb-1">
          <div
            key={index}
            ref={addToRefs}
            //turn the light to pink for the item that choose and the other to unactive
            onClick={() => {
              setActiveBubble(index);
              handelBubble();
            }}
          >
            <MDBIcon icon="circle" className={`p-3 sizeBubble`} key={index} />
            <p
              className="parg1 d-inline hoverCursor"
              onClick={() => {
                setActiveBubble(index);
                handelBubble();
              }}
            >
              {item.name}
            </p>
          </div>
        </MDBCol>
      );
    });
  };

  typeItems();
  emptyItems();
*/

  let data = props.items;
  let itemsTags = [];
  let numberOfItems = data.length;
  let [ActiveBubble, setActiveBubble] = useState(0);
  let [catogray, setCatogray] = useState('');
  console.log(catogray);

  let handelBubble = (index) => {
    if (ActiveBubble == index) {
      return 'textPink';
    }
  };

  let emptyItems = () => {
    for (let i = 1; i <= 9 - numberOfItems; i++) {
      itemsTags.push(<div md="12" className="lightBlack h-10 mb-1 "></div>);
    }
  };

  let typeItems = () => {
    itemsTags = data.map((item, index) => {
      return (
        <div
          className="text-left lightBlack h-10 mb-1"
          key={index}
          //turn the light to pink for the item that choose and the other to unactive
          onClick={(e) => {
            setActiveBubble(index);
            console.log(e.target.children[1].innerHTML);
          }}
        >
          <MDBIcon
            icon="circle"
            className={`p-3 sizeBubble ${handelBubble(index)};`}
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
