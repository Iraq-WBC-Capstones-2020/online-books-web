import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';

function GrideCarousel() {
  return (
    <MDBContainer>
      {/*make the row with the same hight with carsoule section */}
      <MDBRow>

        <MDBCol  lg="6" md="3" sm="3" size="3" className="p-1" >
          <img
            className=""
            src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
          />
        </MDBCol>
        <MDBCol lg="6" md="3"  sm="3" size="3" className="p-1">
          <img
            className=""
            src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
          />
        </MDBCol>
        <MDBCol lg="6" md="3"  sm="3" size="3" className="p-1">
          <img
            className=""
            src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
          />
        </MDBCol>
        <MDBCol lg="6" md="3"  sm="3" size="3" className="p-1">
          <img
            className=""
            src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
          />
        </MDBCol> 
       </MDBRow>
    </MDBContainer >
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
