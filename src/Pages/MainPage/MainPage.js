import React, { useState } from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import Paragraph from '../../components/CarouselSection/paragraph';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
import SearchSection from '../../components/searchSection/searchSection';
import ModalSearchSection from '../../components/searchSection/ModalSearchSection';
import ShowCardsSection from '../../components/MainPageCards/ShowCardsSection';
import { MDBCol, MDBRow, MDBContainer, MDBIcon } from 'mdbreact';

function Main() {
  const [modal8, handelModel8] = useState(false);
  return (
    <>
      <Paragraph />
      <CarouselSection />
      {/* */}
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
          <ModalSearchSection modal8={modal8} handelModel8={handelModel8} />
 
          {/*GRID BOOKS */}
          <MDBCol size="11" md="8" lg="8">
            <MDBContainer>
              <ShowCardsSection />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <CarouselSection />
    </>
  );
}

export default Main;
