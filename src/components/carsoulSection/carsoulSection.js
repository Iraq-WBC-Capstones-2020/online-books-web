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
      <div className="sm:mx-0 md:mx-2 lg:mx-10 xl:mx-40 justify-content-center">
        <div className=" md:w-full lg:w-3/4 xl:w-3/4">
          <HighLight text="best sellers in books" />

          <MDBContainer fluid className="bgGray">
            <MDBRow>
              <MDBCol size="8" xs="12">
                <MDBCarousel
                  activeItem={1}
                  length={4}
                  showControls={true}
                  showIndicators={false}
                  slide
                >
                  <MDBCarouselInner>
                    <CarouselItems />
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCol>
              <MDBCol size="4" xs="12">
                {/* gride for the new release and best sellers */}
                <GrideCarousel />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
}

export default CarsoulSection;
