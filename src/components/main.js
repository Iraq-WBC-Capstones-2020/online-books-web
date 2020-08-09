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
import SearchSection from './searchSection/searchSection';

function Main() {
  let [modal8, handelModel8] = useState(false);

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
          <MDBCol md="3" lg="3" className="containerSearchSection bg-black">
            <SearchSection />
          </MDBCol>
          <MDBModal
            isOpen={modal8}
            toggle={() => handelModel8(true)}
            fullHeight
            position="left"
            animation="left"
          //  hiddenModal={}
          >
            <MDBModalHeader toggle={() => handelModel8(false)}></MDBModalHeader>
            <MDBModalBody className="bg-black">
              <SearchSection />
            </MDBModalBody>
          </MDBModal>

          <MDBCol md="8" lg="8">
            <MDBContainer>GRIDE BOOKS </MDBContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow md="12" className="containerSearchSection"></MDBRow>
      </MDBContainer>
    </>
  );
}

export default Main;
