import React from 'react';
import { MDBCol, MDBRow,MDBContainer } from 'mdbreact';

function GrideCarousel() {
  return (
    <>
      {/*make the row with the same hight with carsoule section */}
      <MDBContainer >
        <MDBRow>
        <MDBCol md="6" size="3" className="p-0 " >
          <img
            className="sm:h-24 md:h-32"
            src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
          />
        </MDBCol>
        <MDBCol md="6" size="3" className="p-0">
          <img
           className="sm:h-24 md:h-32 "
            src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
          />
        </MDBCol>
        <MDBCol md="6" size="3" className="p-0">
          <img
            className="md:h-32 "
            src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
          />
        </MDBCol>

        <MDBCol md="6" size="3" className="p-0">
          <img
           className="md:h-32"
            src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
          />
        </MDBCol>
        </MDBRow>
        </MDBContainer >
    </>
  );
}

export default GrideCarousel;
{
  /*
  small responsive
   <MDBCol size="auto" sm="5">
          <img
            className="imgLarg  p-0 pb-md-2 d-sm-inline"
            src="https://th.bing.com/th/id/OIP.SJzxAFc1eRZzl-R5YJmIXAHaLL?pid=Api&rs=1"
          />

          <img
            className="imgLarg d-sm-inline"
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />
        </MDBCol> */
}
