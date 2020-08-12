import React from 'react';
import pic from './media/pic.png';
import { MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';

function Details() {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 col">
      <MDBRow>
        <MDBCol lg="5">
          <img src={pic} alt="artwork of a girl reading a book" />
        </MDBCol>
        <MDBCol>
          <div className="mt-48">
            <h3 className="font-weight-bold text-3xl ml-1">
              {t('aboutPage.aboutSection.aboutUs')} :
            </h3>
            <hr className="col-lg-2 h-2 bg-blue-500" />
            <p className="mt-2 mr-5 text-lg text-justify">
              {t('aboutPage.aboutSection.aboutUsText')}
            </p>
            <button className="rounded-full h-8 w-1/9 mt-3 transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110">
              <span className="text-white">
                {t('aboutPage.aboutSection.readMoreButton')}
              </span>
            </button>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Details;
