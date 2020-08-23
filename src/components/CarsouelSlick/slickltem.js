import React from 'react';
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
function CarouselItems({ book }) {
  const {
    id,
    author_name,
    author_id,
    name,
    price,
    views,
    rating,
    cover,
    have_audio,
  } = book;
  const { t } = useTranslation();
  return (
    <div className="mt-md-4 mb-md-4 pl-lg-3">
      <MDBCard className="w-30 shadow-none Card" wide>
        <MDBContainer className="w-full">
          <MDBRow className="p-0">
            <MDBCol size="12" md="4" lg="5" className="p-0">
              <Link to="/book/:bookId">
                <img
                  className="imageCardCarsouel"
                  src={cover}
                  alt="cover book"
                />
              </Link>
            </MDBCol>
            <MDBCol md="1" lg="1"></MDBCol>
            <MDBCol md="7" lg="6" size="12" className="my-auto">
              <MDBCardBody className="p-lg-0 text-center text-md-left text-lg-left mx-auto">
                <div>
                  <Link
                    to={`/author/${author_id}`}
                    className="fontHeader1 mb-0 font-weight-normal text-2xl"
                  >
                    {author_name}
                  </Link>
                </div>

                <MDBCardText>
                  <Link to={`/book/${id}`}>
                    <p className="mb-1 fontHeader2 font-normal font-weight-normal">
                      {name}
                    </p>
                  </Link>
                  <p className="mb-1 parg1 font-weight-normal">{`formate: ${
                    have_audio ? 'Audio, PDF' : 'Hardback'
                  }`}</p>
                  <p className="font-black fontPrice font-weight-normal">
                    {`$${price}`}
                  </p>
                  <div className="mb-3">
                    <div className="inline-block mr-2">
                      <CreateStars rate={rating} />
                      <p className="d-md-inline d-block"></p>
                      {''}
                      {`(${views})`}
                      {t('carsouelSection.ratings')}
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
