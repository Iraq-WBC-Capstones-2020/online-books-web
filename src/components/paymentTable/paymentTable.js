import React from 'react';
import './paymentTable.scss';
import '../../assets/main.css';
import { useTranslation } from 'react-i18next';
import booksRender from './booksRender';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdbreact';

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
              {booksRender()}
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
