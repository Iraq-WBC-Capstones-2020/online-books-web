import React from 'react';
import CarouselItems from './carsoureItem';
import { MDBCarousel, MDBCarouselInner } from 'mdbreact';
import GrideCarousel from './gridCarousel';
function CarsoulSection() {
  return (
    <>
      {/* check the width with response */}

      <div className="d-flex md:mx-40 justify-content-center">
        <div className="w-3/4">
          <div className="mycolorPink  text-center font-medium leading-loose font-black-100 highlight ">
            best sellers in books
          </div>

          <div className=" bgGray d-flex  justify-content-around ">
            <MDBCarousel
              className="py-2 pl-1"
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
            {/* gride for the new release and best sellers */}
            <GrideCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarsoulSection;
