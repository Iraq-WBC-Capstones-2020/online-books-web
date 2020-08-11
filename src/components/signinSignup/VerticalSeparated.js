import React from 'react'
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
  } from 'mdbreact';
export default function VerticalSeparated() {
    return (
        <MDBCol md="1">
          <div className="verline d-none d-sm-block"></div>
          <MDBCard className=" orr">
            <MDBCardBody>
              <div className="text-center">
                <div className="rounded-pill px-2"> or </div>
              </div>
            </MDBCardBody>
          </MDBCard>
          <div className="verline2 d-none d-sm-block"></div>
        </MDBCol>
    )
}
