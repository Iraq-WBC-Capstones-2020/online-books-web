import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const Footer = () => {
  const { t } = useTranslation();
  const tags = t('footer.tagsList', { returnObjects: true });
  const logoUrl = 'https://via.placeholder.com/150x100';
  const socialMediaAccounts = [
    { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com' },
    { name: 'Facebook', icon: 'facebook-f', link: 'https://www.facebook.com' },
    { name: 'Twitter', icon: 'twitter', link: 'https://www.twitter.com' },
  ];
  return (
    <footer className="w-full -mt-10 md:-mt-20 lg:-mt-32">
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
              <div className="d-sm-none my-5 text-center">
                {socialMediaAccounts.map((account) => (
                  <a key={account.name} href={account.link}>
                    <MDBIcon fab icon={account.icon} className="w-5" />
                  </a>
                ))}
              </div>
              <div className="mt-5 text-sm font-bold text-center text-sm-left">
                {t('footer.copyright')}
              </div>
            </MDBCol>
            <MDBCol lg="4" md="4" sm="6" xs="0">
              <div className="d-none d-sm-block">
                <h4 className="text-blue-500 font-bold mb-3 uppercase">
                  {t('footer.followUs')}
                </h4>
                <ul className="text-xl leading-8">
                  {socialMediaAccounts.map((account) => (
                    <li key={account.name}>
                      <a href={account.link}>
                        <MDBIcon fab icon={account.icon} className="w-8" />
                        {account.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </MDBCol>
            <MDBCol lg="4" md="4" size="0">
              <div className="d-none d-md-block">
                <h4 className="text-blue-500 font-bold mb-3 uppercase">
                  {t('footer.tags')}
                </h4>
                {Array.isArray(tags) &&
                  tags.map((tag) => (
                    <h4
                      key={tag}
                      className="inline-block capitalize font-semibold mr-2 mb-2 py-2 px-4 border border-black rounded-full"
                    >
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

Footer.propTypes = {
  tags: PropTypes.array,
  logoUrl: PropTypes.string,
  socialMediaAccounts: PropTypes.array,
};

export default Footer;
