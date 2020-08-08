import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';

function AuthorPage() {
  const { t } = useTranslation();
  const name = 'Ann Druyan';
  const firstName = name.split(' ')[0];
  const paragraph =
    'Ann Druyan is an Emmy and Peabody Award-winning writer and producer who has dedicated her life to science. In 1980, Ann, alongside late husband Carl Sagan, wrote the 1980 original COSMOS: A Personal Voyage — which was a 13-part television event on PBS. COSMOS is still one of the most-watched programs in the history of PBS and its airing was a major moment for science-themed television.';
  const authorPageImg = 'https://via.placeholder.com/300x600';
  const facebookLink = 'https://www.facebook.com/';
  const twitterLink = 'https://www.twitter.com/';
  const linkedinLink = 'https://www.linkedin.com/';
  const followText = `${t('authorPage.follow')} ${firstName}`;
  const authorBookText = `${firstName}'s ${t('authorPage.books')}`;
  return (
    <>
      <div className="bg-gray-200">
        <MDBContainer>
          <MDBRow className="h-auto">
            <MDBCol lg="7" md="8" sm="9" size="12" className="py-4">
              <Paragraph title={name + ':'}>{paragraph}</Paragraph>
              <div className="pb-4 text-xl">
                <p className="mt-8 font-medium">{followText}</p>
                <p className="text-2xl">
                  {facebookLink && (
                    <a className="mr-3" href={facebookLink}>
                      <MDBIcon fab icon="facebook-square" />
                    </a>
                  )}
                  {twitterLink && (
                    <a className="mr-3" href={twitterLink}>
                      <MDBIcon fab icon="twitter-square" />
                    </a>
                  )}
                  {linkedinLink && (
                    <a className="mr-3" href={linkedinLink}>
                      <MDBIcon fab icon="linkedin" />
                    </a>
                  )}
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="5" md="4" sm="3" size="12" className="pt-5 pb-4">
              <img
                src={authorPageImg}
                alt={name}
                className="rounded-lg mx-auto h-auto max-w-full"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="text-center mt-5">
        <h1 className="text-3xl font-medium inline border-b border-gray-400 px-5">
          {authorBookText}
        </h1>
      </div>
    </>
  );
}
export default AuthorPage;
