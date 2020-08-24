import React from 'react';
import { MDBCol, MDBRow, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GrideCarousel({ booksArray, activeCardItem }) {
  return (
    <>
      <MDBContainer className="px-md-4">
        {/*grid for the covers of books that are new release and best sellers */}
        <MDBRow around>
          {booksArray.slice(0, 4).map((book, index) => (
            <MDBCol
              key={book.id}
              lg="6"
              md="3"
              sm="3"
              size="3"
              className="px-2 pl-md-1 py-1"
            >
              <MDBView>
                <Link to={`/book/${book.id}`}>
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
