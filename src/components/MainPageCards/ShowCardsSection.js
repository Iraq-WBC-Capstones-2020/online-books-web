import React from 'react';
import './style.scss';
import MainCard from './MainCard';
import { MDBRow } from 'mdbreact';
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
      id: '3',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
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
      id: '3',
      authorName: 'kevin kwan',
      bookName: 'The Shadows: A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
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
        'https://th.bing.com/th/id/OIP.Zf2SkeIiSI4ymvT2cc4u2AHaKd?pid=Api&rs=1',
    },
  ];
  return (
    <>
      <MDBRow className="containerGridCards flex-col justify-between">
        {BookInfo.map((book) => (
          <MainCard book={book} key={book.id} />
        ))}
      </MDBRow>
    </>
  );
};

export default ShowCardsSection;
