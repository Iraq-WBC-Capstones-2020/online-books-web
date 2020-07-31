import React from 'react';
import pic from './pic.png';
import { MDBRow, MDBCol } from 'mdbreact';

function Details() {
  const aboutPageEnglishTranslation = {
    headerTitle: 'About us',
    text:
      'It is a long established fact that a reader will be distracted bythe readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  content hereh. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of etters, as opposed to using Content h ereh.',
    ReadMoreText: 'Read more',
  };
  return (
    <div className="bg-gray-100 col">
      <MDBRow>
        <MDBCol lg="5">
          <img src={pic} alt="artwork of a girl reading a book" />
        </MDBCol>
        <MDBCol>
          <div className="mt-48">
            <h3 className="font-weight-bold text-3xl ml-1">
              {aboutPageEnglishTranslation.headerTitle} :
            </h3>
            <hr className="col-lg-2 h-2 bg-blue-500" />
            <p className="mt-2 mr-5 text-lg text-justify">
              {aboutPageEnglishTranslation.text}
            </p>
            <button className="rounded-full h-8 w-1/9 mt-3 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110">
              <span className="text-white">
                {aboutPageEnglishTranslation.ReadMoreText}
              </span>
            </button>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Details;
