import React from 'react';
import pic from './media/pic.png';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';

function Details() {
  const { t } = useTranslation();
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="5">
            <img src={pic} alt="artwork of a girl reading a book" />
          </MDBCol>
          <MDBCol>
            <div className="mt-24">
              <Paragraph title={t('aboutPage.aboutSection.aboutUs')}>
                {t('aboutPage.aboutSection.aboutUsText')}
              </Paragraph>
              <MDBBtn color="primary" className="rounded-pill " size="md">
                {t('aboutPage.aboutSection.readMoreButton')}
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Details;
