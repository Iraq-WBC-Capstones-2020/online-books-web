import React from 'react';
import { MDBContainer, MDBCol } from 'mdbreact';
import client1 from './clients/client-1.png';
import client2 from './clients/client-2.png';
import client3 from './clients/client-3.png';
import client4 from './clients/client-4.png';
import client5 from './clients/client-5.png';
import client6 from './clients/client-6.png';
import client7 from './clients/client-7.png';
import client8 from './clients/client-8.png';
import { useTranslation } from 'react-i18next';
import ClientCard from './ClientCard';
function Detailsclient() {
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
    <>
      <MDBCol>
        <div className="text-center mt-5">
          <h1 className="text-3xl font-medium inline border-b border-gray-400 px-5">
            {client}
          </h1>
        </div>
      </MDBCol>
      <MDBContainer className="w-9/12 mt-5 grid grid-cols-4 gab-5">
        {clientsLogo.map((client) => (
          <ClientCard key={client.id} client={client}></ClientCard>
        ))}
      </MDBContainer>
    </>
  );
}
export default Detailsclient;
