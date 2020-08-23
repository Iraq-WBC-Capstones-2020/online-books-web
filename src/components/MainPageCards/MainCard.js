import React from 'react';
import CreateStars from '../CarsouelSlick/CreateStars';
import CartIcon from './cartIcon';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
function MainCard({ book, index }) {
  const { id, author_name, name, price, rating, cover, author_id } = book;
  const isBottomCardInColumn = index % 2 !== 0;
  return (
    <MDBCard
      tag="div"
      key={id}
      className={`relative h-100 Card shadow-xl animate transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-95 mx-sm-0 mx-md-1 mx-lg-3 
         ${isBottomCardInColumn ? 'marginTop' : ''}`}
    >
      <Link to={`/book/${id}`} className="imgCardBook">
        <img
          src={cover}
          alt={author_name}
          className="imgCardBook w-full rounded-t-md"
        />
      </Link>
      <MDBCardBody className="absolute bottom-0 w-full px-0 py-0">
        {/*opacity part*/}
        <div>
          <div className="blackOpacity text-center py-1">
            <Link to={`/author/${author_id}`}>
              <h5 className="HeaderCardBook mb-0 text-xl text-white truncate capitalize px-4">
                {author_name}
              </h5>
            </Link>
            <div className="sizeStarsContainer">
              <CreateStars rate={rating} starSize="small" />
            </div>
            <Link to={`/book/${id}`}>
              <p className="HeaderCardBook grayColor text-sm font-bold truncate px-4">
                {name}
              </p>
            </Link>
          </div>
          {/*black part*/}
          <div className="bg-black d-flex flex-row justify-content-around py-md-2 px-md-2 px-sm-0">
            <p className="lightBlue font-semibold font-sans md:text-lg py-1 ">
              {'$' + `${price - 2}` + '.99'}
            </p>
            <p className="darkGray font-normal line-through pr-md-2 py-1">
              {'$' + price + '.99'}
            </p>

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
