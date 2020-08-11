import React from 'react';
import { MDBCol, MDBCard, MDBCardBody } from 'mdbreact';

export default function SocialMediaButtons() {
  return (
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
                <i className="fab fa-google-plus-g pr-1"></i> Login with Google
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
                <i className="fab fa-facebook-f pr-1"></i>Login with Facebook
              </button>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
