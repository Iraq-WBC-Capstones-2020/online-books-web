const booksReducer = (books = { books: null, fliteredBooks: null }, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        fetchedBooks: [...action.payload],
        fliteredBooks: books.fliteredBooks
          ? books.fliteredBooks
          : [...action.payload],
      };
    case 'FILTER_BY_AUTHORS':
      return {
        fetchedBooks: books.fetchedBooks,
        fliteredBooks: books.fetchedBooks.filter(
          (book) => book.author_id === action.payload.id
        ),
      };
    default:
      return books;
  }
};

export default booksReducer;
