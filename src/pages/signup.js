import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from 'mdbreact';
import './signup.scss';

function SignPage() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5" className="mt-5 ml-5">
          <MDBCard className="mt-5 log">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark mb-3">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput
                label="Full Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
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
                ClassName="mb-0"
              />

              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  color="blue"
                  className=" rounded-pill btn-block z-depth-1a"
                >
                  Sign up
                </MDBBtn>
              </div>
              <div className="row my-3 d-flex justify-content-center"></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="1">
          <div className="verline d-none d-sm-block"></div>
          <MDBCard className=" orr">
            <MDBCardBody>
              <div className="text-center">
                <button className="rounded-pill px-2"> or </button>
              </div>
            </MDBCardBody>
          </MDBCard>
          <div className="verline2 d-none d-sm-block"></div>
        </MDBCol>
        <MDBCol md="5" className="mt-5">
          <MDBCard className="mt-5 log">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <div className=" social">
                  <button
                    type="button"
                    className="btn btn-gplus
                   btn btn-danger rounded-pill"
                  >
                    <i className="fab fa-google-plus-g pr-1"></i> Login with
                    Google
                  </button>

                  <br></br>
                  <button
                    type="button"
                    className="btn btn-git
                  btn btn-grey rounded-pill"
                  >
                    <i className="fab fa-github pr-1"></i> Login with Github...
                  </button>
                  <br></br>

                  <button
                    type="button"
                    className="btn btn-fb
                   btn btn-primary rounded-pill"
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

export default SignPage;
