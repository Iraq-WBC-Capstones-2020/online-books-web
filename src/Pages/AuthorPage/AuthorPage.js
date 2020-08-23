import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useTranslation } from 'react-i18next';
import Paragraph from '../../components/Paragraph/Paragraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useParams } from 'react-router-dom';
import Author from '../../models/Author';
import Spinner from '../../components/Spinner/Spinner';

function AuthorPage() {
  const { t } = useTranslation();
  const { authorId } = useParams();
  const [author, setAuthor] = useState();
  useEffect(() => {
    (async () => {
      const author = await Author.getAuthorFromDB(authorId);
      setAuthor(author);
    })();
  }, [authorId]);
  if (author) {
    var name = author.name;
    var firstName = name.split(' ')[0];
    var paragraph = author.bio;
    var authorPageImg = author.avatar;
    var socialMediaAccounts = author.socialMedia;
    var followText = `${t('authorPage.follow')} ${firstName}`;
    var authorBookText = `${firstName}'s ${t('authorPage.books')}`;
  }
  return (
    <>
      {!author ? (
        <Spinner />
      ) : (
        <>
          <div className="bg-gray-200">
            <MDBContainer>
              <MDBRow className="h-auto">
                <MDBCol lg="7" md="8" sm="9" size="12" className="py-4">
                  <Paragraph title={name + ':'}>{paragraph}</Paragraph>
                  {socialMediaAccounts && socialMediaAccounts.length != 0 && (
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
      )}
    </>
  );
}
export default AuthorPage;
