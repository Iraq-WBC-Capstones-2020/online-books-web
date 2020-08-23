import React from 'react';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import TeamMemberCards from './TeamMemberCards';
import pic1 from './media/pic1.jpg';
import pic2 from './media/pic2.jpg';
import pic3 from './media/pic3.jpg';
import pic4 from './media/pic4.jpg';
import pic5 from './media/pic5.jpg';
import pic6 from './media/pic6.jpg';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

function TeamMembersInformation() {
  const { t } = useTranslation();
  const members = [
    { name: 'sara', pic: pic6, id: 1 },
    { name: 'neven', pic: pic1, id: 2 },
    { name: 'dunia', pic: pic2, id: 3 },
    { name: 'qays', pic: pic3, id: 4 },
    { name: 'zeena', pic: pic4, id: 5 },
    { name: 'zaniab', pic: pic5, id: 6 },
  ];
  const teamInfo = t(`aboutPage.members`, { returnObjects: true });
  const team = members.map((member) => {
    const { name } = member;
    return Object.assign({}, member, teamInfo[name]);
  });

  const title = t('aboutPage.title');
  return (
    <MDBContainer>
      <SectionTitle>{title}</SectionTitle>
      <MDBRow className="py-3">
        {team.map((member, index) => (
          <MDBCol key={index} lg="4" md="6" sm="12" size="12" className="p-5">
            <TeamMemberCards key={member.id} member={member} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default TeamMembersInformation;
