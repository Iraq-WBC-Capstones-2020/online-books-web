import React from 'react';
import CreateStars from '../CarsouelSlick/CreateStars';
import CartIcon from './cartIcon';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardBody } from 'mdbreact';
function Cards({ book, key }) {
  const { id, authorName, bookName, newPrice, oldPrice, rate, cover } = book;
  const isBottomCardInColumn = id % 2 === 0;

  return (
    <MDBCard
      key={key}
      tag="div"
      className={`relative h-100 Card shadow-xl animate transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mx-sm-0 mx-md-1 mx-lg-3
         ${isBottomCardInColumn ? 'marginTop' : ''}`}
    >
      <img src={cover} className="imgCardBook rounded-t-md" />

      <MDBCardBody className="absolute bottom-0 w-full px-0 py-0">
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
          <div className="bg-black d-flex flex-row justify-content-around py-md-2 px-md-2 px-sm-0">
            <p className="lightBlue font-semibold font-sans md:text-lg p-1">
              {newPrice}
            </p>
            <p className="darkGray font-normal line-through p-1">{oldPrice}</p>

            <div className="rounded-full w-8  h-8 border-2 border-orange-200 text-center">
              <CartIcon className="p-1" />
            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
Cards.propTypes = {
  BookInf: PropTypes.object,
};
export default Cards;
