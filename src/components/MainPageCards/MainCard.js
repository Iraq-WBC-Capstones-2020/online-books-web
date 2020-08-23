import React from 'react';
import CreateStars from '../CarsouelSlick/CreateStars';
import CartIcon from './cartIcon';
import { MDBCard, MDBCardBody } from 'mdbreact';
function MainCard({ book,index }) {
  const { id, author_name, name, price, dis_count, rating, cover } = book;
  const isBottomCardInColumn = index % 2 !== 0;

  return (
    <MDBCard
      tag="div"
      key={id}
      className={`relative h-100 Card shadow-xl animate transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95 mx-sm-0 mx-md-1 mx-lg-3 
         ${isBottomCardInColumn ? 'marginTop' : ''}`}
    >
      <img src={cover} alt="cover" className="imgCardBook rounded-t-md" />

      <MDBCardBody className="absolute bottom-0 w-full px-0 py-0">
        {/*opacity part*/}
        <div className="">
          <div className="blackOpacity text-center py-1">
            <h5 className="HeaderCardBook mb-0 text-xl text-white truncate capitalize px-4">
              {author_name}
            </h5>
            <div className="sizeStarsContainer">
              <CreateStars rate={rating} starSize="small" />
            </div>
            <p className="HeaderCardBook grayColor text-sm font-bold truncate px-4">{name}</p>
          </div>
          {/*black part*/}
          <div className="bg-black d-flex flex-row justify-content-around py-md-2 px-md-2 px-sm-0">
            <p className="lightBlue font-semibold font-sans md:text-lg py-1 ">
            {'$'+`${price-2}`}
            </p>
            <p className="darkGray font-normal line-through pr-md-2 py-1">{'$'+price}</p>

            <div className="rounded-full w-8  h-8 border-2 border-orange-200 text-center">
              <CartIcon className="p-1" />
            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MainCard;
