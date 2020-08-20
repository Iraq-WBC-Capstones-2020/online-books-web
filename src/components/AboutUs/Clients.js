import React from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
import client1 from './media/client-1.png';
import client2 from './media/client-2.png';
import client3 from './media/client-3.png';
import client4 from './media/client-4.png';
import client5 from './media/client-5.png';
import client6 from './media/client-6.png';
import client7 from './media/client-7.png';
import client8 from './media/client-8.png';
import { useTranslation } from 'react-i18next';
import ClientCard from './ClientCard';
import SectionTitle from '../SectionTitle/SectionTitle';
function DetailsClient() {
  const { t } = useTranslation();
  let clientsLogo = [
    { logo: client1, name: 'myob company', id: 1 },
    { logo: client2, name: 'Belimo company', id: 2 },
    { logo: client3, name: 'life groups', id: 3 },
    { logo: client4, name: 'lily company', id: 4 },
    { logo: client5, name: 'citrus company', id: 5 },
    { logo: client6, name: 'trusly', id: 6 },
    { logo: client7, name: 'oldendorff company', id: 7 },
    { logo: client8, name: 'grabuo company', id: 8 },
  ];

  let client = t('clientPage.clients');

  return (
    <MDBContainer>
      <SectionTitle>{client}</SectionTitle>
      <MDBRow className="m-5">
        {clientsLogo.map((client) => (
          <MDBCol
            lg="3"
            md="4"
            sm="6"
            xs="6"
            size="12"
            className="m-0 p-0 border border-solid border-4 border-gray-200 "
          >
            <ClientCard key={client.id} client={client} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
export default DetailsClient;
