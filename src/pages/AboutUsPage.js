import React from 'react';
import Services from './components/AboutUsPage/Services';
import DetailsClient from './components/AboutUsPage/Clients';
import Details from './components/AboutUsPage/Details';
import TeamMembersInformation from './components/AboutUsPage/Team';
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
