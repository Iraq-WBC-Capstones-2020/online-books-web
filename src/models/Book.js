import { booksRef, authorsRef, usersRef } from './../api/firebase';
import Author from './Author';
import { books } from './data';

export default class Book {
  constructor({
    id,
    name = null,
    type = null,
    price = null,
    dis_count = null,
    cover = null,
    have_audio = null,
    description = null,
    audio_ref = null,
    author_id = null,
    author_name = null,
    released_date = null,
    views = null,
    rating = null,
    ref = null,
    tags = null,
  } = {}) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.dis_count = dis_count;
    this.cover = cover;
    this.have_audio = have_audio;
    this.description = description;
    this.audio_ref = audio_ref;
    this.author_id = author_id;
    this.author_name = author_name;
    this.released_date = released_date;
    this.views = views;
    this.rating = rating;
    this.ref = ref;
    this.tags = tags;
  }
  async getAuthor() {
    return await Author.getAuthorFromDB(this.author_id);
  }
  static async getBookFromDB(id) {
    const doc = await booksRef.doc(id).get();
    return new Book(doc.data());
  }
  async addBookToCart(user_id) {
    await usersRef
      .doc(user_id)
      .collection('cart')
      .doc(this.id)
      .set({ ...this });
  }
  static async getBooks() {
    const documentData = await booksRef.get();
    const books = documentData.docs.map((book) => new Book(book.data()));
    return books;
  }
  updateBookInfo() {
    if (!this.id) this.id = booksRef.doc().id;
    booksRef.doc(this.id).set({ ...this });
  }
  static async sendBooks() {
    for (const book of books) {
      const author = (
        await authorsRef.where('name', '==', book.authorName).limit(1).get()
      ).docs[0].data();
      book.author_id = author.id;
      book.author_name = author.name;
      const oneBook = new Book(book);
      await oneBook.updateBookInfo();
    }
  }
}
