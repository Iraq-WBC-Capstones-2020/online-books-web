import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function ProfileInfo({ profileInfo }) {
    const { t } = useTranslation();

  return (
    <MDBContainer>
      <MDBRow className="h-auto">
        <MDBCol lg="3" md="6" sm="12" size="12" className="py-4"></MDBCol>
        <MDBCol
          lg="8"
          md="6"
          sm="12"
          size="12"
          className="py-4 text-center text-md-left"
        >
          <h4 className="text-3xl font-medium text-blue-500 pb-3">
            {profileInfo.name}
          </h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProfileInfo;
