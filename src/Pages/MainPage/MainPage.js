import React, { useState, useEffect } from 'react';
//style files  for mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//main component
import Paragraph from '../../components/CarsouelSlick/paragraph';
import CarsouelSlick from '../../components/CarsouelSlick/carsouelSlick';
import SearchSection from '../../components/searchSection/searchSection';
import ModalSearchSection from '../../components/searchSection/ModalSearchSection';
import ShowCardsSection from '../../components/MainPageCards/ShowCardsSection';
import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
import AuthorSection from '../../components/PopularAuthors/PopularAuthors';
import Book from '../../models/Book';
import Author from '../../models/Author';
import Spinner from '../../components/Spinner/Spinner';
import PropTypes from 'prop-types';
import { fetchBooks } from './../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
function Main({ modal8, handelModel8 }) {
  const [authors, setAuthors] = useState();
  const fetchedBooks = useSelector((state) => state.books.fetchedBooks);

  const fliteredBooks = useSelector((state) => state.books.fliteredBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const books = await Book.getBooks();
      const authors = await Author.getAuthors();
      setAuthors(authors);
      dispatch(fetchBooks(books));
    })();
  }, []);
  return (
    <>
      {!fetchedBooks ? (
        <Spinner />
      ) : (
        <>
          <Paragraph />
          <CarsouelSlick books={fetchedBooks} highlightText="bestSellers" />
          {/* */}
          <MDBContainer className="mainContainer">
            <MDBRow around>
              <MDBCol
                size="0"
                md="3"
                lg="3"
                className="containerSearchSection bg-black"
              >
                <SearchSection authors={authors} />
              </MDBCol>

              {/*Modal for search section will appeare in the small devices */}
              <ModalSearchSection modal8={modal8} handelModel8={handelModel8} />

              {/*GRID BOOKS md="8"*/}
              <MDBCol
                size="11"
                lg="8"
                className="md:grid-cols-12 px-md-3 paddingZero"
              >
                <MDBContainer>
                  <ShowCardsSection books={fliteredBooks} />
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <CarsouelSlick books={fetchedBooks} highlightText="newRelease" />
          {/*Popular authors */}
          {!authors ? <Spinner /> : <AuthorSection authors={authors} />}
        </>
      )}
    </>
  );
}
Main.propTypes = {
  modal8: PropTypes.bool,
  handelModel8: PropTypes.func,
};
export default Main;
