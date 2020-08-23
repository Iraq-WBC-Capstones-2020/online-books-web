import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItems from './slickltem';
import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon } from 'mdbreact';
import './carsouelSlick.scss';
import GrideCarousel from './GridCarousel';
import HighlightedSectionLabel from './HighlightedSectionLabel';

function CarsouelSlick({ highlightText, books }) {
  const [activeCardItem, setActiveCardItemState] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 rightArrow">
        <MDBBtn className="shadow-sm bg-white p-0 h-8" onClick={onClick}>
          <MDBIcon icon="chevron-right" size="lg" className="px-2 py-1" />
        </MDBBtn>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 leftArrow">
        <MDBBtn className="shadow-sm bg-white p-0 h-8" onClick={onClick}>
          <MDBIcon icon="chevron-left" size="lg" className="px-2 py-1" />
        </MDBBtn>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveCardItemState(current),
  };
  const booksArray = books.slice(0, 4);

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="11" lg="10" xl="8">
          <HighlightedSectionLabel text={highlightText} />
          <MDBContainer fluid className="bgGray">
            <MDBRow>
              <MDBCol md="12" lg="8" xl="8">
                <Slider {...settings} className="relative">
                  {booksArray.map((book) => (
                    <CarouselItems book={book} key={book.id} />
                  ))}
                </Slider>
              </MDBCol>
              <MDBCol
                xs="12"
                sm="12"
                md="12"
                lg="4"
                xl="4"
                className="mt-3 mb-md-0 mt-md-0 mb-lg-4 mt-lg-4"
              >
                {/* gride for the new release and best sellers  */}
                <GrideCarousel
                  booksArray={booksArray}
                  activeCardItem={activeCardItem}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default CarsouelSlick;
