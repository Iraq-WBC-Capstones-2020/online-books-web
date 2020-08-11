import React from './node_modules/react';

export default function BooksRender({ books }) {
  return books.map((book, index) => {
    const { title, copies, price } = book;
    return (
      <tr key={index}>
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
