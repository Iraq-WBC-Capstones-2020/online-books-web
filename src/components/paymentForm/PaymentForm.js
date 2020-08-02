import React from 'react';
import './PaymentForm.scss';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';

export default function PaymentForm() {
  const paymentForm = {
    paymentMethod: 'Payment Method',
    creditCard: 'Credit Card',
    paypal: 'Paypal',
    name: 'Name',
    cardNumber: 'Card Number',
    MMYYYY: 'MM/YYYY',
    CVC: 'CVC',
    purchase: 'Purchase',
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <form>
            <p className="h5 mx-5 my-5 gray-text">
              {paymentForm.paymentMethod}
            </p>
            <MDBRow>
              <MDBCol md="6">
                <p className="h6 text-center mx-3 gray-text mb-4">
                  <MDBIcon className="mx-2 my-1" icon="dot-circle" />
                  {paymentForm.creditCard}
                </p>
              </MDBCol>
              <MDBCol md="6">
                <p className="h6 text-center mx-3 gray-text mb-4">
                  <MDBIcon className="mx-2 my-1" far icon="circle" />
                  {paymentForm.paypal}
                </p>
              </MDBCol>
            </MDBRow>
            <div className="grey-text">
              <MDBInput
                label={paymentForm.name}
                icon="user"
                containerClass="d-flex flex-row-reverse"
                className="ml-0 mr-1"
                labelClass="ml-4.5"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                label={paymentForm.cardNumber}
                icon="credit-card"
                containerClass="d-flex flex-row-reverse"
                className="ml-0 mr-1"
                labelClass="ml-4.5"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label={paymentForm.MMYYYY}
                    icon="calendar"
                    containerClass="d-flex flex-row-reverse"
                    className="ml-0 mr-1"
                    labelClass="ml-4.5"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label={paymentForm.CVC}
                    icon="lock"
                    containerClass="d-flex flex-row-reverse"
                    className="ml-0 mr-1"
                    labelClass="ml-4.5"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>
              </MDBRow>
            </div>
            <div className="text-center">
              <button class="bg-primary hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
                {paymentForm.purchase}
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
