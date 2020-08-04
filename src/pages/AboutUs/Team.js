import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBIcon } from 'mdbreact';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import { useTranslation } from 'react-i18next';
import TeamMemberCards from './TeamMemeberCards';

function TeamMembersInformation() {
  const { t } = useTranslation();
  let team = [
    {
      memeber: {
        name: t('saraAltaee'),
        bio: t('saraBio'),
        specailty: t('specailty'),
        pic: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg',
      },
    },
    {
      memeber: {
        name: t('neven'),
        bio: t('nevenBio'),
        specailty: t('specailty'),
        pic: pic1,
      },
    },
    {
      memeber: {
        name: t('dunia'),
        bio: t('duniaBio'),
        specailty: t('specailty'),
        pic: pic2,
      },
    },
    {
      memeber: {
        name: t('qays'),
        bio: t('qaysBio'),
        specailty: t('specailty'),
        pic: pic3,
      },
    },
    {
      memeber: {
        name: t('zeena'),
        bio: t('zeenaBio'),
        specailty: t('specailty'),
        pic: pic4,
      },
    },
    {
      memeber: {
        name: t('zainab'),
        bio: t('zainabBio'),
        specailty: t('specailty'),
        pic: pic5,
      },
    },
  ];

  return (
    <>
      <MDBCol>
        <div className="text-center">
          <h1 className=" text-3xl mt-10 font-weight-bold ">
            The Team <MDBIcon icon="users blue-text" />
          </h1>
          <br />
          <div className="flex justify-center">
            <hr className="w-48" />
          </div>
        </div>
      </MDBCol>
      <div className=" row m-10 flex justify-center mt-20">
        {team.map((memeber) => (
          <TeamMemberCards memeber={memeber}></TeamMemberCards>
        ))}
      </div>
      ;
    </>
  );
}

export default TeamMembersInformation;
