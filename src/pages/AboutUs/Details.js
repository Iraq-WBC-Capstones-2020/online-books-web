import React from 'react';
import pic from './pic.png';
import { MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function Details() {
  const { t } = useTranslation();

  const aboutPageTranslation = {
    headerTitle: t('aboutPage.aboutSection.aboutUs'),
    text: t('aboutPage.aboutSection.aboutUsText'),
    ReadMore: t('aboutPage.aboutSection.ReadMoreButton'),
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
              {aboutPageTranslation.headerTitle} :
            </h3>
            <hr className="col-lg-2 h-2 bg-blue-500" />
            <p className="mt-2 mr-5 text-lg text-justify">
              {aboutPageTranslation.text}
            </p>
            <button className="rounded-full h-8 w-1/9 mt-3 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110">
              <span className="text-white">
                {aboutPageTranslation.ReadMore}
              </span>
            </button>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Details;
