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
  let [activeItem, setActiveItem] = useState(2);
  let [data, setData] = useState(catograysBook);

 
let handelColor = (index) => {
  if( activeItem===index){
  return 'textPink'
  }
 
};
  return (
    <>
      <MDBContainer className=" bg-black p-0 ">
        <MDBRow around className="">
          {/*SEARCH BOX PART */}

          <MDBCol
            md="10"
            lg="10"
            className="mycolorPink columnSearchBooks  p-0 h-12 z-depth-4 "
          >
            <MDBFormInline className="searchBox">
              <MDBInput
               
                hint="Find Your Book"
                type="text"
                className="text-black pl-2 mr-3 form-control"
                //getValue={this.getValue}
                containerClass="active-pink  "
               
              />
              <MDBBtn
                color=""
                className="shadow buttomSearch px-1 pb-3 mb-3 mt-0 "
                onClick={() => {}}
              >
                <MDBIcon
                  icon="search"
                  size="lg"
                  className="text-black "
                />
              </MDBBtn>
            </MDBFormInline>

            {/*  spin */}
          </MDBCol>

          {/* SEARCH BY PART FOR Authors AND Books*/}
          <MDBCol md="12" className=" text-center pb-3 text-white font-bold ">
            SEARCH BY
          </MDBCol>

          <MDBCol md="6" className="  text-center  px-3 pb-2">
            <div
              key={1}
              class="lightBlack h-16 pt-2 text-gray-300 border-orange-500"
              onClick={()=> {setActiveItem(1);
                             setData(AuthorNames);}}
            >
              <MDBIcon
                icon="user-tie"
                size="lg"
                className={`pb-2 ${handelColor(1)}`}
              />
              <p class={`pb-2 textParg ${handelColor(1)}`}> Authors</p>
            </div>

          </MDBCol>

          <MDBCol md="6" className="text-center px-3 pb-2">

            <div
            key={2}
             class="lightBlack text-gray-300 h-16  pt-2"
             onClick={()=> {setActiveItem(2)
              setData(catograysBook)
              }}>
              <MDBIcon icon="book" size="lg" className={`pb-2 ${handelColor(2)}`} />
              <p className={`pb-2 textParg ${handelColor(2)}`}>Books</p>
            </div>
          </MDBCol>
        </MDBRow>

        {/*itemList for book catogray and authors names*/}
        <MDBRow center className="mt-2 mb-0">
        <MDBCol md="12" >

          <CatergrayList items={data} />

        </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default SearchSection;
