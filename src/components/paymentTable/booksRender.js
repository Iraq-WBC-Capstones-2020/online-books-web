import React from 'react';
import TotalCopies from './TotalCopies';

export default function booksRender() {
  const books = [
    {
      title: 'book1',
      copies: 1,
      price: '10 $',
      id: 1,
    },
    {
      title: 'book2',
      copies: 1,
      price: '20 $',
      id: 2,
    },
    {
      title: 'book3',
      copies: 1,
      price: '15 $',
      id: 3,
    },
    {
      title: 'book4',
      copies: 1,
      price: '25 $',
      id: 4,
    },
  ];

  return books.map((book) => {
    //  const {title,copies,price} = book;
    return (
      <tr key="i">
        <td>
          <input type="checkbox" />
        </td>
        <td>{book.title}</td>
        <td>{book.copies}</td>
        <td>{book.price}</td>
      </tr>
    );
  });
}
