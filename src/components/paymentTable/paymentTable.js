import React from 'react';
import './paymentTable.scss';
import '../../assets/main.css';
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

const NUMBER_OF_BOOKS = 4;

const BOOKS = Array(NUMBER_OF_BOOKS).fill({
  title: 'book',
  copies: 1,
  price: '15 $',
  id: 3,
});

export default function PaymentTable() {
  const { t } = useTranslation();
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <div className="text-center">
            <p className="h5 mt-5 text-gray-800">
              {t('PaymentPage.booksOrder')}
            </p>
            <hr className="border-4 my-3 mx-4 bg-primary"></hr>
          </div>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th></th>
                <th>{t('PaymentPage.books')}</th>
                <th>{t('PaymentPage.copies')}</th>
                <th>{t('PaymentPage.price')}</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <BooksRender books={BOOKS} />
              <tr>
                <td></td>
                <td>
                  <p className="h6">{t('PaymentPage.total')}</p>
                </td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
