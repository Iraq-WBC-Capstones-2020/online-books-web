import React from 'react';
import './style.scss';
import bookCover from './bookCover.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
const BlogPage = () => {
  const { t } = useTranslation();
  const bookName = 'Mind Without Body';
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="6" size="12">
          <div className="mt-5">
            <h1 className="blue-text">{bookName}</h1>
            <span className="gray-text">Ahmed khaled tofeq</span>
            <br />
            <div className="mt-2 yellow-star">
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
              <MDBIcon icon="star"></MDBIcon>
            </div>
            <p className="mt-3 paragraph">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.galley of type and
              scrambled it to make a type specimen book.
            </p>
            <span className="gray-text">{`${t('language')}:Arabic`}</span>
            <br />
          </div>
          <div className="mt-3">
            <MDBBtn color="info" className="mr-3 px-3 py-0">
              Fantasy
            </MDBBtn>
            <MDBBtn color="info" className=" px-3 py-0">
              2017
            </MDBBtn>
          </div>
          <div className="mt-4">
            <MDBIcon
              outline
              className="  rounded-circle"
              color="black"
              icon="headphones-alt"
              size="4x"
            />
            <MDBIcon className="ml-5" icon="arrow-down" size="4x" />
          </div>
        </MDBCol>

        <MDBCol sm="6" size="12">
          <div className="mt-5 d-flex justify-content-center align-self-center ">
            <img src={bookCover} alt="Book cover" width="353" height="498" />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BlogPage;
