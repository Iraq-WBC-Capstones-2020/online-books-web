import React from 'react';
import '../../assets/main.css';
import { useTranslation } from 'react-i18next';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';

export default function PaymentForm() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <form>
            <p className="h5 mx-5 my-5 text-gray-800">
              {t('PaymentPage.paymentMethod')}
            </p>
            <MDBRow>
              <MDBCol md="6">
                <p className="h6 text-center mx-3 text-gray-800 mb-4">
                  <MDBIcon className="mx-2 my-1" icon="dot-circle" />
                  {t('PaymentPage.creditCard')}
                </p>
              </MDBCol>
              <MDBCol md="6">
                <p className="h6 text-center mx-3 text-gray-800 mb-4">
                  <MDBIcon className="mx-2 my-1" far icon="circle" />
                  {t('PaymentPage.paypal')}
                </p>
              </MDBCol>
            </MDBRow>
            <div className="text-gray-600">
              <MDBInput
                label={t('PaymentPage.name')}
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
                label={t('PaymentPage.cardNumber')}
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
                    label={t('PaymentPage.MMYYYY')}
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
                    label={t('PaymentPage.CVC')}
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
              <button className="bg-primary hover:bg-blue-700 text-white  py-2 px-4 rounded-full">
                {t('PaymentPage.purchase')}
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
