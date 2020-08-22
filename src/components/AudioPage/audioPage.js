import React from 'react';
import './style.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import AudioPlayerPage from './AduioPagePlayer';
import Paragraph from '../Paragraph/Paragraph';
const AudioPageSection = () => {
  const bookInfo = {
    bookName: 'Mind without body',
    bookCover: 'https://via.placeholder.com/353x498',
    description: `is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since
   the 1500s, when an unknown printer took a galley of type and
   scrambled it to make a type specimen book.galley of type and
   scrambled it to make a type specimen book. .galley of type and
   scrambled it to make a type specimen book.type specimen book`,
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="5" size="12">
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <img
              src={bookInfo.bookCover}
              width="353"
              height="498"
              alt="bookCover"
            />
          </div>
        </MDBCol>
        <MDBCol sm="7" size="12">
          <div className="mt-5">
            <h1 className="blue-text">{bookInfo.bookName}</h1>
            <Paragraph>{bookInfo.description}</Paragraph>
          </div>
          <div className="mt-5">
            <AudioPlayerPage />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AudioPageSection;
