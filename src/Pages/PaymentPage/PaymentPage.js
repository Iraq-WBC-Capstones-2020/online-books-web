import React from 'react';
import PaymentTable from '../../components/PaymentPage/PaymentTable/PaymentTable';
import PaymentForm from '../../components/PaymentPage/PaymentForm/PaymentForm';
import './PaymentPage.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default function PaymentPage() {
  return (
    <MDBContainer>
      <MDBRow center className="payform">
        <MDBCol md="5">
          <PaymentTable />
        </MDBCol>
        <MDBCol md="5">
          <PaymentForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
