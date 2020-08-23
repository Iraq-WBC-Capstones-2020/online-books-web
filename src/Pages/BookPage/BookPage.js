import React, { useEffect, useState } from 'react';
import './style.scss';
import BookPageSection from '../../components/BookPage/BookPage';
import Book from '../../models/Book';
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState();
  useEffect(() => {
    (async () => {
      const book = await Book.getBookFromDB(bookId);
      setBook(book);
    })();
  }, [bookId]);
  return <>{!book ? <Spinner /> : <BookPageSection book={book} />}</>;
}

export default BookPage;
