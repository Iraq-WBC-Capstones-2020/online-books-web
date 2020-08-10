import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDataTableV5 } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function PurchaseHistory() {
  const { t } = useTranslation();

  const [datatable] = useState({
    columns: [
      {
        label: t('profilePage.orderId'),
        field: 'orderId',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'orderId',
        },
      },
      {
        label: t('profilePage.books'),
        field: 'books',
      },
      {
        label: t('profilePage.status'),
        field: 'status',
      },
      {
        label: t('profilePage.originalPrice'),
        field: 'originalPrice',
      },
      {
        label: t('profilePage.totalPrice'),
        field: 'totalPrice',
      },
    ],
    rows: [
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
      {
        orderId: 'Tiger Nixon',
        books: 'System Architect',
        status: 'Edinburgh',
        originalPrice: '61',
        totalPrice: '2011/04/25',
      },
    ],
  });
  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
    />
  );
}

export default PurchaseHistory;
