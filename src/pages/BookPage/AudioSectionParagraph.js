import React from 'react';
import './style.scss';
import bookCover from './bookCover.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
const AudioSection = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12">
          <div className="mt-5 ">
            <img src={bookCover} alt="Book cover" width="353" height="498" />
          </div>
        </MDBCol>
        <MDBCol sm="6" size="12">
          <div className="mt-5 ">
            <h1 className="blue-text"> Mind without body</h1>
            <p className="mt-3  paragraph">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AudioSection;
