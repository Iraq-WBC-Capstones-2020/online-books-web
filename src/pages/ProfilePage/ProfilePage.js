import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';

function ProfilePage() {
  const profileInfo = {
    id: '120147514545',
    name: 'Sara Ahmed',
    email: 'sara@eample.com',
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

  return (
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
          <MDBCol lg="8" md="6" sm="12" size="12" className="pt-4 pb-4">
            <h4 className="text-3xl font-medium text-blue-500">
              {profileInfo.name}
            </h4>
            <Paragraph></Paragraph>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ProfilePage;
