import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import buildingInsights2 from '@iconify/icons-carbon/building-insights-2';
import deliveryTruck from '@iconify/icons-carbon/delivery-truck';
import personFavorite from '@iconify/icons-carbon/person-favorite';
import openMailboxWithRaisedFlag from '@iconify/icons-emojione-monotone/open-mailbox-with-raised-flag';
import giftIcon from '@iconify/icons-bi/gift';
import openBook from '@iconify/icons-entypo/open-book';
import ServiceCard from './ServiceCard';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
function Services() {
  const { t } = useTranslation();
  const Services = [
    { title: 'reservations', icon: buildingInsights2, id: 1 },
    { title: 'PrepaidPickup', icon: deliveryTruck, id: 2 },
    { title: 'MailOrder', icon: openMailboxWithRaisedFlag, id: 3 },
    { title: 'StudentHelper', icon: personFavorite, id: 4 },
    { title: 'GiftCards', icon: giftIcon, id: 5 },
    { title: 'SignedBooks', icon: openBook, id: 6 },
  ];
  const header = t('aboutPage.services.header');
  const teamInfo = t(`aboutPage.services`, { returnObjects: true });
  const ourServices = Services.map((service) => {
    const { title } = service;
    return Object.assign({}, service, teamInfo[title]);
  });
  return (
    <div className="bg-gray-100">
      <MDBContainer>
        <SectionTitle>{header}</SectionTitle>
        <MDBRow>
            {ourServices.map((service) => (
              <MDBCol lg="4" md="6" sm="12" size="12">
              <ServiceCard key={service.id} service={service} />
              </MDBCol>))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Services;
