import React from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBContainer } from 'mdbreact';
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
      <MDBContainer>
        <MDBCol>
          <div className="text-center mt-5 mb-5">
            <h1 className="text-3xl font-medium inline border-b border-gray-400 px-5">
              {title}
            </h1>
          </div>
        </MDBCol>

        <MDBRow className="ml-12">
          {team.map((member) => (
            <MDBCol size="8" xs="4" sm="3" className="m-5">
              <TeamMemberCards key={member.id} member={member} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default TeamMembersInformation;
