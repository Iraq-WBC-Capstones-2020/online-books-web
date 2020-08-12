import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

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
                <MDBIcon fab icon="google" color="white" />
                Login with G
              </button>

              <br></br>
              <button
                type="button"
                className="btn btn-git
            btn btn-grey rounded-pill"
              >
                <MDBIcon fab icon="github" color="white" /> Login with Github...
              </button>
              <br></br>

              <button
                type="button"
                className="btn btn-fb
             btn btn-primary rounded-pill"
              >
                <MDBIcon fab icon="facebook-f" color="white" />
                Login with Facebook
              </button>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
