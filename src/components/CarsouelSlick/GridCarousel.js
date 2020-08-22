import React from 'react';
import { MDBCol, MDBRow, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function GrideCarousel({ activeCardItem }) {
  let booksArray = [
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.5,
      views: '22,333',
      id: 1,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.5,
      views: '22k',
      id: 2,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 3,
    },
    {
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 4,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.5,
      views: '22k',
      id: 5,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 6,
    },
  ];
  return (
    <>
      <MDBContainer className="px-md-4">
        {/*grid for the covers of books that are new release and best sellers */}
        <MDBRow around>
          {booksArray.slice(0, 4).map((book, index) => (
            <MDBCol
              key={index}
              lg="6"
              md="3"
              sm="3"
              size="3"
              className="px-2 pl-md-1 py-1 "
            >
              <MDBView>
                <Link to="/book/:bookId">
                  {/*pattern={1} */}
                  <img
                    className="imgGrideCarsouel mx-lg-0
                "
                    src={book.cover}
                  />
                  {activeCardItem === index ? (
                    <></>
                  ) : (
                    <MDBMask overlay="black-light"></MDBMask>
                  )}
                </Link>
              </MDBView>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
GrideCarousel.propTypes = {
  activeCardItem: PropTypes.number,
};
export default GrideCarousel;
