import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItems from './slickltem';
import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon } from 'mdbreact';
import './carsouelSlick.scss';
import GrideCarousel from './GridCarousel';
import HighlightedSectionLabel from './HighlightedSectionLabel';

function CarsouelSlick({ highlightText }) {
  const [activeCardItem, setActiveCardItemState] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 rightArrow">
        <MDBBtn className="shadow-sm bg-white p-0 h-8 " onClick={onClick}>
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

  const booksArray = [
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.27,
      views: '22,333',
      id: 1,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.5,
      views: '22k',
      id: 2,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.76,
      views: '22k',
      id: 3,
    },
    {
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3,
      views: '22k',
      id: 4,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.73,
      views: '22k',
      id: 5,
    },
    {
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
      authorName: 'Alice Mayer',
      bookName: 'The Shadows: A Novel',
      type: 'formate:Hardback',
      price: '$31.5',
      rate: 3.46,
      views: '22k',
      id: 6,
    },
  ];

  return (
    <>
      <MDBContainer>
        <MDBRow center>
          <MDBCol md="11" lg="10" xl="8">
            <HighlightedSectionLabel text={highlightText} />

            <MDBContainer fluid className="bgGray ">
              <MDBRow>
                <MDBCol md="12" lg="8" xl="8">
                  <Slider {...settings} className="relative">
                    {booksArray.slice(0, 4).map((book, index) => (
                      <CarouselItems book={book} index={index} />
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
                  <GrideCarousel activeCardItem={activeCardItem} />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default CarsouelSlick;
