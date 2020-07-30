import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

function GrideCarousel() {
  return (
    <>
      <MDBRow>
        <MDBCol className="mt-4 pr-2">
          <img
            className="imgSmall "
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />

          <img
            className="imgSmall mt-1"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />
        </MDBCol>
        <MDBCol className="mt-4 pl-2">
          <img
            className="imgSmall"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />

          <img
            className="imgSmall mt-1"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default GrideCarousel;
