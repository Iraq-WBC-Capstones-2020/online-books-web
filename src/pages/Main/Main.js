import React, { useState } from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBIcon,
} from 'mdbreact';
import SearchSection from '../../components/searchSection/SearchSection';

function Main() {
  const [modal8, handelModel8] = useState(false);

  return (
    <>
      <MDBContainer className="mainContainer">
        {/*will put this buttom in the navbar */}
        <MDBIcon
          icon="bars"
          size="1x"
          onClick={() => handelModel8(true)}
          border
          className="sandwitchItem"
        />

        <MDBRow around>
          <MDBCol
            size="0"
            md="3"
            lg="3"
            className="containerSearchSection bg-black"
          >
            <SearchSection />
          </MDBCol>

          {/*Modal for search section will appeare in the small devices */}

          <MDBModal
            isOpen={modal8}
            toggle={() => handelModel8(true)}
            fullHeight
            position="left"
            animation="left"
            contentClassName=" bg-black"
          >
            <MDBModalHeader
              toggle={() => handelModel8(false)}
              className="border-b-0 py-0 mb-3"
            ></MDBModalHeader>
            <MDBModalBody className="bg-black">
              <SearchSection />
            </MDBModalBody>
          </MDBModal>

          <MDBCol size="11" md="8" lg="8">
            <MDBContainer>GRIDE BOOKS </MDBContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow md="12" className="containerSearchSection"></MDBRow>
      </MDBContainer>
    </>
  );
}

export default Main;
