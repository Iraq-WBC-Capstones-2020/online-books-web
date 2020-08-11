import React from 'react';
import { useTranslation } from 'react-i18next';
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <form>
            <p className="h5 mb-4 mt-5 text-gray-700">
              <svg
                className="inline-block ml-1 mr-2"
                width="30"
                height="30"
                viewBox="0 0 41 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83366 6.5H34.167C36.0462 6.5 37.5837 7.9625 37.5837 9.75V29.25C37.5837 31.0375 36.0462 32.5 34.167 32.5H6.83366C4.95449 32.5 3.41699 31.0375 3.41699 29.25V9.75C3.41699 7.9625 4.95449 6.5 6.83366 6.5Z"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.5837 9.75L20.5003 21.125L3.41699 9.75"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('contactUsPage.writeToUs')}
            </p>
            <div className="text-gray-500">
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label={t('contactUsPage.firstName')}
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label={t('contactUsPage.lastName')}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                label={t('contactUsPage.email')}
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput type="textarea" rows="3" label={t('contactUsPage.message')} />
            </div>
            <div className="text-center py-3 size">
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus-none"> 
                {t('contactUsPage.send')}
            </button>
            </div>
            </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

