import React from 'react';
import './style.scss';
import bookCover from './bookCover.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
const BlogPage = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12">
          <div className="mt-5">
            <h1 className="blue-text"> Mind without body</h1>
            <span className="gray-text">Ahmed khaled tofeq</span>
            <br />
            <div className="mt-2 yellow-star">
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
            </div>
            <p className="mt-3 paragraph">
              {`is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.galley of type and
              scrambled it to make a type specimen book.`}
            </p>
            <span className="gray-text">Language:Arabic</span>
            <br />

            <span className="gray-text">
              Price: <strong>15$</strong>
            </span>
          </div>
          <div className="mt-3">
            <MDBBtn color="info" className="mr-3 px-3 py-0">
              Fantasy
            </MDBBtn>
            <MDBBtn color="info" className="px-3 py-0">
              2017
            </MDBBtn>
          </div>
          <div className="mt-4">
            <MDBBtn color="primary" className="px-4 rounded-pill">
              Add to cart
            </MDBBtn>
          </div>
        </MDBCol>

        <MDBCol sm="6" size="12">
          <div className="mt-5 d-flex justify-content-center align-self-center">
            <img src={bookCover} alt="Book cover" width="353" height="498" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BlogPage;
