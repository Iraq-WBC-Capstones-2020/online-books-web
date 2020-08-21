import { authorsRef, booksRef } from './../api/firebase';
import Book from './Book';

export default class Author {
  constructor({ id, name, avatar, bio, socialMedia } = {}) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.bio = bio;
    this.socialMedia = socialMedia ? socialMedia : [];
  }
  static async getAuthorFromDB(id) {
    const doc = await authorsRef.doc(id).get();
    return new Author(doc.data());
  }
  async getBooks() {
    if (this.books) return this.books;
    const querySnapshot = await booksRef
      .where('author_id', '==', this.id)
      .get();
    const books = querySnapshot.docs.map((book) => new Book(book.data()));
    this.books = books;
    return books;
  }
  static async getAuthors() {
    const documentData = await authorsRef.get();
    const authors = documentData.docs.map((author) => new Author(author.data()));
    return authors;
}
  updateAuthorInfo() {
    if (!this.id) this.id= authorsRef.doc().id;
    authorsRef.doc(this.id).set(this);
  }
}
