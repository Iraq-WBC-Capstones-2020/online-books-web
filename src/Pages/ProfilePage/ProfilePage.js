import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';
import Pills from '../../components/Pills/Pills';
import ProfileInfo from '../../components/ProfilePage/ProfileInfo/ProfileInfo';
import PurchaseHistory from '../../components/ProfilePage/PurchaseHistory/PurchaseHistory';
import { useSelector } from 'react-redux';

function ProfilePage() {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);
  const profileInfo = {
    id: user.id,
    name: user.name,
    email: user.email,
    img: 'https://via.placeholder.com/300x300',
    gender: 'Female',
    joined: new Date('02/01/2010').getTime(),
    birthday: new Date('02/01/1998').getTime(),
    phoneNumber: '07154245455',
    address: {
      street: 'Middle Erbil',
      city: 'Erbil',
      country: 'Iraq',
    },
  };
  const userParagraph = `${t('profilePage.memberSince')} ${new Date(
    profileInfo.joined
  ).toDateString()}\n
  ${t('profilePage.livesIn')} ${profileInfo.address.city}${t(
    'profilePage.addressSpread'
  )}${profileInfo.address.country}\n
  ${profileInfo.email}`;
  const tabs = [
    {
      title: t('profilePage.about'),
      content: <ProfileInfo profileInfo={profileInfo} />,
    },
    {
      title: t('profilePage.purchaseHistory'),
      content: <PurchaseHistory profileInfo={profileInfo} />,
    },
  ];
  return (
    <>
      <div className="bg-gray-200">
        <MDBContainer>
          <MDBRow className="h-auto">
            <MDBCol lg="3" md="6" sm="12" size="12" className="py-4">
              <img
                src={profileInfo.img}
                alt={profileInfo.name}
                className="rounded-lg mx-auto h-auto max-w-full"
              />
            </MDBCol>
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
              {userParagraph.split('\n').map((paragraph, index) => (
                <Paragraph className="text-center text-md-left" key={index}>
                  {paragraph}
                </Paragraph>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Pills tabs={tabs} />
    </>
  );
}

export default ProfilePage;
