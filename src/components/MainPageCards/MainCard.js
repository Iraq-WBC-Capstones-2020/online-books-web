import React from 'react';
import CreateStars from '../CarouselSection/CreateStars';
import CartIcon from './cartIcon';
import PropTypes from 'prop-types';

import { MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
function Cards({ book }) {
  const { id, authorName, bookName, newPrice, oldPrice, rate, cover } = book;
  return (
    <MDBCol size="12" md="3" lg="3" key={id} className="h-90">
      <MDBCard
        tag="div"
        className="relative h-100 Card shadow-xl animate transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <img src={cover} className="imgCardBook rounded-t-md" />

        <MDBCardBody className="absolute  bottom-0 w-full px-0 py-0">
          {/*opacity part*/}
          <div className="">
            <div className="blackOpacity text-center py-1">
              <h5 className="HeaderCardBook mb-0 text-xl text-white">
                {authorName}
              </h5>
              <div className="sizeStarsContainer">
                <CreateStars rate={rate} starSize="small" />
              </div>
              <p className="HeaderCardBook grayColor text-sm font-bold">
                {bookName}
              </p>
            </div>
            {/*black part*/}
            <div className="bg-black d-flex flex-row justify-content-around py-2 px-2">
              <p className="lightBlue font-semibold font-sans text-lg p-1">
                {newPrice}
              </p>
              <p className="darkGray font-normal line-through p-1">
                {oldPrice}
              </p>

              <div className="rounded-full w-8 h-8 border-2 border-orange-200 text-center">
                <CartIcon className="p-1" />
              </div>
            </div>
          </div>
        </MDBCardBody>

        {/* 
            <div className=" text-center position text-white">
              <h3 className="font-weight-normal mt-2 text-2xl">{authorName}</h3>
              <CreateStars rate={rate} />

              <p className="pb-3 text-xl grayColor">
                {`${bookName}: ${bookType}`}
              </p>
            </div>

            <div className="d-flex background justify-content-around align-items-center absolute bottom-0 dark text-center text-white">
              <p className="text-2xl price">{newPrice}</p>
              <p className="text-xl grayColor">
                <del>{oldPrice}</del>
              </p>
              <div>
                <MDBIcon className="icon p-2" icon="cart-plus" />
              </div>
            </div>
            */}
      </MDBCard>
    </MDBCol>
  );
}
Cards.propTypes = {
  BookInf: PropTypes.object,
};
export default Cards;
