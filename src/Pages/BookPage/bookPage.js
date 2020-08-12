import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import BookPage from '../../components/BookPage/BookPageSection';
const BookPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BookPage />
    </div>
  );
};

export default BookPage;
