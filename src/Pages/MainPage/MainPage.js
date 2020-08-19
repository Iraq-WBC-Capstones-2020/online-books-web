import React, { useState } from './node_modules/react';
//style files  for mdbreact
import './@fortawesome/fontawesome-free/css/all.min.css';
import './bootstrap-css-only/css/bootstrap.min.css';
import './mdbreact/dist/css/mdb.css';
//main component
import Paragraph from '../../components/CarsouelSlick/paragraph';
import CarsouelSlick from '../../components/CarsouelSlick/carsouelSlick';
import SearchSection from '../../components/searchSection/searchSection';
import ModalSearchSection from '../../components/searchSection/ModalSearchSection';
import ShowCardsSection from '../../components/MainPageCards/ShowCardsSection';
import { MDBCol, MDBRow, MDBContainer} from 'mdbreact';
import Author from '../../components/PopularAuthors/PopularAuthors';
   

function Main() {
  const [modal8, handelModel8] = useState(false);
  
  return (
    <>
      <Paragraph />
      <CarsouelSlick highlightText="bestSellers"/>
      {/* */}
      <MDBContainer className="mainContainer">
        {/*will put this buttom in the navbar
        <MDBIcon
          icon="bars"
          size="1x"
          onClick={() => handelModel8(true)}
          border
          className="sandwitchItem"
        />
 */}
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

          {/*GRID BOOKS md="8"*/}
          <MDBCol size="11"  lg="8" className="md:grid-cols-12 px-md-3 paddingZero" >
            <MDBContainer>
              <ShowCardsSection />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <CarsouelSlick highlightText="newRelease"/>
      {/*Popular authors */}
      <Author />
    </>
  );
}

export default Main;
