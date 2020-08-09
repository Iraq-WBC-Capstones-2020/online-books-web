import React from 'react';
import 'style.scss';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const PopularAuthors = () => {
  const authorsName = 'John Doe';
  return (
    <MDBContainer>
      <h1 className="text-center mt-3">Popular Authors</h1>
      <MDBRow className="mt-5">
        <MDBCol size="6" sm="2">
          <MDBBtn className="rounded-pill" color="info">
            {authorsName}
          </MDBBtn>
        </MDBCol>
        <MDBCol size="6" sm="2">
          <MDBBtn className="rounded-pill width-150" color="info">
            {authorsName}
          </MDBBtn>
        </MDBCol>
        <MDBCol size="6" sm="2">
          <MDBBtn className="rounded-pill" color="info">
            {authorsName}
          </MDBBtn>
        </MDBCol>
        <MDBCol size="6" sm="2">
          <MDBBtn className="rounded-pill" color="info">
            {authorsName}
          </MDBBtn>
        </MDBCol>
        <MDBCol size="6" sm="2">
          <MDBBtn className="rounded-pill" color="info">
            {authorsName}
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PopularAuthors;
