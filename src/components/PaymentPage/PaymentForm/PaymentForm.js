import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import PaypalForm from './PaypalForm';

export default function PaymentForm() {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <p className="h5 text-center mx-5 my-5 text-gray-800">
            {t('paymentPage.paymentMethod')}
          </p>
          <MDBRow>
            <MDBCol md="7">
              <input
                type="radio"
                id="credit-card"
                value="credit-card"
                onChange={handleChange}
                checked={paymentMethod === 'credit-card'}
                className="h6 text-center ml-5 mr-1 text-gray-800 mb-4"
              />
              <label for="credit-card">{t('paymentPage.creditCard')}</label>
            </MDBCol>
            <MDBCol md="5">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                onChange={handleChange}
                checked={paymentMethod === 'paypal'}
                className="h6 text-center ml-5 mr-1 text-gray-800 mb-4"
              />
              <label for="paypal">{t('paymentPage.paypal')}</label>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {paymentMethod === 'credit-card' ? <CreditForm /> : null}
        {paymentMethod === 'paypal' ? <PaypalForm /> : null}
      </MDBRow>
    </MDBContainer>
  );
}

function CreditForm() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form>
            <div className="text-gray-600">
              <MDBInput
                label={t('paymentPage.name')}
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
                label={t('paymentPage.cardNumber')}
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
                    label={t('paymentPage.MMYYYY')}
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
                    label={t('paymentPage.CVC')}
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
