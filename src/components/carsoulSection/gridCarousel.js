import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

function GrideCarousel() {
  return (
    <> 
    {/*make the row with the same hight with carsoule section */}
      <MDBRow className="full-width lg:w-1/3 my-0 my-sm-4 my-md-4 my-lg-4 my-xl-4">
        {/*display the grid as row with small devices(make the grid under carsouel section) and column with the others (make the grid beside the cursouel section) */}
        <MDBCol className="pl-2  d-flex flex-lg-column flex-md-column col-6 ">
     <img
            className="imgLarg pb-2 "
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />

          <img
            className="imgLarg"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />     
        </MDBCol>
         
    <MDBCol className=" pl-2 d-flex flex-lg-column flex-md-column col-6" >
         <img
            className="imgLarg pb-2 "
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />

          <img
            className="imgLarg"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          /> 
        </MDBCol>
       
      </MDBRow>
    </>
  );
}

export default GrideCarousel;
