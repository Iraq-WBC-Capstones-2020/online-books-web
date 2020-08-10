import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function ProfileInfo({ profileInfo }) {
  const { t } = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const basicInfo = {
    name: profileInfo.name,
    gender: profileInfo.gender,
    birthday: profileInfo.birthday,
    city: profileInfo.address.city,
    country: profileInfo.address.country,
  };
  const contactInfo = {
    address: profileInfo.address.street,
    phoneNumber: profileInfo.phoneNumber,
    email: profileInfo.email,
  };
  return (
    <>
      <MDBBtn
        onClick={() => setIsEdit((isEdit) => !isEdit)}
        className="shadow-none text-blue-500 p-0 m-0 float-right mr-2 capitalize"
        color="transparent"
      >
        {t('profilePage.edit')}
      </MDBBtn>
      <MDBRow>
        <MDBCol md="6" sm="12" size="12">
          <h3 className="text-2xl leading-loose font-semibold">
            {t('profilePage.basicInfo')}
          </h3>
          {Object.entries(basicInfo).map(([key, value]) => (
            <MDBRow key={key}>
              <MDBCol md="4" sm="6" size="6">
                <h3 className="text-base leading-loose">
                  {t(`profilePage.${key}`)}:
                </h3>
              </MDBCol>
              <MDBCol md="8" sm="6" size="6">
                <h3 className="text-base leading-loose">{value}</h3>
              </MDBCol>
            </MDBRow>
          ))}
        </MDBCol>
        <MDBCol md="6" sm="12" size="12">
          <h3 className="text-2xl leading-loose font-semibold">
            {t('profilePage.contactInfo')}
          </h3>
          {Object.entries(contactInfo).map(([key, value]) => (
            <MDBRow key={key}>
              <MDBCol md="4" sm="6" size="6">
                <h3 className="text-base leading-loose">
                  {t(`profilePage.${key}`)}:
                </h3>
              </MDBCol>
              <MDBCol md="8" sm="6" size="6">
                <h3 className="text-base leading-loose">{value}</h3>
              </MDBCol>
            </MDBRow>
          ))}
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default ProfileInfo;
