import React, { useState, useEffect } from 'react';
import './PaymentTable.scss';
import { useTranslation } from 'react-i18next';
import BooksRender from './BooksRender';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdbreact';

export default function PaymentTable() {
  const [BOOKS, setBooks] = useState([
    {
      title: 'book',
      copies: 1,
      price: 15,
      id: 1,
      checked: false,
    },
    {
      title: 'book',
      copies: 1,
      price: 15,
      id: 2,
      checked: false,
    },
    {
      title: 'book',
      copies: 1,
      price: 15,
      id: 3,
      checked: false,
    },
    {
      title: 'book',
      copies: 1,
      price: 15,
      id: 4,
      checked: false,
    },
  ]);
  const { t } = useTranslation();
  const [total, setTotal] = useState({ copies: 0, price: 0 });
  useEffect(() => {
    let copies = 0,
      price = 0;
    for (const book of BOOKS) {
      if (book.checked) {
        copies++;
        price += book.price;
      }
    }
    setTotal({ copies, price });
  }, [BOOKS]);
  const changeCheck = (id, value) => {
    setBooks((oldBooks) => {
      const newBooks = oldBooks.map((book) => {
        if (book.id === id) {
          book.checked = value;
        }
        return book;
      });
      return newBooks;
    });
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <div className="text-center">
            <p className="h5 mt-5 text-gray-800">
              {t('paymentPage.booksOrder')}
            </p>
            <hr className="border-4 my-3 mx-4 bg-primary"></hr>
          </div>
          <MDBTable>
            <MDBTableHead>
              <tr className="text-center">
                <th></th>
                <th>{t('paymentPage.books')}</th>
                <th>{t('paymentPage.copies')}</th>
                <th>{t('paymentPage.price')}</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <BooksRender books={BOOKS} changeCheck={changeCheck} />
              <tr>
                <td></td>
                <td>
                  <p className="h6">{t('paymentPage.total')}</p>
                </td>
                <td>{total.copies}</td>
                <td>{total.price}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
