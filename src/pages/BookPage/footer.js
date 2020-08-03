import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const footer = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol size="12" sm="4">
          <div>
            <img src="" />
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur mag
            </p>
            <span>Copyright</span>
          </div>
        </MDBCol>
        <MDBCol size="12" sm="4">
          <h4 className="blue-text">Follow us</h4>
        </MDBCol>
        <MDBCol size="12" sm="4">
          <h4 className="blue-text">Tags</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default footer;
