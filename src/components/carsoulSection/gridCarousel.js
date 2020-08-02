import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

function GrideCarousel() {
  return (
    <>
      {/*make the row with the same hight with carsoule section */}
      <MDBRow className="full-width">
        
        <MDBCol size="auto">
          <img
            className="imgLarg pb-2 "
            src="http://www.snugglyoranges.com/wp-content/uploads/2014/09/Unspoken.jpg"
          />

          <img
            className="imgLarg "
            src="http://1.bp.blogspot.com/-yQklGusIOBE/Ul-oQ0_9vOI/AAAAAAAAfI4/XQTmNLaJZLQ/s1600/book-cover-poster-27.jpg"
          />
        </MDBCol>

        <MDBCol size="auto">
          <img
            className="imgLarg pb-md-2 d-md-block "
            src="https://th.bing.com/th/id/OIP.SJzxAFc1eRZzl-R5YJmIXAHaLL?pid=Api&rs=1"
          />

          <img
            className="imgLarg d-md-block  "
            src="https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg"
          />
        </MDBCol>

      </MDBRow>
    </>
  );
}

export default GrideCarousel;
