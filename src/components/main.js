import React from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import SearchSection from './searchSection/searchSection';

function Main() {
  return (
    <>
      <MDBContainer className="mainContainer">
        <MDBRow around>
          <MDBCol md="3" lg="3" className="containerSearchSection bg-black">
            <SearchSection />
          </MDBCol>

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
