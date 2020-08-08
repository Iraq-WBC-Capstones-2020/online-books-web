import React from 'react';
import './style.scss';
import CreateStars from './starRate';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
const BookPage = () => {
  const { bookPageTranslate } = useTranslation();

  const bookPage = {
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
  };

  const isLoggedIn = false;
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12">
          <div className="mt-5">
            <h1 className="blue-text"> {bookPage.bookName}</h1>
            <span className="gray-text">{bookPage.authortName}</span>
            <br />
            <div className="mt-2 yellow-star">
              <CreateStars />
            </div>
            <p className="mt-3 text-2xl leading-7 text-justify">
              {bookPage.description}
            </p>
            <span className="gray-text">
              {bookPageTranslate('bookPage.language')}:Arabic
            </span>
          </div>
          <br />
          {isLoggedIn ? (
            <>
              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {bookPage.bookType}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {bookPage.publishDate}
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
                Price: <strong>{bookPage.price}</strong>
              </span>

              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {bookPage.bookType}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {bookPage.publishDate}
                </MDBBtn>
              </div>
              <div className="mt-4">
                <MDBBtn color="primary" className="px-4 rounded-pill">
                  {bookPageTranslate('bookPage.addToCart')}
                </MDBBtn>
              </div>
            </>
          )}
        </MDBCol>

        <MDBCol sm="6" size="12">
          <div className="mt-5 d-flex justify-content-center align-self-center">
            <img
              src={bookPage.bookCover}
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
