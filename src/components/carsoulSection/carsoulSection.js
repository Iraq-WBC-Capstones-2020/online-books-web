import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import './StylecarsoulSection/myStyle.scss';
import CarouselItems from './carsoureItem';
import GrideCarousel from './gridCarousel';
import HighLight from './highlightSection';

function CarsoulSection() {
  return (
    <>
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="11" lg="10" xl="8">
            <HighLight text="best sellers in books" />

            <MDBContainer fluid className="bgGray">
              <MDBRow>
                <MDBCol md="12" lg="8" xl="8">
                  <MDBCarousel
                    activeItem={1}
                    length={4}
                    showControls={false}
                    showIndicators={false}
                    slide
                  >
                    <MDBCarouselInner>
                      <CarouselItems />
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBCol>

                <MDBCol
                  xs="12"
                  sm="12"
                  md="12"
                  lg="4"
                  xl="4"
                  className="mt-3 mb-md-0 mt-md-0 mb-lg-4 mt-lg-4  "
                >
                  {/* gride for the new release and best sellers  */}
                  <GrideCarousel />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default CarsoulSection;
