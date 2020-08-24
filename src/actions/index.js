export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const fetchBooks = (books) => {
  return {
    type: 'FETCH_BOOKS',
    payload: books,
  };
};

export const filterByAuthors = (author) => {
  return {
    type: 'FILTER_BY_AUTHORS',
    payload: author,
  };
}; 