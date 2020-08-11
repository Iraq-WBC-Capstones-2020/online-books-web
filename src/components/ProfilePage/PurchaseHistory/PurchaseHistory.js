import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function PurchaseHistory() {
  const { t } = useTranslation();
  const SETS_ENTRIES_OPTION_TO_DISPALY = [5, 10, 20];
  const INITIAL_NUMBER_PAGES_PAGINATION = 4;
  const NUMBERS_OF_ROWS = 5;
  const numberOfPurchases = 23;
  const purchases = Array(numberOfPurchases).fill({
    orderId: '25565845',
    books: 'System Architect',
    status: 'Edinburgh',
    originalPrice: '61',
    totalPrice: '2011/04/25',
  });
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
    rows: purchases,
  });
  return (
    <MDBDataTableV5
      hover
      entries={NUMBERS_OF_ROWS}
      entriesOptions={SETS_ENTRIES_OPTION_TO_DISPALY}
      pagesAmount={INITIAL_NUMBER_PAGES_PAGINATION}
      data={datatable}
    />
  );
}

export default PurchaseHistory;
