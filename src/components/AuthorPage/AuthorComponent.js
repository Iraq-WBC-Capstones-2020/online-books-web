import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../Paragraph/Paragraph';
import SectionTitle from '../SectionTitle/SectionTitle';

function AuthorComponent({ author }) {
  const { t } = useTranslation();
  const name = author.name;
  const firstName = name.split(' ')[0];
  const paragraph = author.bio;
  const authorPageImg = author.avatar;
  const socialMediaAccounts = author.socialMedia;
  const followText = `${t('authorPage.follow')} ${firstName}`;
  const authorBookText = `${firstName}'s ${t('authorPage.books')}`;
  return (
    <>
      <div className="bg-gray-200">
        <MDBContainer>
          <MDBRow className="h-auto">
            <MDBCol lg="7" md="8" sm="9" size="12" className="py-4">
              <Paragraph title={name + ':'}>{paragraph}</Paragraph>
              {socialMediaAccounts && socialMediaAccounts.length !== 0 && (
                <div className="pb-4 text-xl">
                  <p className="mt-8 font-medium">{followText}</p>
                  <p className="text-2xl">
                    {socialMediaAccounts.map((account) => (
                      <a key={account.name} href={account.link}>
                        <MDBIcon fab icon={account.icon} className="mr-3" />
                      </a>
                    ))}
                  </p>
                </div>
              )}
            </MDBCol>
            <MDBCol lg="5" md="4" sm="3" size="12" className="pt-5 pb-4">
              <img
                src={authorPageImg}
                alt={author.name}
                className="rounded-lg mx-auto h-auto max-w-full"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <SectionTitle>{authorBookText}</SectionTitle>
    </>
  );
}
export default AuthorComponent;
