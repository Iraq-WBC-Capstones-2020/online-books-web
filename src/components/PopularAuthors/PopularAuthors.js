import React from 'react';
import './style.scss';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function AuthorSection({ authors }) {
  const { t } = useTranslation();
  return (
    <div>
      <MDBContainer className="mt-5">
        <div>
          <h1 className="text-center text-3xl">
            {t('mainPage.PopularAuthors')}
          </h1>
        </div>
        <MDBRow className="mt-5">
          {authors.map((author) => {
            return (
              <MDBCol
                key={author.id}
                size="12"
                sm="2"
                md="3"
                className="mt-4 d-flex justify-content-center align-items-center"
              >
                <MDBBtn color="light-blue" className="px-2 rounded-pill button">
                  {author.name}
                </MDBBtn>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default AuthorSection;
