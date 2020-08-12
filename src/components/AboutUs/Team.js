import React from 'react';
import { MDBCol, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import TeamMemberCards from './TeamMemberCards';
import pic1 from './media/pic1.jpg';
import pic2 from './media/pic2.jpg';
import pic3 from './media/pic3.jpg';
import pic4 from './media/pic4.jpg';
import pic5 from './media/pic5.jpg';
import pic6 from './media/pic6.jpg';

function TeamMembersInformation() {
  const { t } = useTranslation();
  const members = [
    { name: 'sara', pic: pic6, id: 1 },
    { name: 'neven', pic: pic1, id: 2 },
    { name: 'dunia', pic: pic2, id: 3 },
    { name: 'qays', pic: pic3, id: 4 },
    { name: 'zeena', pic: pic4, id: 5 },
    { name: 'zainab', pic: pic5, id: 6 },
  ];
  const teamInfo = t(`aboutPage.members`, { returnObjects: true });
  const team = members.map((member) => {
    const { name } = member;
    return Object.assign({}, member, teamInfo[name]);
  });

  const title = t('aboutPage.title');
  return (
    <>
      <MDBCol>
        <div className="text-center">
          <h1 className="text-3xl mt-10 font-weight-bold">
            {title} <MDBIcon icon="users blue-text" />
          </h1>
          <br />
          <div className="flex justify-center">
            <hr className="w-48" />
          </div>
        </div>
      </MDBCol>
      <div className="row m-10 flex justify-center mt-20">
        {team.map((member) => (
          <TeamMemberCards key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}

export default TeamMembersInformation;
