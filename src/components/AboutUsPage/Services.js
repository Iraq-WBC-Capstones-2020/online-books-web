import React from 'react';
import { MDBCol, MDBCardBody } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import buildingInsights2 from '@iconify/icons-carbon/building-insights-2';
import deliveryTruck from '@iconify/icons-carbon/delivery-truck';
import personFavorite from '@iconify/icons-carbon/person-favorite';
import openMailboxWithRaisedFlag from '@iconify/icons-emojione-monotone/open-mailbox-with-raised-flag';
import giftIcon from '@iconify/icons-bi/gift';
import openBook from '@iconify/icons-entypo/open-book';
import ServiceCard from './ServiceCard';
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
    <div className="col bg-gray-100">
      <MDBCol>
        <div className="text-center">
          <h1 className="text-3xl mt-10 font-weight-bold">{header}</h1>
          <br />
          <div className="flex justify-center">
            <hr className="w-48" />
          </div>
        </div>
      </MDBCol>

      <MDBCardBody className="row ml-48">
        {ourServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </MDBCardBody>
    </div>
  );
}

export default Services;
