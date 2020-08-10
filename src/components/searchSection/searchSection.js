import React, { useState } from 'react';
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBInput,
  MDBIcon,
  MDBFormInline,
} from 'mdbreact';
import './MyStyle.scss';
import CatergrayList from './CatergrayList';

function SearchSection() {
  const catograysBook = [
    { name: 'Popular' },
    { name: 'Biographies &Memoirs' },
    { name: 'Literature & Fiction' },
    { name: 'Business&Investing' },
    { name: 'History' },
  ];
  const authorNames = [
    { name: 'zeena kareem' },
    { name: 'zainab azzam' },
    { name: 'sara ahmed' },
    { name: 'dunia tarq' },
  ];
  const [searchInputValue, setsearchInputValue] = useState('');
  //we use number 2 as default value to make the BOOKS choosen in first time when we open the website
  const [activeItem, setActiveItem] = useState(2);
  const [data, setData] = useState(catograysBook);

  const handelColor = (index) => {
    if (activeItem === index) {
      return 'textPink';
    }
  };

  return (
    <>
      <MDBContainer className="bg-black p-0 ">
        <MDBRow around>
          {/*SEARCH BOX PART */}

          <MDBCol
            size="8"
            md="10"
            lg="10"
            className="mycolorPink columnSearchBooks p-0 h-12 z-depth-4"
          >
            <MDBFormInline className="searchBox d-flex justify-content-around">
              <MDBInput
                hint="Find Your Book"
                type="text"
                className="text-black  mb-md-3 form-control"
                onChange={(e) => setsearchInputValue(e.target.value)}
                containerClass="active-pink"
              />
              <MDBIcon
                icon="search"
                size="lg"
                className="text-black hoverCursor pb-3 mb-md-1"
                onClick={() => {}}
              />
            </MDBFormInline>

            {/*  spin */}
          </MDBCol>

          {/* SEARCH BY PART FOR Authors AND Books*/}
          <MDBCol md="12" className="text-center pb-3 text-white font-bold">
            SEARCH BY
          </MDBCol>

          <MDBCol size="6" md="6" className="  text-center  px-3 pb-2">
            <div
              className="lightBlack h-16 pt-2 text-gray-300 border-orange-500"
              onClick={() => {
                setActiveItem(1);
                setData(authorNames);
              }}
            >
              <MDBIcon
                icon="user-tie"
                size="lg"
                className={`pb-2 ${handelColor(1)}`}
              />
              <p className={`pb-2 textParg ${handelColor(1)}`}> Authors</p>
            </div>
          </MDBCol>

          <MDBCol size="6" md="6" className="text-center px-3 pb-2">
            <div
              className="lightBlack text-gray-300 h-16  pt-2"
              onClick={() => {
                setActiveItem(2);
                setData(catograysBook);
              }}
            >
              <MDBIcon
                icon="book"
                size="lg"
                className={`pb-2 ${handelColor(2)}`}
              />
              <p className={`pb-2 textParg ${handelColor(2)}`}>Books</p>
            </div>
          </MDBCol>
        </MDBRow>

        {/*itemList for book catogray and authors names*/}
        <MDBRow className="mt-2 mb-0">
          <MDBCol md="12">
            <CatergrayList items={data} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default SearchSection;
