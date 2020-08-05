import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { useTranslation } from 'react-i18next';

export default function AuthorPage() {
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
              <p className="text-3xl font-medium border-b-4 inline border-blue-500">
                {name}:
              </p>
              <p className="text-base leading-loose text-justify">
                {paragraph}
              </p>
              <div className="pb-4">
                <p className="mt-8 font-medium text-sm">{followText}</p>
                <p>
                  {facebookLink && (
                    <a className="mr-3" href={facebookLink}>
                      <svg
                        className="inline-block"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z"
                          fill="#3B5998"
                        />
                      </svg>
                    </a>
                  )}
                  {twitterLink && (
                    <a className="mr-3" href={twitterLink}>
                      <svg
                        className="inline-block"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.04 0H0.96C0.429 0 0 0.429 0 0.96V23.04C0 23.571 0.429 24 0.96 24H23.04C23.571 24 24 23.571 24 23.04V0.96C24 0.429 23.571 0 23.04 0ZM18.459 8.691C18.468 8.832 18.468 8.979 18.468 9.123C18.468 13.527 15.114 18.6 8.985 18.6C7.095 18.6 5.343 18.051 3.867 17.106C4.137 17.136 4.395 17.148 4.671 17.148C6.231 17.148 7.665 16.62 8.808 15.726C7.344 15.696 6.114 14.736 5.694 13.416C6.207 13.491 6.669 13.491 7.197 13.356C6.44318 13.2029 5.76562 12.7934 5.27945 12.1973C4.79327 11.6012 4.52846 10.8552 4.53 10.086V10.044C4.971 10.293 5.49 10.446 6.033 10.467C5.57653 10.1628 5.20217 9.75063 4.94313 9.26709C4.68409 8.78355 4.54837 8.24356 4.548 7.695C4.548 7.074 4.71 6.507 5.001 6.015C5.83771 7.04501 6.88179 7.88743 8.06539 8.4875C9.249 9.08757 10.5456 9.43186 11.871 9.498C11.4 7.233 13.092 5.4 15.126 5.4C16.086 5.4 16.95 5.802 17.559 6.45C18.312 6.309 19.032 6.027 19.674 5.649C19.425 6.42 18.903 7.071 18.21 7.482C18.882 7.41 19.53 7.224 20.13 6.963C19.677 7.629 19.11 8.22 18.459 8.691Z"
                          fill="#08A0E9"
                        />
                      </svg>
                    </a>
                  )}
                  {linkedinLink && (
                    <a className="mr-3" href={linkedinLink}>
                      <svg
                        className="inline-block"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="4" y="3" width="17" height="18" fill="white" />
                        <path
                          d="M4.7031 0C2.11676 0 0 2.11672 0 4.7031V19.2977C0 21.884 2.11672 24 4.7031 24H19.2977C21.884 24 24 21.884 24 19.2977V4.7031C24 2.11676 21.884 0 19.2977 0H4.7031ZM5.886 3.96048C7.1261 3.96048 7.88994 4.77458 7.91352 5.84471C7.91352 6.8912 7.12605 7.72819 5.86202 7.72819H5.83875C4.62226 7.72819 3.83599 6.89125 3.83599 5.84471C3.83599 4.77461 4.64608 3.96048 5.886 3.96048ZM16.5726 8.96211C18.9575 8.96211 20.7454 10.5209 20.7454 13.8707V20.1242H17.1209V14.29C17.1209 12.8239 16.5964 11.8237 15.2847 11.8237C14.2834 11.8237 13.6865 12.4978 13.4245 13.1491C13.3287 13.3821 13.3052 13.7075 13.3052 14.0335V20.1242H9.68074C9.68074 20.1242 9.72831 10.2412 9.68074 9.21787H13.3059V10.7623C13.7876 10.0192 14.6491 8.96211 16.5726 8.96211ZM4.04978 9.21866H7.67423V20.1243H4.04978V9.21866Z"
                          fill="#0077B5"
                        />
                      </svg>
                    </a>
                  )}
                </p>
              </div>
            </MDBCol>
            <MDBCol lg="5" md="4" sm="3" size="12" className="pt-5 pb-4">
              <img
                src={authorPageImg}
                className="rounded-lg mx-auto h-auto max-w-full"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="text-center mt-5">
            <p className="text-3xl font-medium inline border-b border-gray-400 px-5">
              {authorBookText}
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
