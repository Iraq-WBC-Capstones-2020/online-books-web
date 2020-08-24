import React from 'react';
export default function BooksRender({ books, changeCheck }) {
  return books.map((book) => {
    const { title, copies, price, id, checked } = book;

    return (
      <tr
        key={id}
        className="text-center"
        style={{ textDecoration: !checked ? 'line-through' : 'none' }}
      >
        <td>
          <input
            type="checkbox"
            onChange={(event) => changeCheck(id, event.target.checked)}
            checked={checked}
            line-through
          />
        </td>
        <td>{title}</td>
        <td>{copies}</td>
        <td>{price}</td>
      </tr>
    );
  });
}
