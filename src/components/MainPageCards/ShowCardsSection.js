import React, { useState, useEffect } from 'react';
import './style.scss';
import MainCard from './MainCard';
import { MDBRow, MDBBtn, MDBIcon } from 'mdbreact';
import '../CarsouelSlick/carsouelSlick.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ShowCardsSection({ books }) {
  const useWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth]);
      };
      window.addEventListener('resize', handleResize);
    }, []);
    return size;
  };
  const width = useWindowSize();
  const isSmallScreen = width <= 425 ? true : false;

  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute rightArrowOfGrid">
        <MDBBtn color="" className="shadow-md p-0 h-8 " onClick={onClick}>
          <MDBIcon icon="angle-double-right" size="lg" className="px-2 py-1" />
        </MDBBtn>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute z-10 leftArrowOfGrid">
        <MDBBtn color="" className="shadow-md p-0 h-8" onClick={onClick}>
          <MDBIcon icon="angle-double-left" size="lg" className="px-2 py-1" />
        </MDBBtn>
      </div>
    );
  };

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb dotsMargin',
    infinite: true,
    slidesToShow: isSmallScreen ? 2 : 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      {/*flex-col justify-between className="relative"*/}
      <MDBRow className="containerGridCards">
        <Slider {...settings} className="w-full relative">
          {books.map((book) => (
            <MainCard book={book} key={book.id} />
          ))}
        </Slider>
      </MDBRow>
    </>
  );
}

export default ShowCardsSection;
