import React from 'react';
import Services from '../../components/AboutUsPage/Services';
import DetailsClient from '../../components/AboutUs/Clients';
import Details from '../../components/AboutUs/Details';
import TeamMembersInformation from '../../components/AboutUs/Team';
function AboutUsPageMain() {
  return (
    <>
      <Details />
      <TeamMembersInformation />
      <Services />
      <DetailsClient />
    </>
  );
}

export default AboutUsPageMain;
