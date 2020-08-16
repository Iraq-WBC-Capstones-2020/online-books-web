import React from 'react';

export default function BooksRender({ books }) {
  return books.map((book, index) => {
    const { title, copies, price } = book;
    return (
      <tr key={index} className="text-center">
        <td>
          <input type="checkbox" />
        </td>
        <td>{title}</td>
        <td>{copies}</td>
        <td>{price}</td>
      </tr>
    );
  });
}
