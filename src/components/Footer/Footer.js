import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  const tags = t('footer.tagsList', { returnObjects: true });
  const logoUrl = 'https://via.placeholder.com/150x100';
  return (
    <footer className="w-full ">
      <svg
        className="h-auto"
        viewBox="0 0 1440 403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M345.185 157.161C146.86 151.813 32.8747 60.2452 0 0V403H1440V327.866C1420.4 333.321 1399.19 335.723 1376.26 334.517C1291.08 330.039 1273.15 212.168 1102.8 236.291C424.32 332.369 636.574 165.019 345.185 157.161Z"
          fill="#f7fafc"
        />
      </svg>
      <div className="bg-gray-100 pb-3">
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="4" md="4" sm="6" xs="12">
              <img
                className="h-20 d-block d-sm-inline mx-auto"
                alt="logo"
                src={logoUrl}
              ></img>
              <p className="mt-2 text-base leading-6 text-center text-sm-left">
                {t('footer.description')}
              </p>
              <div className="d-sm-none my-5 text-center"><MDBIcon fab icon="linkedin" className="w-5" />  <MDBIcon fab icon="facebook-square" className="w-5" />  <MDBIcon fab icon="twitter-square" className="w-5" /></div>
              <div className="mt-5 text-sm font-bold text-center text-sm-left">
                {t('footer.copyright')}
              </div>
            </MDBCol>
            <MDBCol lg="4" md="4" sm="6" xs="0">
              <div className="d-none d-sm-block">
                <h4 className="text-blue-500 font-bold mb-3 uppercase">
                  {t('footer.followUs')}
                </h4>
                <p>
                  <MDBIcon fab icon="linkedin-in" className="w-5" /> LinkedIn
                </p>
                <p>
                  <MDBIcon fab icon="facebook-f" className="w-5" /> Facebook
                </p>
                <p>
                  <MDBIcon fab icon="twitter" className="w-5" /> Twitter
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="4" md="4" size="0">
              <div className="d-none d-md-block">
                <h4 className="text-blue-500 font-bold mb-3 uppercase">
                  {t('footer.tags')}
                </h4>
                {tags.map((tag) => (
                  <h4 className="inline-block capitalize font-semibold mr-2 mb-2 py-2 px-4 border border-black rounded-full">
                    {tag}
                  </h4>
                ))}
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </footer>
  );
};

export default Footer;
