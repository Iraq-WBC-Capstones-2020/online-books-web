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
function Detailsclient() {
  let clientsLogo = [
    { client: { logo: client1, name: 'myob company', id: 1 } },
    { client: { logo: client2, name: 'Belimo company', id: 2 } },
    { client: { logo: client3, name: 'life groups', id: 3 } },
    { client: { logo: client4, name: 'lily company', id: 4 } },
    { client: { logo: client5, name: 'citrus company', id: 5 } },
    { client: { logo: client6, name: 'trusly', id: 6 } },
    { client: { logo: client7, name: 'oldendorff company', id: 7 } },
    { client: { logo: client8, name: 'grabuo company', id: 8 } },
  ];

  return (
    <>
      <MDBCol>
        <div className="text-center mt-5">
          <h1 className="text-3xl font-medium inline border-b border-gray-400 px-5">
            Our Clients
          </h1>
        </div>
      </MDBCol>
      <MDBContainer className=" w-9/12 mt-5 grid grid-cols-4 gab-5">
        {clientsLogo.map((clientbox) => (
          <div
            className="border border-solid border-4 border-gray-200 flex justify-center"
            key={clientbox.client.id}
          >
            <img
              src={clientbox.client.logo}
              alt={clientbox.client.name}
              className="animate transition duration-500 ease-in-out  
                        transform hover:-translate-y-1 hover:scale-110  w-1/3 m-4"
            />
          </div>
        ))}
      </MDBContainer>
    </>
  );
}
export default Detailsclient;
