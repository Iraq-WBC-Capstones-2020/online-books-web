import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateStars from '../CarsouelSlick/CreateStars';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
const BookPage = () => {
  const { t } = useTranslation();
  const book = {
    bookName: 'Mind Without Body',
    bookCover: 'https://via.placeholder.com/353x498',
    description: `is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.galley of type and
    scrambled it to make a type specimen book`,
    authortName: 'Ahmed khaled tofeq',
    bookType: 'Fantasy',
    publishDate: '2017',
    price: '15$',
    rate: 3.5,
  };

  const isLoggedIn = false;
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12">
          <div className="mt-5">
            <h1 className="blue-text"> {book.bookName}</h1>
            <span className="gray-text">{book.authortName}</span>
            <br />
            <div className="mt-2 yellow-star">
              <CreateStars rate={book.rate} />
            </div>
            <p className="mt-3 text-2xl leading-7 text-justify">
              {book.description}
            </p>
            <span className="gray-text">{t('bookPage.language')}:Arabic</span>
          </div>
          <br />
          {isLoggedIn ? (
            <>
              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {book.bookType}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {book.publishDate}
                </MDBBtn>
              </div>
              <div className="mt-4">
                <MDBIcon
                  outline
                  className="rounded-circle"
                  color="black"
                  icon="headphones-alt"
                  size="4x"
                />
                <MDBIcon className="ml-5" icon="arrow-down" size="4x" />
              </div>
            </>
          ) : (
            <>
              <span className="gray-text">
                Price: <strong>{book.price}</strong>
              </span>

              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {book.bookType}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {book.publishDate}
                </MDBBtn>
              </div>
              <div className="mt-4">
                <MDBBtn color="primary" className="px-4 rounded-pill">
                  {t('bookPage.addToCart')}
                </MDBBtn>
              </div>
            </>
          )}
        </MDBCol>

        <MDBCol sm="6" size="12">
          <div className="mt-5 d-flex justify-content-center align-self-center">
            <img
              src={book.bookCover}
              alt="Book cover"
              width="353"
              height="498"
            />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BookPage;
