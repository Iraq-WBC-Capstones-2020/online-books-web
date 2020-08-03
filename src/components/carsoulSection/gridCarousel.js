import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

function GrideCarousel() {
  return (
    <>
      <MDBContainer className="px-md-4">
        {/*grid for the covers of books that are new release and best sellers */}
        <MDBRow around>
          <MDBCol lg="6" md="3" sm="3" size="3" className="px-2 pl-md-1 py-1 ">
            <img
              className="imgGrideCarsouel mx-lg-0 "
              src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
            />
          </MDBCol>
          <MDBCol lg="6" md="3" sm="3" size="3" className="px-2 pl-md-1 py-1">
            <img
              className="imgGrideCarsouel mx-lg-0"
              src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
            />
          </MDBCol>
          <MDBCol lg="6" md="3" sm="3" size="3" className="px-2 pl-md-1 py-1">
            <img
              className="imgGrideCarsouel mx-lg-0"
              src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
            />
          </MDBCol>
          <MDBCol lg="6" md="3" sm="3" size="3" className="px-2 pl-md-1 py-1">
            <img
              className="imgGrideCarsouel mx-lg-0"
              src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default GrideCarousel;
