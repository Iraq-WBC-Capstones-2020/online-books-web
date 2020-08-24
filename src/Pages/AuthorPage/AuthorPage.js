import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Author from '../../models/Author';
import Spinner from '../../components/Spinner/Spinner';
import AuthorComponent from '../../components/AuthorPage/AuthorComponent';
function AuthorPage() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState();
  useEffect(() => {
    (async () => {
      const author = await Author.getAuthorFromDB(authorId);
      setAuthor(author);
    })();
  }, [authorId]);
  return (
    <>
      {!author ? (
        <Spinner />
      ) : (
        <AuthorComponent author={author}></AuthorComponent>
      )}
    </>
  );
}
export default AuthorPage;
