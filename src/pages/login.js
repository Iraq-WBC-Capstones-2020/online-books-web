import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from 'mdbreact';
import './log.scss';

function FormPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5" className="mt-5">
          <MDBCard className="mt-5 " className="log">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                <a href="#!" className="blue-text ml-1">
                  Forgot Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  color="blue"
                  className=" rounded-pill btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <div className="row my-3 d-flex justify-content-center"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="2" className="mt-5">
          <MDBCard className="mt-5" className="orr">
            <MDBCardBody className="mt-5">
              <div className="text-center">
                <div className="mt-5">
                  <button className="rounded-pill"> or </button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="5" className="mt-5">
          <MDBCard className="mt-5" className="log">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <div className="mt-5" className="social">
                  <button
                    type="button"
                    className="btn btn-gplus"
                    className="btn btn-danger btn-rounded"
                  >
                    <i className="fab fa-google-plus-g pr-1"></i> Login with
                    Google
                  </button>

                  <br></br>
                  <button
                    type="button"
                    className="btn btn-git"
                    className="btn btn-grey btn-rounded"
                  >
                    <i className="fab fa-github pr-1"></i> Login with Github...
                  </button>
                  <br></br>

                  <button
                    type="button"
                    className="btn btn-fb"
                    className="btn btn-primary btn-rounded"
                  >
                    <i className="fab fa-facebook-f pr-1"></i>Login with
                    Facebook
                  </button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
