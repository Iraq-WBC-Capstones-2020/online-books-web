import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from 'mdbreact';

export default function PaymentForm() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Payment Method</p>
            <MDBRow>
              <MDBCol md="6">
                <p className="h6 text-center mb-4">
                  <MDBIcon icon="dot-circle" />
                  Credit Card
                </p>
              </MDBCol>
              <MDBCol md="6">
                <p className="h6 text-center mb-4">
                  <MDBIcon far icon="circle" />
                  Paypal
                </p>
              </MDBCol>
            </MDBRow>
            <div className="grey-text">
              <MDBInput
                label="Name"
                icon="user-alt"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Card Number"
                icon="credit-card"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="MM/YYYY"
                    icon="calendar"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="CVC"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>
              </MDBRow>
            </div>
            <div className="text-center">
              <MDBBtn color="primary" rounded>
                Purchase
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
