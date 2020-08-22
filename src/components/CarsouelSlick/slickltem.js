import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';
import { useTranslation } from 'react-i18next';
import CreateStars from './CreateStars';
import { Link } from 'react-router-dom';
// create 4 items for the carsouel movement
function CarouselItems({ book, index }) {
  const { t } = useTranslation();

  return (
    <div className="mt-md-4 mb-md-4 pl-lg-3" key={index}>
      <MDBCard className="w-30 shadow-none Card" wide>
        <MDBContainer className="w-full">
          <MDBRow className="p-0">
            <MDBCol size="12" md="4" lg="5" className="p-0">
              <Link to="/book/:bookId">
                <img
                  className="imageCardCarsouel"
                  src={book.cover}
                  alt="cover book"
                />
              </Link>
            </MDBCol>

            <MDBCol md="1" lg="1"></MDBCol>

            <MDBCol md="7" lg="6" size="12" className="my-auto">
              <MDBCardBody className="p-lg-0 text-center text-md-left text-lg-left mx-auto">
                <div>
                  <Link to="/author/:authorId">
                    <a className="fontHeader1 mb-0 font-weight-normal  text-2xl">
                      {book.authorName}
                    </a>
                  </Link>
                </div>

                <MDBCardText>
                  <Link to="/book/:bookId">
                    <p className="mb-1 fontHeader2 font-normal font-weight-normal">
                      {book.bookName}
                    </p>
                  </Link>
                  <p className="mb-1 parg1 font-weight-normal">{book.type}</p>
                  <p className="font-black fontPrice font-weight-normal">
                    {book.price}
                  </p>

                  <div className="mb-3">
                    <div className="inline-block mr-2">
                      <CreateStars rate={book.rate} />
                      {'  '}
                      {book.views} {t('carsouelSection.ratings')}
                    </div>
                  </div>
                </MDBCardText>

                <button className="buttomText text-center mycolorPink w-5/6 shadow-xl hover:shadow-lg h-10 text-black font-bold leading-3 rounded-full">
                  {t('carsouelSection.addtocart')}
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCard>
    </div>
  );
}

export default CarouselItems;
