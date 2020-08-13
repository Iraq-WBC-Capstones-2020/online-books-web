import React from 'react';
import './style.scss';
import MainCard from './MainCard';
const ShowCardsSection = () => {
  const BookInfo = [
    {
      id: '1',
      authorName: 'kevin kwan',
      bookName: 'The shadows',
      bookType: 'A Novel',
      newPrice: '$30.00',
      oldPrice: '$32.75',
      rate: 4,
    },
    {
      id: '2',
      authorName: 'Ahemd tofeq',
      bookName: 'Mind withour body',
      bookType: 'A Novel',
      newPrice: '$10.00',
      oldPrice: '$15.75',
      rate: 4.5,
    },
    {
      id: '3',
      authorName: 'khwla hamdy',
      bookName: 'to stay',
      bookType: 'A Novel',
      newPrice: '$15.00',
      oldPrice: '$20.75',
      rate: 2,
    },
  ];
  return (
    <div>
      {BookInfo.map((book) => {
        return <MainCard book={book} key={book.id} />;
      })}
    </div>
  );
};

export default ShowCardsSection;
