import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import { useTranslation } from 'react-i18next';
import TeamMemberCards from './TeamMemberCards';

function TeamMembersInformation() {
  const { t } = useTranslation();
  let team = [
    {
      member: {
        name: t('aboutPage.saraAltaee'),
        bio: t('aboutPage.saraBio'),
        specailty: t('aboutPage.specailty'),
        pic: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg',
      },
    },
    {
      member: {
        name: t('aboutPage.neven'),
        bio: t('aboutPage.nevenBio'),
        specailty: t('aboutPage.specailty'),
        pic: pic1,
      },
    },
    {
      member: {
        name: t('aboutPage.dunia'),
        bio: t('aboutPage.duniaBio'),
        specailty: t('aboutPage.specailty'),
        pic: pic2,
      },
    },
    {
      member: {
        name: t('aboutPage.qays'),
        bio: t('aboutPage.qaysBio'),
        specailty: t('aboutPage.specailty'),
        pic: pic3,
      },
    },
    {
      member: {
        name: t('aboutPage.zeena'),
        bio: t('aboutPage.zeenaBio'),
        specailty: t('aboutPage.specailty'),
        pic: pic4,
      },
    },
    {
      member: {
        name: t('aboutPage.zainab'),
        bio: t('aboutPage.zainabBio'),
        specailty: t('aboutPage.specailty'),
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
        {team.map((member) => (
          <TeamMemberCards member={member}></TeamMemberCards>
        ))}
      </div>
      ;
    </>
  );
}

export default TeamMembersInformation;
