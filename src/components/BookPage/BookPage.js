import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateStars from '../CarsouelSlick/CreateStars';
import Paragraph from '../Paragraph/Paragraph';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
function BookPage({ book }) {
  const { t } = useTranslation();
  const {
    name,
    price,
    cover,
    description,
    author_id,
    author_name,
    released_date,
    rating,
    tags,
  } = book;
  const isLoggedIn = false;
  const yearReleased = released_date.toDate().getFullYear();
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12" className="order-1 order-sm-0">
          <div className="mt-5">
            <h1 className="blue-text"> {name}</h1>
            <Link to={`/author/${author_id}`}>
              <span className="gray-text">{author_name}</span>
            </Link>
            <br />
            <div className="mt-2 yellow-star">
              <CreateStars rate={rating} />
            </div>

            <Paragraph>{description}</Paragraph>
            <span className="gray-text">{t('bookPage.language')}:Arabic</span>
          </div>
          <br />
          {isLoggedIn ? (
            <>
              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {tags}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {yearReleased}
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
                Price: <strong>{price}IQD</strong>
              </span>

              <div className="mt-3">
                <MDBBtn color="info" className="mr-3 px-3 py-0">
                  {tags}
                </MDBBtn>
                <MDBBtn color="info" className="px-3 py-0">
                  {yearReleased}
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

        <MDBCol sm="6" size="12" className="order-0 order-sm-1">
          <div className="mt-5 d-flex justify-content-center align-self-center">
            <img src={cover} alt="Book cover" width="353" height="498" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default BookPage;
