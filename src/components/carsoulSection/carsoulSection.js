import React from 'react';
import CarouselItems from './carsoureItem';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import GrideCarousel from './gridCarousel';
import HighLight from './highlightSection';

function CarsoulSection() {
  return (
    <>
      <div className="d-flex justify-content-center">
       <MDBCol  xs="10"	sm="10"	md="11" lg="10"	xl="8">
          <HighLight className="" text="best sellers in books"/>

          <MDBContainer fluid className="bgGray">
            <MDBRow>

             <MDBCol  xs="12" sm="12" md="11" lg="8" xl="8">
             <MDBCarousel
                  activeItem={1}
                  length={4}
                  showControls={true}
                  showIndicators={false}
                  slide
                >
                   <MDBCarouselInner>
                         <CarouselItems/>
                   </MDBCarouselInner>
                </MDBCarousel> 
              </MDBCol>
             
              <MDBCol  xs="12" sm="12"	md="12"	lg="4"	xl="4" className="mb-4 mt-4">
                {/* gride for the new release and best sellers  */}
                <GrideCarousel />
              </MDBCol>
           
            </MDBRow>
          </MDBContainer>
          </MDBCol>
      </div>
    </>
  );
}

export default CarsoulSection;
