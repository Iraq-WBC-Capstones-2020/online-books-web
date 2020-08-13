import React from 'react';
import PaymentTable from '../../components/PaymentPage/PaymentTable/PaymentTable';
import PaymentForm from '../../components/PaymentPage/PaymentForm/PaymentForm';
import './PaymentPage.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default function PaymentPage() {
  return (
    <MDBContainer>
      <MDBRow center className="payContainer">
        <MDBCol md="4">
          <PaymentTable />
        </MDBCol>
        <MDBCol md="4">
          <PaymentForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
