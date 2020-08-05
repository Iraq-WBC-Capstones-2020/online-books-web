import React, { useState } from 'react';
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBFormInline,
} from 'mdbreact';
import './myStyle.scss';
import CatergrayList from './catergrayList';

function SearchSection() {
  let catograysBook = [
    { name: 'Popular' },
    { name: 'Biographies &Memoirs' },
    { name: 'Literature & Fiction' },
    { name: 'Business&Investing' },
    { name: 'History' },
  ];
  let AuthorNames = [
    { name: 'zeena kareem' },
    { name: 'zainab azzam' },
    { name: 'sara ahmed' },
    { name: 'dunia tarq' },
  ];
  let [inputValue, setInputValue] = useState('');
  let [Authorcolor, setAuthorColor] = useState('text-gray-300');
  let [Bookcolor, setBookColor] = useState('textPink');
  let [data, setData] = useState(catograysBook);

  let handelAuthorColor = () => {
    setAuthorColor('textPink');
    setBookColor('text-gray-300');
    setData(AuthorNames);
  };
  let handelBookColor = () => {
    setBookColor('textPink');
    setAuthorColor('text-gray-300');
    setData(catograysBook);
  };
  let getValue = () => {};

  return (
    <>
      <MDBContainer className=" bg-black p-0 ">
        <MDBRow around className="">
          {/*SEARCH BOX PART */}

          <MDBCol
            md="12"
            lg="12"
            className="mycolorPink columnSearchBooks  p-0 h-12 z-depth-4 "
          >
            <MDBFormInline className="searchBox">
              <MDBInput
                className="form-control "
                hint="Find Your Book"
                type="text"
                className="text-black mr-5 pl-2"
                //getValue={this.getValue}
                containerClass="active-pink "
              />
              <MDBBtn
                color=""
                className="shadow buttomSearch px-1 mb-3 mt-0  "
                onClick={() => {}}
              >
                <MDBIcon
                  icon="search"
                  size="lg"
                  className="text-black fa-w-2 "
                />
              </MDBBtn>
            </MDBFormInline>

            {/*  spin */}
          </MDBCol>

          {/* SEARCH BY PART FOR Authors AND Books*/}
          <MDBCol md="12" className=" text-center pb-3 text-white font-bold ">
            SEARCH BY
          </MDBCol>

          <MDBCol md="6" className="text-center  px-3 pb-2">
            {/*border does not work */}
            <div
              class="lightBlack h-16 pt-2 border-orange-500"
              onClick={handelAuthorColor}
            >
              <MDBIcon
                icon="user-tie"
                size="lg"
                className={`pb-2 ${Authorcolor}`}
              />
              <p class={`pb-2 textParg ${Authorcolor}`}> Authors</p>
            </div>
          </MDBCol>

          <MDBCol md="6" className="text-center px-3 pb-2">
            <div class="lightBlack h-16 pt-2" onClick={handelBookColor}>
              <MDBIcon icon="book" size="lg" className={`pb-2 ${Bookcolor}`} />
              <p className={`pb-2 textParg ${Bookcolor}`}>Books</p>
            </div>
          </MDBCol>
        </MDBRow>

        {/*itemList for book catogray and authors names*/}
        <MDBRow center className="mt-2 mb-0">
          <CatergrayList items={data} />
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default SearchSection;
