import React from 'react';
import Services from './components/AboutUsPage/Services';
import Detailsclient from './components/AboutUsPage/Clients';
import Details from './components/AboutUsPage/Details';
import TeamMembersInformation from './components/AboutUsPage/Team';
function AboutUsPageMain() {
  return (
    <>
      <Details />
      <TeamMembersInformation />
      <Services />
      <Detailsclient />
    </>
  );
}

export default AboutUsPageMain;
