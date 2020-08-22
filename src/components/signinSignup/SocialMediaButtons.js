import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';

export default function SocialMediaButtons() {
  return (
    <MDBCol md="5" className="mt-5">
      <MDBCard className="mt-5 log z-depth-0">
        <MDBCardBody className="mx-4">
          <div className="text-center">
            <div className=" social text-white">
              <button
                type="button"
                className="w-56 btn btn-gplus

             btn btn-danger rounded-pill"
              >
                <i className="fab fa-google-plus-g pr-1"></i>
                Login with Google
              </button>
              <br></br>
              <button
                type="button"
                className="w-56 btn btn-git
                        btn btn-grey rounded-pill text-white"
              >
                <i className="fab fa-github pr-1 text-white "></i> Login with
                Github...
              </button>
              <br></br>

              <button
                type="button"
                className="w-56 btn btn-fb
                 btn btn-primary rounded-pill"
              >
                <i className="fab fa-facebook-f pr-1"></i>
                Login with Facebook
              </button>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
