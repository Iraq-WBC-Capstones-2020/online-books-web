import React from 'react';
import CarouselItems from './carsoureItem';
import { MDBCarousel, MDBCarouselInner } from 'mdbreact';
import GrideCarousel from './gridCarousel';
function CarsoulSection() {
  return (
    <>
      <div className="d-flex sm:mx-0 md:mx-2 lg:mx-10 xl:mx-40 justify-content-center">
        <div className=" md:w-full lg:w-3/4 xl:w-3/4">
          <div className="buttomText mycolorPink  text-black font-bold py-3/4 text-center  leading-loose font-black-300 highlight ">
            best sellers in books
          </div>

          <div className=" bgGray  d-flex flex-col sm:flex-row  justify-content-around ">
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
