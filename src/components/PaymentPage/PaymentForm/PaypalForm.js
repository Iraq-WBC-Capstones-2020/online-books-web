import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { useTranslation } from 'react-i18next';

export default function PaypalForm() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <div className="grey-text">
              <MDBInput
                label={t('paymentPage.email')}
                icon="envelope"
                containerClass="d-flex flex-row-reverse"
                className="ml-0 mr-1"
                labelClass="ml-4.5"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label={t('paymentPage.password')}
                icon="lock"
                containerClass="d-flex flex-row-reverse"
                className="ml-0 mr-1"
                labelClass="ml-4.5"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center mb-3">
              <MDBBtn
                type="button"
                color="blue"
                className="rounded-pill text-white z-depth-1a w-48"
              >
                {t('paymentPage.purchase')}
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
