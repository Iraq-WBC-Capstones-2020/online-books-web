import React from 'react';
import './style.scss';
import MainCard from './MainCard';
import { MDBRow, MDBBtn, MDBIcon } from 'mdbreact';
import '../CarsouelSlick/carsouelSlick.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const isSmallScreen=window.screen.width<=425?true:false;
const ShowCardsSection = () => {
  const BookInfo = [
    {
      id: '1',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '2',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$10.00',
      oldPrice: '$15.75',
      rate: 4.5,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '3',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
    },
    {
      id: '4',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '5',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
      cover:
        'https://s-media-cache-ak0.pinimg.com/736x/78/c5/f0/78c5f0de85565a0fd4a911f2681f56e3--book-cover-art-cover-books.jpg',
    },
    {
      id: '6',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '7',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '8',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '9',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '10',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
    {
      id: '11',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
      cover:
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute rightArrowOfGrid">
        <MDBBtn color="" className="shadow-md p-0 h-8 " onClick={onClick}>
          <MDBIcon icon="angle-double-right" size="lg" className="px-2 py-1" />
        </MDBBtn>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
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
    infinite: true,
    slidesToShow:isSmallScreen?2:4,
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
          {BookInfo.map((book, index) => (
            <MainCard book={book} key={index} />
          ))}
        </Slider>
      </MDBRow>
    </>
  );
};

export default ShowCardsSection;
