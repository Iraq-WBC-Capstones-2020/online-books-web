import React from 'react';
import PaymentTable from '../../components/PaymentPage/PaymentTable/PaymentTable';
import PaymentForm from '../../components/PaymentPage/PaymentForm/PaymentForm';
import './PaymentPage.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default function PaymentPage() {
  return (
    <MDBContainer>
      <MDBRow center className="payContainer">
        <MDBCol lg="5" md="6" sm="10">
          <PaymentTable />
        </MDBCol>
        <MDBCol lg="5" md="6" sm="10">
          <PaymentForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
